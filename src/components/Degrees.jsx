import React from 'react';
import '../styles/courses.css';

const Courses = () => {
    // Datos de capacitaciones principales
    const courses = [
        {
            title: 'Desarrollo Web',
            description: 'Aprende a crear sitios web dinámicos utilizando HTML, CSS, JavaScript y frameworks modernos como React y Vue.',
            duration: '6 meses',
            level: 'Intermedio'
        },
        {
            title: 'Inteligencia Artificial',
            description: 'Explora los fundamentos de la inteligencia artificial, aprendizaje automático y redes neuronales.',
            duration: '8 meses',
            level: 'Avanzado'
        },
        {
            title: 'Gestión de Proyectos',
            description: 'Capacitación en metodologías ágiles y tradicionales para gestionar proyectos exitosos.',
            duration: '4 meses',
            level: 'Principiante'
        },
        {
            title: 'Ciberseguridad',
            description: 'Adquiere los conocimientos esenciales para proteger sistemas, redes y datos contra ataques cibernéticos.',
            duration: '5 meses',
            level: 'Intermedio'
        }
    ];

    // Datos de actualizaciones
    const updates = [
        {
            title: 'Actualización en Desarrollo Web',
            description: '¡Nuevo módulo agregado! Aprende las últimas técnicas...',
            date: 'Marzo 2025',
            level: 'Intermedio - Avanzado'
        },
        {
            title: 'Actualización en Inteligencia Artificial',
            description: 'Nueva sección sobre modelos generativos y su aplicación...',
            date: 'Febrero 2025',
            level: 'Avanzado'
        },
        {
            title: 'Actualización en Gestión de Proyectos',
            description: 'Añadimos nuevos recursos sobre Scrum y Kanban...',
            date: 'Enero 2025',
            level: 'Principiante - Intermedio'
        },
        {
            title: 'Actualización en Ciberseguridad',
            description: 'Nuevas técnicas de defensa contra ataques cibernéticos...',
            date: 'Diciembre 2024',
            level: 'Intermedio'
        }
    ];

    // Datos de diplomaturas
    const diplomas = [
        {
            title: 'Diplomatura en Desarrollo Web Full Stack',
            description: 'Este programa cubre tanto el desarrollo front-end como back-end...',
            duration: '6 meses',
            level: 'Intermedio'
        },
        {
            title: 'Diplomatura en Inteligencia Artificial Aplicada',
            description: 'Aprende a implementar soluciones de IA en el mundo real...',
            duration: '8 meses',
            level: 'Avanzado'
        },
        {
            title: 'Diplomatura en Gestión de Proyectos Ágiles',
            description: 'Domina las metodologías ágiles y su aplicación en proyectos...',
            duration: '4 meses',
            level: 'Intermedio'
        },
        {
            title: 'Diplomatura en Ciberseguridad Avanzada',
            description: 'Profundiza en técnicas avanzadas de protección y defensa...',
            duration: '5 meses',
            level: 'Avanzado'
        }
    ];

    const handleViewCurriculum = (course) => {
        console.log('Ver plan de:', course);
        // Aquí implementarías la lógica real
    };

    return (
        <div className="courses-page">
            {/* Sección de Capacitaciones */}
            <h1>Capacitaciones Disponibles</h1>
            {courses.map(course => (
                <div key={course.title} className="course-section">
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                    <p><strong>Duración:</strong> {course.duration}</p>
                    <p><strong>Nivel:</strong> {course.level}</p>
                    <button 
                        className="btn-curriculum"
                        onClick={() => handleViewCurriculum(course.title)}
                    >
                        Ver Plan de Estudios
                    </button>
                </div>
            ))}

            {/* Sección de Actualizaciones */}
            <h1>Actualizaciones Recientes en Capacitación</h1>
            {updates.map(update => (
                <div key={update.title} className="update-section">
                    <h2>{update.title}</h2>
                    <p>{update.description}</p>
                    <p><strong>Fecha:</strong> {update.date}</p>
                    <p><strong>Nivel:</strong> {update.level}</p>
                    <button 
                        className="btn-curriculum"
                        onClick={() => handleViewCurriculum(update.title)}
                    >
                        Ver Plan de Estudios
                    </button>
                </div>
            ))}

            {/* Sección de Diplomaturas */}
            <h1>Programas de Diplomatura</h1>
            {diplomas.map(diploma => (
                <div key={diploma.title} className="diploma-section">
                    <h2>{diploma.title}</h2>
                    <p>{diploma.description}</p>
                    <p><strong>Duración:</strong> {diploma.duration}</p>
                    <p><strong>Nivel:</strong> {diploma.level}</p>
                    <button 
                        className="btn-curriculum"
                        onClick={() => handleViewCurriculum(diploma.title)}
                    >
                        Ver Plan de Estudios
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Courses;