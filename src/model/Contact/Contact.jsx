import React from 'react';
import './Contact.css';
import FacebookLogo from './facebook.svg';
import Mobile from './mobile.svg';
import LinkedIn from './linkedin.svg';
import GitHubLogo from './github.svg';
import EmailLogo from './email.svg';

class Contact extends React.Component {


    render() {

        return (
            <div className="box">
                <h1>CONTACT INFORMATION</h1>
                <div className="contact-fields">
                    <img src={Mobile} alt="Mobile Logo" />
                    <h3 className="phone">+447387197179</h3>
                </div>
                <div className="contact-fields">
                    <img src={EmailLogo} alt="Email Logo"/>
                    <h3 className="email">dawid.ciechowski@gmail.com</h3>
                </div>
                <div className="tooltip">
                    <div className="contact-links">
                        <img src={LinkedIn} alt="LinkedIn Logo" />
                        <a href="https://www.linkedin.com/in/dawid-ciechowski-105538188/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        <span className="tooltiptext">Click to open in new tab</span>
                    </div>
                </div>
                <div className="tooltip">
                    <div className="contact-links">
                        <img src={GitHubLogo} alt="Github Logo" />
                        <a href="https://github.com/DawidCiechowski" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <span className="tooltiptext">Click to open in new tab</span>
                    </div>
                </div>
                <div className="tooltip">
                    <div className="contact-links">
                        <img src={FacebookLogo} alt="Facebook Logo" />
                        <a href="https://www.facebook.com/david.ciechowski" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                        <span className="tooltiptext">Click to open in new tab</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;