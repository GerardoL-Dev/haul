import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = () => {
    // Estados para controlar los submenús
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const [isDegreeOpen, setIsDegreeOpen] = useState(false);
    const [isPostgraduateOpen, setIsPostgraduateOpen] = useState(false);

    // Funciones para alternar la visibilidad de los submenús
    const toggleCourses = () => setIsCoursesOpen(!isCoursesOpen);
    const toggleDegree = () => setIsDegreeOpen(!isDegreeOpen);
    const togglePostgraduate = () => setIsPostgraduateOpen(!isPostgraduateOpen);

    return (
        <nav className="navbar">
            <div className='navbar-content'>
                <ul className="navbar-list">
                    <li><Link to="/haul">Inicio</Link></li>
                    <li><Link to="/about">Sobre Nosotros</Link></li>

                    <li className="submenu-item">
                        <a href="#courses" onClick={(e) => { e.preventDefault(); toggleCourses(); }}>
                            Cursos
                        </a>
                        {isCoursesOpen && (
                            <ul className="submenu">
                                <li><Link to="/trainings">Capacitaciones</Link></li>
                                <li><Link to="/updates">Actualización</Link></li>
                                <li><Link to="/diploma-programs">Diplomatura</Link></li>
                            </ul>
                        )}
                    </li>

                    <li className="submenu-item">
                        <a href="#degree" onClick={(e) => { e.preventDefault(); toggleDegree(); }}>
                            Grado
                        </a>
                        {isDegreeOpen && (
                            <ul className="submenu">
                                <li><Link to="/lic">Licenciatura</Link></li>
                            </ul>
                        )}
                    </li>

                    <li className="submenu-item">
                        <a href="#postgraduate" onClick={(e) => { e.preventDefault(); togglePostgraduate(); }}>
                            Postgrado
                        </a>
                        {isPostgraduateOpen && (
                            <ul className="submenu">
                                <li><Link to="/special">Especialización</Link></li>
                                <li><Link to="/masters">Maestría</Link></li>
                                <li><Link to="/doctorate">Doctorado</Link></li>
                            </ul>
                        )}
                    </li>

                    <li><Link to="/news">Noticias</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
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
