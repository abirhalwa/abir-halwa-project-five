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
        };
    }

    // this function is used to save the information from the form to a V Card file
    // TEL; type = WORK: ${ this.state.toll }
    // NOTE: ${ this.state.other }
    saveCard = (event) => {
        event.preventDefault();
        const file = new Blob(
            [`BEGIN:VCARD
VERSION:3.0
FN:${this.state.name}
item1.EMAIL;TYPE=INTERNET:${this.state.email}
item1.X-ABLabel:
TEL;TYPE=CELL:${this.state.mobile}
TEL;TYPE=WORK:${this.state.phone}
item2.TEL:${this.state.fax}
item2.X-ABLabel:workFax
item3.ADR:;;${this.state.address}
item3.X-ABLabel:
item4.ORG:${this.state.company};
item4.X-ABLabel:
item5.TITLE:${this.state.position}
item5.X-ABLabel:
item6.URL:${this.state.website}
item6.X-ABLabel:
CATEGORIES:myContacts
END:VCARD
            `], { type: "text/vcard;charset=utf-8" });
        FileSaver.saveAs(
            file,
            `${this.state.name}.vcf`,
            true
        );
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
            <form className="dataForm" onSubmit={this.saveCard}>
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
                <button type="submit">Save as a conatct card</button>
            </form >
        )
    }
}
export default DataForm;