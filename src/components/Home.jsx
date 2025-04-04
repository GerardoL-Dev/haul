import React from 'react';
import '../styles/home.css';
import Cards from './Cards';

const Home = () => {
    return (
        <main className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <header>
                        <h1 className="hero-title">Bienvenidos a Haul Mawr</h1>
                        <p className="hero-subtitle">Instituto de Estudios Superiores - Donde la excelencia académica se encuentra con la innovación.</p>
                    </header>
                    <a href="/programas" className="cta-button" aria-label="Explorar Programas">Explorar Programas</a>
                </div>
            </section>

            {/* Programas Académicos */}
            <section className="programs">
                <header>
                    <h2 className="section-title">Programas Académicos</h2>
                </header>
                <div className="programs-list">
                    <article className="program-card">
                        <h3 className="program-title">Licenciatura</h3>
                        <p className="program-description">Programas de licenciatura en diversas áreas de estudio, con un enfoque práctico y profesional.</p>
                        <a href="/licenciaturas" className="program-button" aria-label="Ver más sobre Licenciaturas">Ver más</a>
                    </article>
                    <article className="program-card">
                        <h3 className="program-title">Diplomaturas</h3>
                        <p className="program-description">Diplomaturas especializadas para mejorar tus habilidades profesionales y abrir nuevas oportunidades.</p>
                        <a href="/diplomaturas" className="program-button" aria-label="Ver más sobre Diplomaturas">Ver más</a>
                    </article>
                    <article className="program-card">
                        <h3 className="program-title">Maestrías</h3>
                        <p className="program-description">Maestrías orientadas a la investigación avanzada y el desarrollo profesional continuo.</p>
                        <a href="/maestrias" className="program-button" aria-label="Ver más sobre Maestrías">Ver más</a>
                    </article>
                </div>
            </section>

            {/* Características */}
            <section className="features">
                <header>
                    <h2 className="section-title">¿Por qué elegir Haul Mawr?</h2>
                </header>
                <div className="feature-cards">
                    <article className="feature-card">
                        <h3 className="feature-title">Educación de Calidad</h3>
                        <p className="feature-description">Nuestros docentes son líderes en sus campos, y los programas están diseñados para estar a la vanguardia.</p>
                    </article>
                    <article className="feature-card">
                        <h3 className="feature-title">Acceso a Recursos</h3>
                        <p className="feature-description">Contamos con una plataforma digital avanzada, accesible desde cualquier lugar, para que aprendas a tu ritmo.</p>
                    </article>
                    <article className="feature-card">
                        <h3 className="feature-title">Comunidad Global</h3>
                        <p className="feature-description">Conoce estudiantes y profesores de todo el mundo, y forma parte de nuestra red educativa global.</p>
                    </article>
                </div>
            </section>

            {/* Testimonios */}
            <section className="cards-section">
                <header>
                    <h2 className="section-title">Testimonios</h2>
                </header>
                <Cards />
            </section>
        </main>
    );
};

export default Home;
