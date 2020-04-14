import React from 'react';
// this function component is used to load the header in the page
function Header(props){
    return (
        <header className="wrapper">
            <a href='index.html'>
                <img src="./assets/logo.png" alt="scan it logo"/>
            </a>
            <i aria-hidden="true" className="fas fa-info-circle"  onClick={() => props.showInfo()}>
                <span className="srOnly">click to show help information</span>
            </i>
        </header>
    );
}
export default Header;