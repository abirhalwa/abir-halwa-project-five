(this["webpackJsonpabir-halwa-project-five"]=this["webpackJsonpabir-halwa-project-five"]||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},25:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(17),s=a.n(i),r=(a(25),a(2)),o=a(3),c=a(5),m=a(4),u=a(6),h=a(18),d=a.n(h),p=a(7),f=a(19),E=a.n(f),b=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).saveCard=function(t){t.preventDefault();var a=new Blob(["BEGIN:VCARD\nVERSION:3.0\nFN:".concat(e.state.name,"\nitem1.EMAIL;TYPE=INTERNET:").concat(e.state.email,"\nitem1.X-ABLabel:\nTEL;TYPE=CELL:").concat(e.state.mobile,"\nTEL;TYPE=WORK:").concat(e.state.phone,"\nitem2.TEL:").concat(e.state.fax,"\nitem2.X-ABLabel:workFax\nitem3.TEL:").concat(e.state.toll,"\nitem3.X-ABLabel:Toll Free\nitem4.ADR:;;").concat(e.state.address,"\nitem4.X-ABLabel:\nitem5.ORG:").concat(e.state.company,";\nitem5.X-ABLabel:\nitem6.TITLE:").concat(e.state.position,"\nitem6.X-ABLabel:\nitem7.URL:").concat(e.state.website,"\nitem7.X-ABLabel:\nNOTE: ").concat(e.state.other,"\nCATEGORIES:myContacts\nEND:VCARD\n            ")],{type:"text/vcard;charset=utf-8"});E.a.saveAs(a,"".concat(e.state.name,".vcf"),!0)},e.handleInputChange=function(t){var a=t.target.id,n=t.target.value;e.setState((function(){return Object(p.a)({},a,n)}))},e.state={company:"",name:"",website:"",email:"",position:"",phone:"",extension:"",mobile:"",fax:"",toll:"",address:"",other:"",dialogOpen:!1},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e,t,a=this,n=this.props.dataArray;e=t="",n.forEach((function(n){"address"===n.type?(e=e+" "+n.value,n.value=e):"other"===n.type&&(t=t+" "+n.value,n.value=t),a.setState(Object(p.a)({},n.type,n.value))}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"dataForm",onSubmit:this.saveCard},l.a.createElement("h2",null,"Business Card Data"),l.a.createElement("div",{className:"inputDiv"},l.a.createElement("label",{htmlFor:"company"},"Company Name"),l.a.createElement("input",{type:"text",id:"company",defaultValue:this.state.company,onChange:this.handleInputChange})),l.a.createElement("div",{className:"inputDiv"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",id:"name",defaultValue:this.state.name,onChange:this.handleInputChange,required:!0})),l.a.createElement("div",{className:"inputDiv"},l.a.createElement("label",{htmlFor:"position"},"Job Title"),l.a.createElement("input",{type:"text",id:"position",defaultValue:this.state.position,onChange:this.handleInputChange})),l.a.createElement("div",{className:"inputDiv"},l.a.createElement("label",{htmlFor:"phone"},"Work Phone"),l.a.createElement("input",{type:"text",id:"phone",defaultValue:this.state.phone,onChange:this.handleInputChange})),l.a.createElement("div",{className:"inputDiv"},l.a.createElement("label",{htmlFor:"extension"},"Extension"),l.a.createElement("input",{type:"text",id:"extension",defaultValue:this.state.extension,onChange:this.handleInputChange})),l.a.createElement("div",{className:"inputDiv"},l.a.createElement("label",{htmlFor:"mobile"},"Mobile"),l.a.createElement("input",{type:"text",id:"mobile",defaultValue:this.state.mobile,onChange:this.handleInputChange})),l.a.createElement("div",{className:"inputDiv"},l.a.createElement("label",{htmlFor:"fax"},"Fax"),l.a.createElement("input",{type:"text",id:"fax",defaultValue:this.state.fax,onChange:this.handleInputChange})),l.a.createElement("div",{className:"inputDiv"},l.a.createElement("label",{htmlFor:"toll"},"Toll"),l.a.createElement("input",{type:"text",id:"toll",defaultValue:this.state.toll,onChange:this.handleInputChange})),l.a.createElement("div",{className:"inputDiv"},l.a.createElement("label",{htmlFor:"website"},"Website"),l.a.createElement("input",{type:"text",id:"website",defaultValue:this.state.website,onChange:this.handleInputChange})),l.a.createElement("div",{className:"inputDiv"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",defaultValue:this.state.email,onChange:this.handleInputChange})),l.a.createElement("div",{className:"textareaDiv"},l.a.createElement("label",{htmlFor:"address"},"Address"),l.a.createElement("textarea",{type:"text",id:"address",defaultValue:this.state.address,onChange:this.handleInputChange})),l.a.createElement("div",{className:"textareaDiv"},l.a.createElement("label",{htmlFor:"other"},"Other Details"),l.a.createElement("textarea",{type:"text",id:"other",defaultValue:this.state.other,onChange:this.handleInputChange})),l.a.createElement("button",{type:"submit"},"Save as a conatct card")),this.state.dialogOpen?l.a.createElement("div",{class:"dialog"},l.a.createElement("form",null,l.a.createElement("h1",null,"Export as"),l.a.createElement("input",{type:"radio",id:"male",name:"gender",value:"male"}),l.a.createElement("label",{for:"male"},"Male"),l.a.createElement("input",{type:"radio",id:"female",name:"gender",value:"female"}),l.a.createElement("label",{for:"female"},"Female"),l.a.createElement("input",{type:"radio",id:"other",name:"gender",value:"other"}),l.a.createElement("label",{for:"other"},"Other"),l.a.createElement("button",{type:"submit"},"Export"),l.a.createElement("button",null,"Cancel"))):null)}}]),t}(n.Component);var v=function(e){return l.a.createElement("header",{className:"wrapper"},l.a.createElement("a",{href:"index.html"},l.a.createElement("img",{src:"./assets/logo.png",alt:"scan it logo"})),l.a.createElement("i",{"aria-hidden":"true",className:"fas fa-info-circle",onClick:function(){return e.showInfo()}},l.a.createElement("span",{className:"srOnly"},"click to show help information")))};var g=function(){return l.a.createElement("footer",{className:"wrapper"},l.a.createElement("p",null,"Copyright ",l.a.createElement("span",{"aria-hidden":"true"},"\xa9")," 2020 scanit.com "))};var y=function(e){return l.a.createElement("section",{className:"information"},l.a.createElement("h1",null,"How to Use Scan It"),l.a.createElement("ol",null,l.a.createElement("li",null,"You need first to upload an image of a business card from one of the follwoing formt 'png', 'jpeg' 'bmp', 'gif'"),l.a.createElement("li",null,"Then, you have to clcik on submit to start the analyzing process"),l.a.createElement("li",null,"After that, you will be able to see the image information classified into fields."),l.a.createElement("li",null,"You can change the information if you wish to "),l.a.createElement("li",null,"you can save the contact information as a Contct Card ")),l.a.createElement("div",null,l.a.createElement("button",{id:"close",onClick:function(t){return e.hideInfo(t)}},"close")))},C=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).handleImageChange=function(t){var a=t.target.files[0].type;["image/jpeg","image/png","image/gif","image/bmp"].indexOf(a)>=0?(e.setState({classifiedData:[],imgFile:t.target.files[0],imgSrc:URL.createObjectURL(t.target.files[0])}),URL.revokeObjectURL(t.target.files[0])):alert("Wrong file format!! Please choose an image file!")},e.analyzeData=function(){var t,a,n,l,i,s=e.state.data,r=[];s.forEach((function(e){e.lines.forEach((function(e){var t=e.words.map((function(e){return e.text})).join(" ");r.push(t)}))})),t=a=n=i=!1;var o,c,m,u,h=/^[a-z|.|-]{2,}\s+[a-z|.|-]+(\s[a-z|.|-|,]+)?/i,d=/^[a-z|.|-]+(\s[a-z|.|-]+)*$/i,p=/^([a-z]+\s*[.|-|\\|/|&]*\s*)*$/i,f=/[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,E=/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,b=/^((mobile|mob|cell|hand|c|m|d|direct)\b[.|:|,]?\s*)?(\(?[+]?[0-9]{1,4}\)?\s*-?)?(\(?[0-9]{1,2}\)?\s*)?([\\|/|(|.|-]?\s*[0-9]{3,}\s*[\\|/|)|.|-]?\s*){2,}/i,v=/^((phone|tel|telephone|work|t|w|p|ph|office)\b[.|:|,]?\s*)?(\(?[+]?[0-9]{1,4}\)?\s*-?)?(\(?[0-9]{1,2}\)?\s*)?([\\|/|(|.|-]?\s*[0-9]{3,}\s*[\\|/|)|.|-]?\s*){2,}/i,g=/(\(|\+|[0-9])+/,y=/(x|ext|extension|e)+\s*[.|:|-]?\s*[0-9]{1,4}?$/i,C=/^((fax|f)\b[.|:|,]?\s*)?(\(?[+]?[0-9]{1,4}\)?\s*-?)?(\(?[0-9]{1,2}\)?\s*)?([\\|/|(|.|-]?\s*[0-9]{3,}\s*[\\|/|)|.|-]?\s*){2,}/i,x=/^((toll|toll-free|toll free|toll|toli, free)\b[.|:|,]?\s*)?(\(?[+]?[0-9]{1,4}\)?\s*-?)?(\(?[0-9]{1,2}\)?\s*)?([\\|/|(|.|-]?\s*[0-9]{3,}\s*[\\|/|)|.|-]?\s*){2,}/i,w=/\d+\s+[A-z]+[.]?[-|,]?\s*([A-z]*[0-9]*[.]?[-|,|#]?\s*)*/i,I=/(po box|p.o.box|po. box|po.box)+\s+\d+\s*([A-z]*[0-9]*[.]?[-|,|#]?\s*)*/i,D=r.map((function(e){return c={},o=[],!d.test(e)||t||i?!h.test(e)||a||i?p.test(e)&&a&&!n&&!i?(o=e.match(p),c.type="position",c.value=o[0],n=!0):f.test(e)?(o=e.match(f),c.type="email",c.value=o[0]):E.test(e)?(o=e.match(E),c.type="website",c.value=o[0]):v.test(e)&&!l?(o=e.match(v),m=o[0].search(g),u=o[0].substr(m,o[0].length),c.type="phone",l=!0,y.test(e)?(c.value=[],c.value.push(u),o=e.match(y),m=o[0].search(g),u=o[0].substr(m,o[0].length),c.value.push(u)):c.value=u):b.test(e)?(o=e.match(b),m=o[0].search(g),u=o[0].substr(m,o[0].length),c.type="mobile",c.value=u):C.test(e)?(o=e.match(C),m=o[0].search(g),u=o[0].substr(m,o[0].length),c.type="fax",c.value=u):x.test(e)?(o=e.match(x),m=o[0].search(g),u=o[0].substr(m,o[0].length),c.type="fax",c.value=u):i?i&&(o.push(e),c.type="address",c.value=e):(w.test(e)?o=e.match(w):I.test(e)&&(o=e.match(I)),0!==o.length&&(i=!0,c.type="address",c.value=o[0])):(o=e.match(h),c.type="name",c.value=o[0],a=!0):(o=e.match(d),c.type="company",c.value=o[0],t=!0),0===o.length&&(c.type="other",c.value=e),c}));e.setState({classifiedData:D})},e.handleSubmit=function(t){t.preventDefault();var a=new FormData;a.append("file",e.state.imgFile);var n={method:"POST",url:"https://abirvision.cognitiveservices.azure.com/vision/v3.0/ocr",headers:{"Ocp-Apim-Subscription-Key":"fb000dd4edb34ee69cb43359984ee319","content-type":"multipart/form-data; boundary=".concat(a._boundary)},data:a};d()(n).then((function(t){e.setState({data:t.data.regions}),e.analyzeData()})).catch((function(){alert("Your order can't be processeded right now please try again later")}))},e.resetData=function(t){t.preventDefault(),e.setState((function(){return{data:[],imgFile:null,imgSrc:null,classifiedData:[],showInfo:!1}}))},e.showInfo=function(){e.setState({showInfo:!0})},e.hideInfo=function(t){t.preventDefault(),e.setState({showInfo:!1})},e.state={data:[],imgFile:null,imgSrc:null,classifiedData:[],showInfo:!1},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,{showInfo:this.showInfo}),l.a.createElement("main",{className:"wrapper"},this.state.showInfo?l.a.createElement(y,{hideInfo:this.hideInfo}):l.a.createElement("section",null,l.a.createElement("h1",null,"Turn your business cards into Contact Cards"),l.a.createElement("form",{className:"imgUploadForm",action:"",onSubmit:this.handleSubmit},l.a.createElement("h2",null,"Select a business card to upload"),null===this.state.imgSrc?l.a.createElement("div",{className:"fileUploadtDiv"},l.a.createElement("label",{htmlFor:"imageFileInput",className:"visuallyHidden"},"Upload business card"),l.a.createElement("input",{type:"file",id:"imageFileInput",onChange:this.handleImageChange,required:!0,accept:"image/*"}),l.a.createElement("i",{className:"fas fa-cloud-upload-alt","aria-hidden":"true"},l.a.createElement("span",{className:"srOnly"},"browse to to select an image"))):l.a.createElement("div",null,l.a.createElement("img",{src:this.state.imgSrc,alt:"business card"}),0===this.state.classifiedData.length?l.a.createElement("button",{type:"submit"},"submit"):null,l.a.createElement("button",{onClick:this.resetData},"Select another card"))),this.state.classifiedData.length>0?l.a.createElement(b,{dataArray:this.state.classifiedData}):null)),l.a.createElement(g,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.f67186d9.chunk.js.map