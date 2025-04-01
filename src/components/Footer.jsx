import React from 'react';
import '../styles/footer.css'; // Asegúrate de tener la ruta correcta al archivo CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p><strong>Desarrollado por</strong></p>
                    <p><a href="https://gerardol-dev.github.io/portfolio/" title="Portafolio de Gerardo Leivas - Desarrollador Web" target="_blank" rel="noopener noreferrer">Gerardo Leivas - Desarrollador Web</a></p>
                </div>
                <div className="footer-center">
                    <nav className="footer-nav">
                        <ul>
                            <li><a href="/" title="Página Principal de Instituto Haul Mawr">Inicio</a></li>
                            <li><a href="/programas" title="Programas Académicos de Instituto Haul Mawr">Programas</a></li>
                            <li><a href="/contacto" title="Contacto Instituto Haul Mawr">Contacto</a></li>
                            <li><a href="/politica-privacidad" title="Política de Privacidad de Instituto Haul Mawr">Privacidad</a></li>
                            <li><a href="/mapa-sitio" title="Mapa del Sitio Instituto Haul Mawr">Mapa del Sitio</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-right">
                    <p><strong>Instituto Haul Mawr</strong></p>
                    <p>&copy; 2025 - Todos los Derechos Reservados</p>
                    <div className="footer-contact">
                        <p><strong>Dirección:</strong> Calle Falsa 123, Ciudad Ejemplo</p>
                        <p><strong>Teléfono:</strong> +1 234 567 890</p>
                        <p><strong>Email:</strong> info@haulmawr.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
