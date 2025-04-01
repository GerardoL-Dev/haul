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
                    <li><Link to="/">Inicio</Link></li>
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
            <div className='social-media-container'>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="social-icon" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="social-icon">
                        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                    </svg>
                </a>
            </div>
            <div className='search-container'>
                <input type="text" placeholder="Buscar..." className="search-input" />
                <button className="navbar-search-button">Ir</button>
            </div>
        </nav>
    );
};

export default Navbar;
