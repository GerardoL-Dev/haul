import React from 'react';
import '../../styles/courses/updates.css';  // Asegúrate de tener un archivo CSS para los estilos

const Updates = () => {
  const updates = [
    {
      title: 'Actualización en Desarrollo Web',
      description: '¡Nuevo módulo agregado! Aprende las últimas técnicas de desarrollo web utilizando las últimas versiones de React, Next.js y Tailwind CSS.',
      date: 'Marzo 2025',
      level: 'Intermedio - Avanzado',
    },
    {
      title: 'Actualización en Inteligencia Artificial',
      description: 'Nueva sección sobre modelos generativos y su aplicación en el procesamiento de lenguaje natural (NLP).',
      date: 'Febrero 2025',
      level: 'Avanzado',
    },
    {
      title: 'Actualización en Gestión de Proyectos',
      description: 'Añadimos nuevos recursos sobre Scrum y Kanban, con casos de estudio prácticos sobre la gestión de proyectos ágiles.',
      date: 'Enero 2025',
      level: 'Principiante - Intermedio',
    },
    {
      title: 'Actualización en Ciberseguridad',
      description: 'Nuevas técnicas para enfrentar amenazas emergentes, incluyendo seguridad en la nube y protección contra ataques de ransomware.',
      date: 'Diciembre 2024',
      level: 'Intermedio - Avanzado',
    },
  ];

  return (
    <div className="updates-container">
      <h1>Actualizaciones Recientes en Capacitación</h1>
      <div className="updates-list">
        {updates.map((update, index) => (
          <div key={index} className="update-card">
            <h2>{update.title}</h2>
            <p>{update.description}</p>
            <p><strong>Fecha:</strong> {update.date}</p>
            <p><strong>Nivel:</strong> {update.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
