import React from 'react';
import '../../styles/courses/diplomaPrograms.css';  // Asegúrate de tener un archivo CSS para los estilos

const DiplomaPrograms = () => {
  const diplomaPrograms = [
    {
      title: 'Diplomatura en Desarrollo Web Full Stack',
      description: 'Este programa cubre tanto el desarrollo front-end como back-end. Aprende a crear aplicaciones web escalables utilizando herramientas como HTML, CSS, JavaScript, Node.js, y bases de datos SQL.',
      duration: '6 meses',
      level: 'Intermedio',
    },
    {
      title: 'Diplomatura en Inteligencia Artificial y Machine Learning',
      description: 'Aprende las técnicas fundamentales de IA y ML, incluidas las redes neuronales, aprendizaje supervisado y no supervisado, procesamiento de lenguaje natural y visión por computadora.',
      duration: '8 meses',
      level: 'Avanzado',
    },
    {
      title: 'Diplomatura en Gestión de Proyectos Ágiles',
      description: 'Enfocado en la metodología ágil, este programa te enseña a gestionar proyectos de manera eficiente utilizando Scrum, Kanban, y otras herramientas ágiles para mejorar la productividad y calidad.',
      duration: '5 meses',
      level: 'Intermedio',
    },
    {
      title: 'Diplomatura en Marketing Digital',
      description: 'Conoce las mejores prácticas para desarrollar estrategias de marketing digital, incluyendo SEO, SEM, marketing de contenido, redes sociales, análisis de datos y más.',
      duration: '4 meses',
      level: 'Principiante - Intermedio',
    },
    {
      title: 'Diplomatura en Ciberseguridad',
      description: 'Adquiere los conocimientos necesarios para proteger sistemas, redes y datos, con un enfoque en la prevención de ataques cibernéticos, análisis de vulnerabilidades y criptografía.',
      duration: '6 meses',
      level: 'Intermedio - Avanzado',
    },
  ];

  return (
    <div className="diploma-programs-container">
      <h1>Programas de Diplomatura</h1>
      <div className="diploma-programs-list">
        {diplomaPrograms.map((program, index) => (
          <div key={index} className="diploma-program-card">
            <h2>{program.title}</h2>
            <p>{program.description}</p>
            <p><strong>Duración:</strong> {program.duration}</p>
            <p><strong>Nivel:</strong> {program.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiplomaPrograms;
