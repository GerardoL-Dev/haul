import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/programs-section.css';

const ProgramsSection = () => {
    const programs = [
        { title: "Licenciatura", description: "Programas de licenciatura en diversas áreas de estudio, con un enfoque práctico y profesional." },
        { title: "Diplomaturas", description: "Diplomaturas especializadas para mejorar tus habilidades profesionales y abrir nuevas oportunidades." },
        { title: "Maestrías", description: "Maestrías orientadas a la investigación avanzada y el desarrollo profesional continuo." },
        { title: "Doctorados", description: "Programas de doctorado enfocados en investigaciones de vanguardia en múltiples disciplinas." },
        { title: "Cursos Cortos", description: "Cursos intensivos diseñados para adquirir habilidades específicas en poco tiempo." },
        { title: "Certificaciones", description: "Certificaciones reconocidas internacionalmente para validar tus competencias." },
        { title: "Bootcamps", description: "Programas intensivos para desarrollar habilidades técnicas rápidamente." },
        { title: "Workshops", description: "Sesiones interactivas para aprender habilidades específicas en grupos pequeños." },
        { title: "Talleres Virtuales", description: "Clases en línea para aprender desde cualquier lugar del mundo." },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalItems = programs.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex >= totalItems - itemsPerPage ? 0 : prevIndex + itemsPerPage
            );
        }, 15000); // 15 segundos

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= totalItems - itemsPerPage ? 0 : prevIndex + itemsPerPage
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalItems - itemsPerPage : prevIndex - itemsPerPage
        );
    };

    return (
        <section className="programs-section">
            <header>
                <h2 className="section-title">Programas Académicos</h2>
            </header>

            <div className="carousel-container">
                {/* Flecha izquierda */}
                <div className="carousel-control left" onClick={handlePrev}>{/* Izquierda */}
<div className="carousel-control left" onClick={handlePrev}>
  <svg viewBox="0 0 24 24">
    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
</div></div>

                {/* Solo se muestra el grupo actual */}
                <div className="carousel">
                    <div className="card-group">
                        {programs
                            .slice(currentIndex, currentIndex + itemsPerPage)
                            .map((program, index) => (
                                <Card
                                    key={index}
                                    title={program.title}
                                    description={program.description}
                                />
                            ))}
                    </div>
                </div>

                {/* Flecha derecha */}
                <div className="carousel-control right" onClick={handleNext}>{/* Derecha */}
<div className="carousel-control right" onClick={handleNext}>
  <svg viewBox="0 0 24 24">
    <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
  </svg>
</div></div>
            </div>
        </section>
    );
};

export default ProgramsSection;
