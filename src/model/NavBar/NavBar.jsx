import React, {useState} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

function NavBar() {
    
    
    return (
        <nav>
            <div className="logo">
                <Link className="logo-link" to="/">Dawid Ciechowski</Link>
            </div>
            <ul className="nav-links">
                <Link className="link-style" to='/'>
                    <li>About</li>
                </Link>

                <Link className="link-style" to='/projects'>
                    <li>Projects</li>
                </Link>

                <Link className="link-style" to='/contact'>
                    <li>Contact</li>
                </Link>
            </ul>
            <div className="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default NavBar;