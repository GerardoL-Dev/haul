import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      {/* Menú principal */}
      <div className="navbar-content">
        <ul className="navbar-list">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/careers">Carreras</Link></li>
          <li><Link to="/news">Noticias</Link></li>
          <li><Link to="/about">Sobre Nosotros</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </div>

      {/* Sección de acceso/login */}
      <div className="login-access">
        {user ? (
          <>
            {/* Mostrar correo del usuario, enlace al Dashboard y botón de logout */}
            <span className="user-email">{user.email}</span>
            <Link to="/dashboard" className="dashboard-link">
              Dashboard
            </Link>
            <button className="logout-button" onClick={onLogout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          // Si no hay usuario autenticado, mostrar botón de inicio de sesión
          <Link to="/login" className="login-link">
            Acceso
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;