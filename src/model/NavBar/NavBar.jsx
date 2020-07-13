import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {


    const [open, setOpen] = useState(false);
    
    const DropdownMenu = () => {
        return (
            <div className="dropdown">
                <Link onClick={() => setOpen(!open)} className="link-style" to='/'>
                    <li>About</li>
                </Link>
    
                <Link onClick={() => setOpen(!open)} className="link-style" to='/projects'>
                    <li>Projects</li>
                </Link>
    
                <Link onClick={() => setOpen(!open)} className="link-style" to='/contact'>
                    <li>Contact</li>
                </Link>
            </div>
        )
    }

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
            <div className="hamburger" onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {open && <DropdownMenu />}
        </nav>
    )
}








export default NavBar;