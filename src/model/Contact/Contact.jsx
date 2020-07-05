import React from 'react';
import './Contact.css';
import Facebook from './face2.png'

class Contact extends React.Component {

    
    render() {

        return(
            <div className="box">
                <h1>CONTACT INFORMATION</h1>
                <div className="contact-links">
                    <h3>PHONE NUMBER: +447387197179</h3>
                </div>
                <h3>E-MAIL: dawid.ciechowski@gmail.com</h3>
                <div className="tooltip">
                    <div className="contact-links" style={{backgroundColor:"white"}}>
                        <img src={Facebook} alt="linkedin"/>
                        <a href="https://www.linkedin.com/in/dawid-ciechowski-105538188/" target="_blank" rel="noopener noreferrer">
                            https://www.linkedin.com/in/dawid-ciechowski-105538188/
                        </a>
                        <span className="tooltiptext">Click to open in new tab</span>
                    </div>
                </div>
                <div className="tooltip">
                    <a href="https://github.com/DawidCiechowski" target="_blank" rel="noopener noreferrer">
                        GitHub: https://github.com/DawidCiechowski
                    </a>
                    <span className="tooltiptext">Click to open in new tab</span>
                </div>
            </div>
        );
    }
}

export default Contact;