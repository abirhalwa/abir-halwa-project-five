import React from 'react';
// this function is used to load help informtion in the page
function Information (props) {
       return (
           <section className="information">
               <h1>How to Use Scan It</h1>
               <ol>
                   <li>You need first to upload an image of a business card from one of the follwoing formt 'png', 'jpeg' 'bmp', 'gif'</li>
                   <li>Then, you have to clcik on submit to start the analyzing process</li>
                   <li>After that, you will be able to see the image information classified into fields.</li>
                   <li>You can change the information if you wish to </li>
                   <li>you can save the contact information as a Contct Card </li>
               </ol>
               <div><button id="close" onClick = {e => props.hideInfo(e)}>close</button></div>
           </section>
       );
}
export default Information;