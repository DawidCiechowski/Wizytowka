import React from 'react';
import './Footer.css';

// function Footer() {
//     return (
//         <div className="main-footer">
//             <div className="row">
//                 <div className="col">
//                     <h4>Dawid Ciechowski</h4>
//                     <ul className="list-unstyled">
//                         <li>+44 7387197179</li>
//                         <li>Leeds, United Kingdom</li>
//                     </ul>
//                 </div>
//                 {/* Column2 */}
//                 <div className="contents">
//                     <h4>Contents</h4>
//                     <ul className="list-unstyled">
//                         <li>Home</li>
//                         <li>Projects</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>
//             </div>
//             {/* Column3 */}
//             <br />
//             <div className="row">
//                 <p className="col-small">
//                     &copy;{new Date().getFullYear()} Dawid Ciechowski | All rights reserved | Terms of Service | Privacy
//                     </p>
//             </div>
//         </div>
//     );
// }

var style = {
    backgroundColor: "#060c29",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "130px",
    width: "100%",
    color: "white"
}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '5rem',
    width: '100%',
}

function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
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
        </div>
    )
}


export default Footer;