import React, { useEffect, useState } from 'react';
import '../styles/header.css';
import logo from '../assets/images/logo-central.svg';
import Navbar from './Navbar.jsx';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase'; 

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user);
        });
        return () => unsubscribe(); 
    }, []);

    return (
        <header className="header">
            <div className="header-top">
                <Link to={isLoggedIn ? "/dashboard" : "/login"} className="login-button">
                    {isLoggedIn ? "Dashboard" : "Ingresar"}
                </Link>
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
