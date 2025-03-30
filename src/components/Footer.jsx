import React from 'react';
import '../styles/footer.css'; // Asegúrate de tener la ruta correcta al archivo CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p>&copy; 2025 Haul Mawr. Todos los derechos reservados.</p>
                </div>
                <div className="footer-right">
                    <ul className="footer-social">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
