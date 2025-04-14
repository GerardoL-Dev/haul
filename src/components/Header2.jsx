import React, { useEffect, useState } from "react";
import "../styles/header2.css";
import InfoGeneral from "./Dates&Weather/InfoGeneral";
import Navbar from "./Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase"; // Importa auth desde firebase.js

const Header2 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Escucha cambios en el estado de autenticación
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user); // Actualiza el estado según el usuario
        });

        // Limpia el listener cuando el componente se desmonta
        return () => unsubscribe();
    }, []);

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-top">
                    <div className="info-general">
                        <InfoGeneral />
                    </div>
                </div>
                <div className="header-middle">
                    <div className="header-title">
                        <h1>Bienvenidos</h1>
                    </div>
                    <div className="header-logo">
                        <img src="https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553598/logo-shield-upd_pnvzl5.svg" alt="logo-haul-mawr" />
                    </div>
                    <div className="header-subtitle">
                        <h3>Instituto de Estudios Superiores</h3>
                        <p>Donde la excelencia académica se encuentra con la innovación</p>
                    </div>
                </div>
            </div>

            <Navbar />
        </header>
    );
};

export default Header2;