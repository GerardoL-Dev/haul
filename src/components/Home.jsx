import React, { useEffect } from 'react';
import '../styles/home.css';
import Cards from './Cards';

const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <main className="home-container">
            {/* Programas Académicos */}
            <section className="programs">
                <header>
                    <h2 className="section-title">Programas Académicos</h2>
                </header>
                <div className="programs-list">
                    <article className="program-card">
                        <h3 className="program-title">Licenciatura</h3>
                        <p className="program-description">
                            Programas de licenciatura en diversas áreas de estudio, con un enfoque práctico y profesional.
                        </p>
                        
                    </article>
                    <article className="program-card">
                        <h3 className="program-title">Diplomaturas</h3>
                        <p className="program-description">
                            Diplomaturas especializadas para mejorar tus habilidades profesionales y abrir nuevas oportunidades.
                        </p>
                    </article>
                    <article className="program-card">
                        <h3 className="program-title">Maestrías</h3>
                        <p className="program-description">
                            Maestrías orientadas a la investigación avanzada y el desarrollo profesional continuo.
                        </p>                        
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
                        <p className="feature-description">
                            Nuestros docentes son líderes en sus campos, y los programas están diseñados para estar a la vanguardia.
                        </p>
                    </article>
                    <article className="feature-card">
                        <h3 className="feature-title">Acceso a Recursos</h3>
                        <p className="feature-description">
                            Contamos con una plataforma digital avanzada, accesible desde cualquier lugar, para que aprendas a tu ritmo.
                        </p>
                    </article>
                    <article className="feature-card">
                        <h3 className="feature-title">Comunidad Global</h3>
                        <p className="feature-description">
                            Conoce estudiantes y profesores de todo el mundo, y forma parte de nuestra red educativa global.
                        </p>
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
