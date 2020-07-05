import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="main-footer">
            <div className="row">
                <div className="col">
                    <h4>Dawid Ciechowski</h4>
                    <ul className="list-unstyled">
                        <li>+44 7387197179</li>
                        <li>Leeds, United Kingdom</li>
                    </ul>
                </div>
                {/* Column2 */}
                <div className="contents">
                    <h4>Contents</h4>
                    <ul className="list-unstyled">
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            {/* Column3 */}
            <br />
            <div className="row">
                <p className="col-small">
                    &copy;{new Date().getFullYear()} Dawid Ciechowski | All rights reserved | Terms of Service | Privacy
                    </p>
            </div>
        </div>
    );
}

export default Footer;