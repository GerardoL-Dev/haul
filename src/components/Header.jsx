import React from 'react';
import '../styles/header.css';
import logo from '../assets/images/logo-central.png';
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
                        <h1 className="title">Haul Mawr</h1>
                        <p className="subtitle">Instituto de Estudios superiores</p>
                    </div>
                </div>
            </div>
            <Navbar/>
        </header>
    );
};

export default Header;