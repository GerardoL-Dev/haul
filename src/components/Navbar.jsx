import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    return (

        <nav className="navbar">
            <div className='navbar-content'>
                <ul className="navbar-list">
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Sobre Nosotros</a></li>


                    <li className="submenu-item">
                        <a href="#courses">Cursos</a>
                        <ul className="submenu">
                            <li><a href="#capacitaciones">Capacitaciones</a></li>
                            <li><a href="#actualizacion">Actualización</a></li>
                            <li><a href="#diplomatura">Diplomatura</a></li>
                        </ul>
                    </li>


                    <li className="submenu-item">
                        <a href="#degree">Grado</a>
                        <ul className="submenu">
                            <li><a href="#licenciatura">Licenciatura</a></li>
                        </ul>
                    </li>


                    <li className="submenu-item">
                        <a href="#postgraduate">Postgrado</a>
                        <ul className="submenu">
                            <li><a href="#especializacion">Especialización</a></li>
                            <li><a href="#maestria">Maestría</a></li>
                            <li><a href="#doctorado">Doctorado</a></li>
                        </ul>
                    </li>

                    <li><a href="#news">Noticias</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>

            </div>
            <div className='search-container'>
                <input type="text" placeholder="Buscar..." className="search-input" />
                <button className="navbar-search-button">Ir</button>
            </div>
        </nav>
    );
};

export default Navbar;
