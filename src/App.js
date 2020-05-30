import React, { Component } from 'react';
import axios from 'axios';
import DataForm from './DataForm.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Information from './Information.js';
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [], // save the returened data from the pi
      imgFile: null, //save the actual img file
      imgSrc: null, // save the img src
      classifiedData: [], // save the classified data
      showInfo: false, //to show or to hide the help information section
    };
  }

  // event handler to image change
  handleImageChange = (event) => {
    const allowedFormat = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp'];
    const fileType = event.target.files[0].type;
    if (allowedFormat.indexOf(fileType) >= 0) {
      this.setState({
        classifiedData: [],
        imgFile: event.target.files[0],
        imgSrc: URL.createObjectURL(event.target.files[0]),
      });
      URL.revokeObjectURL(event.target.files[0]); //to avoid memory issues
    }
    else {
      alert('Wrong file format!! Please choose an image file!');
    }
  }

  // a function to analyze the data on the image
  analyzeData = () => {
    let regions = this.state.data;
    const linesArray = [];
    regions.forEach((region) => { // map over the regions
      region.lines.forEach((line) => { //map over the lines 
        const currentLine = line.words.map((word) => { //map over the words
          return word.text;
        });
        const lineAsString = currentLine.join(' ');
        linesArray.push(lineAsString); //create a new array to push all the lines to it
      });
    });

    // analyzing process using RegEx
    // IMPORTANT NOTE: the application sometimes confuses between Company name and person name because they bothe have the same format
    let companyFound, nameFound, positionFound, phoneFound, addressFound;
    companyFound = nameFound = positionFound = addressFound = false;
    const namePattern = /^[a-z|.|-]{2,}\s+[a-z|.|-]+(\s[a-z|.|-|,]+)?/i; //built by me
    const companyPattern = /^[a-z|.|-]+(\s[a-z|.|-]+)*$/i;//built by me
    const positionPattern = /^([a-z]+\s*[.|-|\\|/|&]*\s*)*$/i;//built by me
    const emailPattern = /[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i; //created by me
    const urlPattern = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i; //copied from the internet
    const mobilePattern = /^((mobile|mob|cell|hand|c|m|d|direct)\b[.|:|,]?\s*)?(\(?[+]?[0-9]{1,4}\)?\s*-?)?(\(?[0-9]{1,2}\)?\s*)?([\\|/|(|.|-]?\s*[0-9]{3,}\s*[\\|/|)|.|-]?\s*){2,}/i;//built by me
    const phonePattern = /^((phone|tel|telephone|work|t|w|p|ph|office)\b[.|:|,]?\s*)?(\(?[+]?[0-9]{1,4}\)?\s*-?)?(\(?[0-9]{1,2}\)?\s*)?([\\|/|(|.|-]?\s*[0-9]{3,}\s*[\\|/|)|.|-]?\s*){2,}/i;//built by me
    const numberPattern = /(\(|\+|[0-9])+/;//built by me
    const extensionPattern = /(x|ext|extension|e)+\s*[.|:|-]?\s*[0-9]{1,4}?$/i;//built by me
    const faxPattern = /^((fax|f)\b[.|:|,]?\s*)?(\(?[+]?[0-9]{1,4}\)?\s*-?)?(\(?[0-9]{1,2}\)?\s*)?([\\|/|(|.|-]?\s*[0-9]{3,}\s*[\\|/|)|.|-]?\s*){2,}/i;//built by me
    const tollPattern = /^((toll|toll-free|toll free|toll|toli, free)\b[.|:|,]?\s*)?(\(?[+]?[0-9]{1,4}\)?\s*-?)?(\(?[0-9]{1,2}\)?\s*)?([\\|/|(|.|-]?\s*[0-9]{3,}\s*[\\|/|)|.|-]?\s*){2,}/i;//built by me
    const addressPattern1 = /\d+\s+[A-z]+[.]?[-|,]?\s*([A-z]*[0-9]*[.]?[-|,|#]?\s*)*/i;//built by me
    const addressPattern2 = /(po box|p.o.box|po. box|po.box)+\s+\d+\s*([A-z]*[0-9]*[.]?[-|,|#]?\s*)*/i;//
    let matchingArray;
    let dataObj;
    let numberIndex, numberText;
    const classifiedData = linesArray.map((line) => {
      dataObj = {};
      matchingArray = [];
      if (companyPattern.test(line) && !companyFound && !addressFound) { //fetching company info
        matchingArray = line.match(companyPattern);
        dataObj.type = 'company';
        dataObj.value = matchingArray[0];
        companyFound = true;
      }
      else if (namePattern.test(line) && !nameFound && !addressFound) {//fetching person name
        matchingArray = line.match(namePattern);
        dataObj.type = 'name';
        dataObj.value = matchingArray[0];
        nameFound = true;
      }
      else if (positionPattern.test(line) && nameFound && !positionFound && !addressFound) { //fetcging job title
        matchingArray = line.match(positionPattern);
        dataObj.type = 'position';
        dataObj.value = matchingArray[0];
        positionFound = true;
      }
      else if (emailPattern.test(line)) { //fetching the email
        matchingArray = line.match(emailPattern);
        dataObj.type = 'email';
        dataObj.value = matchingArray[0];
      }
      else if (urlPattern.test(line)) { //fetching the url
        matchingArray = line.match(urlPattern);
        dataObj.type = 'website';
        dataObj.value = matchingArray[0];
      }
      else if (phonePattern.test(line) && !phoneFound) { //fetching the phone number
        matchingArray = line.match(phonePattern);
        numberIndex = matchingArray[0].search(numberPattern);
        numberText = matchingArray[0].substr(numberIndex, matchingArray[0].length);
        dataObj.type = 'phone';
        phoneFound = true;
        if (extensionPattern.test(line)) { //fetching the extension
          dataObj.value = [];
          dataObj.value.push(numberText);
          matchingArray = line.match(extensionPattern);
          numberIndex = matchingArray[0].search(numberPattern);
          numberText = matchingArray[0].substr(numberIndex, matchingArray[0].length);
          dataObj.value.push(numberText);
        }
        else {
          dataObj.value = numberText;
        }
      }
      else if (mobilePattern.test(line)) { //fetching the mobile number
        matchingArray = line.match(mobilePattern);
        numberIndex = matchingArray[0].search(numberPattern);
        numberText = matchingArray[0].substr(numberIndex, matchingArray[0].length);
        dataObj.type = 'mobile';
        dataObj.value = numberText;
      }
      else if (faxPattern.test(line)) { //fetching the fax number
        matchingArray = line.match(faxPattern);
        numberIndex = matchingArray[0].search(numberPattern);
        numberText = matchingArray[0].substr(numberIndex, matchingArray[0].length);
        dataObj.type = 'fax';
        dataObj.value = numberText;
      }
      else if (tollPattern.test(line)) { //fetching the toll free number
        matchingArray = line.match(tollPattern);
        numberIndex = matchingArray[0].search(numberPattern);
        numberText = matchingArray[0].substr(numberIndex, matchingArray[0].length);
        dataObj.type = 'fax';
        dataObj.value = numberText;
      }
      else if (!addressFound) { //fetching the address
        if (addressPattern1.test(line)) {
          matchingArray = line.match(addressPattern1);
        }
        else if (addressPattern2.test(line)) {
          matchingArray = line.match(addressPattern2);
        }
        if (matchingArray.length !== 0) {
          addressFound = true;
          dataObj.type = 'address';
          dataObj.value = matchingArray[0];
        }
      }
      else if (addressFound) {
        matchingArray.push(line); //adding to the address
        dataObj.type = 'address';
        dataObj.value = line;
      }
      if (matchingArray.length === 0) {
        dataObj.type = 'other';
        dataObj.value = line;
      }
      return dataObj;
    });
    this.setState({ //update the state
      classifiedData: classifiedData,
    });
  }

  //an event handler fires when the form is submitted 
  handleSubmit = (event) => {
    event.preventDefault();
    const url = 'https://abirvision.cognitiveservices.azure.com/vision/v3.0/ocr';
    let subscriptionKey ='fb000dd4edb34ee69cb43359984ee319';
    var formData = new FormData();
    formData.append('file', this.state.imgFile);
    var options = {
      'method': 'POST',
      'url': url,
      'headers': {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'content-type': `multipart/form-data; boundary=${formData._boundary}`,
      },
      data: formData,
    };
    axios(options).then((response) => { // using axios to call the api
      this.setState({
        data: response.data.regions,
      });
      this.analyzeData();
    }).catch(() => {
      alert(`Your order can't be processeded right now please try again later`);
    });
  };

  // a function used to reset all the state variables
  resetData = (event) => {
    event.preventDefault();
    this.setState(() => {
      return {
        data: [],
        imgFile: null,
        imgSrc: null,
        classifiedData: [],
        showInfo: false,
      }
    });
  }

  // function to show the help information 
  showInfo = () => {
    this.setState({
      showInfo: true,
    });
  }

  // a function to hide the help informtion
  hideInfo = (e) => {
    e.preventDefault();
    this.setState({
      showInfo: false,
    });
  }

  // render method
  render() {
    return (
      <div>
        <Header showInfo={this.showInfo} />
        <main className="wrapper">
         
          {
            this.state.showInfo ? <Information hideInfo={this.hideInfo} /> :
              <section >
                <h1>
                  Turn your business cards into Contact Cards
          </h1>
                <form className="imgUploadForm" action="" onSubmit={this.handleSubmit}>
                  <h2>Select a business card to upload</h2>
                  {
                    this.state.imgSrc === null ?
                      <div className="fileUploadtDiv">
                        <label htmlFor="imageFileInput" className="visuallyHidden">Upload business card</label>
                        <input type="file" id="imageFileInput" onChange={this.handleImageChange} required accept="image/*" />
                        <i className="fas fa-cloud-upload-alt" aria-hidden="true"><span className="srOnly">browse to to select an image</span></i>
                      </div>
                      :
                      <div>
                        < img src={this.state.imgSrc} alt="business card" />
                        {this.state.classifiedData.length === 0 ?
                          <button type="submit" >submit</button> : null
                        }
                        <button onClick={this.resetData}>Select another card</button>
                      </div>
                  }
                </form>
                {this.state.classifiedData.length > 0 ?
                  <DataForm dataArray={this.state.classifiedData} /> :
                  null}
              </section>
          }
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
