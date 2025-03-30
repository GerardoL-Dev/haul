import React from 'react';
import '../styles/home.css';
import Cards from './Cards'; // Asegúrate de la ruta correcta

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero">
                <div className="hero-content">
                    <h1>Bienvenidos a Haul Mawr</h1>
                    <p>Instituto de Estudios Superiores</p>
                    <button className="cta-button">Explorar Programas</button>
                </div>
            </section>

            <section className="programs">
                <h2>Programas Académicos</h2>
                <div className="programs-list">
                    <div className="program-card">
                        <h3>Licenciatura</h3>
                        <p>Programas de licenciatura en diversas áreas de estudio.</p>
                        <button className="program-button">Ver más</button>
                    </div>
                    <div className="program-card">
                        <h3>Diplomaturas</h3>
                        <p>Diplomaturas especializadas para mejorar tus habilidades profesionales.</p>
                        <button className="program-button">Ver más</button>
                    </div>
                    <div className="program-card">
                        <h3>Maestrías</h3>
                        <p>Maestrías orientadas a la investigación y desarrollo profesional.</p>
                        <button className="program-button">Ver más</button>
                    </div>
                </div>
            </section>

            <section className="features">
                <h2>¿Por qué elegir Haul Mawr?</h2>
                <div className="feature-cards">
                    <div className="feature-card">
                        <h3>Educación de Calidad</h3>
                        <p>Docentes altamente capacitados y programas educativos de vanguardia.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Acceso a Recursos</h3>
                        <p>Plataforma de e-learning y biblioteca digital accesible para todos los estudiantes.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Comunidad</h3>
                        <p>Conoce a otros estudiantes y profesores, ¡es parte de nuestra red educativa!</p>
                    </div>
                </div>
            </section>

            {/* Sección para las cartas que se mueven automáticamente */}
            <section className="cards-section">
                <h2>Testimonios</h2>
                <Cards /> {/* Aquí se inserta el componente Cards con las cartas deslizándose automáticamente */}
            </section>
        </div>
    );
};

export default Home;
