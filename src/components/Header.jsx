import React from 'react';
import '../styles/header.css';
import logo from '../assets/images/logo-central.svg';
import Navbar from './Navbar.jsx';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="title-container">
                    <div>
                        <img src={logo} alt="Logo" className="logo" />
                    </div>
                    <div>
                        <Navbar />
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;