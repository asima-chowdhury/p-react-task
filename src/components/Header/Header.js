import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a className="nav-links" onClick={closeMobileMenu} href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-links" onClick={closeMobileMenu} href="#home">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-links" onClick={closeMobileMenu} href="#home">Service & Package</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-links" onClick={closeMobileMenu} href="#home">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-links" onClick={closeMobileMenu} href="#home">Faq</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-links" onClick={closeMobileMenu} href="#home">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;