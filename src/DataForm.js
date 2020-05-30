import React, { Component } from 'react';
import FileSaver from "file-saver";
class DataForm extends Component {
    // this component is used to show the analyzed data in a form
    constructor() {
        super();
        this.state = {
            company: '',
            name: '',
            website: '',
            email: '',
            position: '',
            phone: '',
            extension: '',
            mobile: '',
            fax: '',
            toll: '',
            address: '',
            other: '',
            dialogOpen: false,
            selectedOption:'',
        };
    }

    showDialog= (event)=>{
        event.preventDefault();
        this.setState({
            dialogOpen: true,
        });
    }

    closeDialog = (event) => {
        event.preventDefault();
        this.setState({
            dialogOpen: false,
        });
    }
    onValueChange=(event)=>{
        this.setState({
            selectedOption: event.target.value
        });
    }
    // this function is used to save the information from the form to a V Card file
    
    exportContact = (event) => {
        event.preventDefault();
        this.setState({
            dialogOpen: false,
        });
        const fileType= this.state.selectedOption;
        let file;
        switch(fileType){
            case 'ios':
               file = new Blob(
                    [`BEGIN:VCARD
VERSION:3.0
FN:${this.state.name}
item1.EMAIL;TYPE=INTERNET:${this.state.email}
item1.X-ABLabel:
TEL;TYPE=CELL:${this.state.mobile}
TEL;TYPE=WORK:${this.state.phone}
item2.TEL:${this.state.fax}
item2.X-ABLabel:workFax
item3.TEL:${ this.state.toll}
item3.X-ABLabel:Toll Free
item4.ADR:;;${this.state.address}
item4.X-ABLabel:
item5.ORG:${this.state.company};
item5.X-ABLabel:
item6.TITLE:${this.state.position}
item6.X-ABLabel:
item7.URL:${this.state.website}
item7.X-ABLabel:
NOTE: ${ this.state.other}
CATEGORIES:myContacts
END:VCARD
            `], { type: "text/vcard;charset=utf-8" });
                FileSaver.saveAs(
                    file,
                    `${this.state.name}.vcf`,
                    true
                );
                break;
    case 'csv': 
                var address = this.state.address.replace(/,/g, " ");
                file = new Blob(
                    [`Name,E-mail Address,Business Phone,Mobile Phone,Business Fax,TTY/TDD Phone,Job Title,Company,Address 1 - Formatted,Web Page,Notes
${this.state.name},${this.state.email},${this.state.phone},${this.state.mobile},${this.state.fax},${this.state.toll},${this.state.position},${this.state.company},${address},${this.state.website},${this.state.other}`], {type: "text/csv;charset=utf-8" }); 
                FileSaver.saveAs(
                    file,
                    `${this.state.name}.csv`,
                    true
                );
    break;
default:
                file = new Blob(
                    [`BEGIN:VCARD
VERSION:2.1
FN:${this.state.name}
TEL;CELL:${this.state.mobile}
TEL;WORK:${this.state.phone}
TEL;WORK;FAX:${this.state.fax}
TEL;X-CUSTOM(CHARSET=UTF-8,ENCODING=QUOTED-PRINTABLE,=54=6F=6C=6C=20=46=72=65=65):${ this.state.toll}
EMAIL;WORK:${this.state.email}
ADR;WORK:;;${this.state.address}
ORG:${this.state.company};
TITLE:${this.state.position}
URL:${this.state.website}
NOTE: ${ this.state.other}
END:VCARD
            `], { type: "text/vcard;charset=utf-8" });
                FileSaver.saveAs(
                    file,
                    `${this.state.name}.vcf`,
                    true
                );
        }
       
    }

    // this event handler to handle any text input/textarea change 
    handleInputChange = (event) => {
        const inputId = event.target.id;
        const inputText = event.target.value;
        this.setState(() => {
            return { [inputId]: inputText };
        });
    }

    //load all the information from the props sent by the parent to the state
    componentDidMount() {
        const data = this.props.dataArray;
        let address, other;
        address = other = '';
        data.forEach((item) => {
            if (item.type === 'address') {
                address = address + ' ' + item.value;
                item.value = address;
            }
            else if (item.type === 'other') {
                other = other + ' ' + item.value;
                item.value = other;
            }
            this.setState({
                [item.type]: item.value
            });
        });
    }
    render() {
        return (
            <div>
            <form className="dataForm" onSubmit={this.showDialog}>
                              <h2>Business Card Data</h2>
                <div className="inputDiv">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" defaultValue={this.state.company} onChange={this.handleInputChange} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" defaultValue={this.state.name} onChange={this.handleInputChange} required />
                </div>
                <div className="inputDiv">
                    <label htmlFor="position">Job Title</label>
                    <input type="text" id="position" defaultValue={this.state.position} onChange={this.handleInputChange} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="phone">Work Phone</label>
                    <input type="text" id="phone" defaultValue={this.state.phone} onChange={this.handleInputChange} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="extension">Extension</label>
                    <input type="text" id="extension" defaultValue={this.state.extension} onChange={this.handleInputChange} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" id="mobile" defaultValue={this.state.mobile} onChange={this.handleInputChange} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="fax">Fax</label>
                    <input type="text" id="fax" defaultValue={this.state.fax} onChange={this.handleInputChange} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="toll">Toll</label>
                    <input type="text" id="toll" defaultValue={this.state.toll} onChange={this.handleInputChange} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="website">Website</label>
                    <input type="text" id="website" defaultValue={this.state.website} onChange={this.handleInputChange} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" defaultValue={this.state.email} onChange={this.handleInputChange} />
                </div>
                <div className="textareaDiv">
                    <label htmlFor="address">Address</label>
                    <textarea type="text" id="address" defaultValue={this.state.address} onChange={this.handleInputChange} />
                </div>
                <div className="textareaDiv">
                    <label htmlFor="other">Other Details</label>
                    <textarea type="text" id="other" defaultValue={this.state.other} onChange={this.handleInputChange} />
                </div>
                <button type="submit">Export Contact</button>
            </form >
              {this.state.dialogOpen?
                <div class="dialog">
                            <form onSubmit={this.exportContact}>
                                <h1>Export Contact</h1>
                                <h2>Export as</h2>
                                <div>
                                <input type="radio" id="ios" name="file" value="ios" checked={this.state.selectedOption === "ios"}
                                    onChange={this.onValueChange}></input>
                                <label for="ios">VCard (for IOS/Google Contacts)</label>
                                </div>
                                <div>
                                <input type="radio" id="csv" name="file" value="csv" checked={this.state.selectedOption === "csv"}
                                    onChange={this.onValueChange}></input>
                                <label for="female">Outlook CSV</label>
                                </div>
                                <div>
                                <input type="radio" id="android" name="file" value="android" checked={this.state.selectedOption === "android"}
                                    onChange={this.onValueChange}></input>
                                <label for="android">VCard (for Andriod Contacts)</label>
                                </div>
                               <div class="buttonDiv">
                                <button type="submit">Export</button>
                                <button onClick={this.closeDialog} >Cancel</button>
                               </div>
                            </form>
                </div>
                : null}
            </div>
            
        )
    }
}
export default DataForm;