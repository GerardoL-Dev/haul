import React from 'react';
import '../../styles/courses/trainings.css';  // Asegúrate de tener un archivo CSS para los estilos

const Trainings = () => {
  const trainingPrograms = [
    {
      title: 'Desarrollo Web',
      description: 'Aprende a crear sitios web dinámicos utilizando HTML, CSS, JavaScript y frameworks modernos como React y Vue.',
      duration: '6 meses',
      level: 'Intermedio',
    },
    {
      title: 'Inteligencia Artificial',
      description: 'Explora los fundamentos de la inteligencia artificial, aprendizaje automático y redes neuronales.',
      duration: '8 meses',
      level: 'Avanzado',
    },
    {
      title: 'Gestión de Proyectos',
      description: 'Capacitación en metodologías ágiles y tradicionales para gestionar proyectos exitosos.',
      duration: '4 meses',
      level: 'Principiante',
    },
    {
      title: 'Ciberseguridad',
      description: 'Adquiere los conocimientos esenciales para proteger sistemas, redes y datos contra ataques cibernéticos.',
      duration: '5 meses',
      level: 'Intermedio',
    },
  ];

  return (
    <div className="trainings-container">
      <h1>Capacitaciones Disponibles</h1>
      <div className="trainings-list">
        {trainingPrograms.map((training, index) => (
          <div key={index} className="training-card">
            <h2>{training.title}</h2>
            <p>{training.description}</p>
            <p><strong>Duración:</strong> {training.duration}</p>
            <p><strong>Nivel:</strong> {training.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainings;
