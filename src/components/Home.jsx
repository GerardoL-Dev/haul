import React from 'react';
import '../styles/home.css'; // Estilos globales
import RegisterSection from './RegisterSection'; // Inscripciones
import FeaturesSection from './FeaturesSection'; // Características
import ProgramsSection from './ProgramsSection'; // Programas Académicos
import Testimonio from './Testimonio'; // Testimonios

const Home = () => {
    return (
        <main className="home-container">
            <div className="white-space"></div>
            {/* Inscripciones */}
            <RegisterSection />

            {/* Franja Blanca */}
            <div className="white-space"></div>

            {/* Características */}
            <FeaturesSection />

            {/* Franja Blanca */}
            <div className="white-space"></div>

            {/* Programas Académicos */}
            <ProgramsSection />

            {/* Franja Blanca */}
            <div className="white-space"></div>

            {/* Testimonio */}
            <Testimonio />
            <div className="white-space"></div>
        </main>
    );
};

export default Home;