import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-left">
                    <h3>Instituto Haul Mawr</h3>
                    <p>Educación superior 100% online.</p>
                    <div className="footer-contact">
                        <p><strong>Dirección:</strong> Calle Falsa 123, Ciudad Ejemplo</p>
                        <p><strong>Teléfono:</strong> +1 234 567 890</p>
                        <p><strong>Email:</strong> info@haulmawr.com</p>
                    </div>
                </div>

                <div className="footer-center">
                    <h4>Suscribite al Newsletter</h4>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Tu correo electrónico" required />
                        <button type="submit">Suscribirme</button>
                    </form>

                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="social-icon" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="social-icon" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" className="social-icon" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="social-icon" />
                        </a>
                    </div>
                </div>

                <div className="footer-right">
                    <nav className="footer-nav">
                        <ul>
                            <li><a href="/" title="Página Principal">Inicio</a></li>
                            <li><a href="/programas" title="Programas Académicos">Programas</a></li>
                            <li><a href="/contacto" title="Contacto">Contacto</a></li>
                            <li><a href="/politica-privacidad" title="Política de Privacidad">Privacidad</a></li>
                            <li><a href="/mapa-sitio" title="Mapa del Sitio">Mapa del Sitio</a></li>
                        </ul>
                    </nav>
                    <p className="credits">
                        Desarrollado por <a href="https://gerardol-dev.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Gerardo Leivas</a>
                    </p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Instituto Haul Mawr. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
