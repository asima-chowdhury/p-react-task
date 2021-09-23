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
                        <a className="nav-links" onClick={closeMobileMenu} href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-links" onClick={closeMobileMenu} href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-links" onClick={closeMobileMenu} href="#">Service & Package</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-links" onClick={closeMobileMenu} href="#">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-links" onClick={closeMobileMenu} href="#">Faq</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-links" onClick={closeMobileMenu} href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;