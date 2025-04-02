import React from 'react';
import '../styles/header.css';
import logo from '../assets/images/logo-central.svg';
import Navbar from './Navbar.jsx';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <Link to="/login" className="login-button">Ingresar</Link>
            </div>
            <div className="header-bottom">
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