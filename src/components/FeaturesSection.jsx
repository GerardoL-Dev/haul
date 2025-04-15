import React from 'react';
import Card from './Card'; // Importar el componente Card
import '../styles/features-section.css'; // Importar el CSS específico

const FeaturesSection = () => {
    const features = [
        { title: "Educación de Calidad", description: "Nuestros docentes son líderes en sus campos, y los programas están diseñados para estar a la vanguardia." },
        { title: "Acceso a Recursos", description: "Contamos con una plataforma digital avanzada, accesible desde cualquier lugar, para que aprendas a tu ritmo." },
        { title: "Comunidad Global", description: "Conoce estudiantes y profesores de todo el mundo, y forma parte de nuestra red educativa global." },
        { title: "Flexibilidad de Horarios", description: "Ofrecemos horarios flexibles para adaptarnos a tus necesidades, ya sea que estudies a tiempo completo o trabajes." },
        { title: "Soporte Personalizado", description: "Cada estudiante cuenta con un tutor asignado que lo guiará durante su proceso de aprendizaje." },
        { title: "Certificaciones Reconocidas", description: "Nuestros programas ofrecen certificaciones internacionales que potencian tu perfil profesional." },
    ];

    return (
        <section className="features-section">
            {/* Título de la sección */}
            <header>
                <h2 className="section-title">¿Por qué elegir Haul Mawr?</h2>
            </header>

            {/* Contenedor de las tarjetas */}
            <div className="feature-cards">
                {features.map((feature, index) => (
                    <Card key={index} title={feature.title} description={feature.description} />
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;