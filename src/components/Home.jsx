import React from 'react';
import '../styles/home.css';
import Cards from './Cards'; // Asegúrate de la ruta correcta

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Bienvenidos a Haul Mawr</h1>
                    <p className="hero-subtitle">Instituto de Estudios Superiores - Donde la excelencia académica se encuentra con la innovación.</p>
                    <button className="cta-button">Explorar Programas</button>
                </div>
            </section>
            {/* Programas Académicos */}
            <section className="programs">
                <h2 className="section-title">Programas Académicos</h2>
                <div className="programs-list">
                    <div className="program-card">
                        <h3 className="program-title">Licenciatura</h3>
                        <p className="program-description">Programas de licenciatura en diversas áreas de estudio, con un enfoque práctico y profesional.</p>
                        <button className="program-button">Ver más</button>
                    </div>
                    <div className="program-card">
                        <h3 className="program-title">Diplomaturas</h3>
                        <p className="program-description">Diplomaturas especializadas para mejorar tus habilidades profesionales y abrir nuevas oportunidades.</p>
                        <button className="program-button">Ver más</button>
                    </div>
                    <div className="program-card">
                        <h3 className="program-title">Maestrías</h3>
                        <p className="program-description">Maestrías orientadas a la investigación avanzada y el desarrollo profesional continuo.</p>
                        <button className="program-button">Ver más</button>
                    </div>
                </div>
            </section>

            {/* Características */}
            <section className="features">
                <h2 className="section-title">¿Por qué elegir Haul Mawr?</h2>
                <div className="feature-cards">
                    <div className="feature-card">
                        <h3 className="feature-title">Educación de Calidad</h3>
                        <p className="feature-description">Nuestros docentes son líderes en sus campos, y los programas están diseñados para estar a la vanguardia.</p>
                    </div>
                    <div className="feature-card">
                        <h3 className="feature-title">Acceso a Recursos</h3>
                        <p className="feature-description">Contamos con una plataforma digital avanzada, accesible desde cualquier lugar, para que aprendas a tu ritmo.</p>
                    </div>
                    <div className="feature-card">
                        <h3 className="feature-title">Comunidad Global</h3>
                        <p className="feature-description">Conoce estudiantes y profesores de todo el mundo, y forma parte de nuestra red educativa global.</p>
                    </div>
                </div>
            </section>

            {/* Testimonios */}
            <section className="cards-section">
                <h2 className="section-title">Testimonios</h2>
                <Cards />
            </section>
        </div>
    );
};

export default Home;
