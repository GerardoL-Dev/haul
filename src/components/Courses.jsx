import React, { useState, useRef, useEffect } from 'react';
import '../styles/courses.css';

const courses = [
    {
        type: 'Curso',
        title: 'Desarrollo Web',
        description: 'Aprende a crear sitios web dinámicos utilizando HTML, CSS, JavaScript y frameworks modernos como React y Vue.',
        duration: '6 meses',
        level: 'Intermedio',
        syllabus: ['HTML y CSS', 'JavaScript y DOM', 'React y Vue', 'Backend con Node.js']
    },
    {
        type: 'Curso',
        title: 'Inteligencia Artificial',
        description: 'Explora los fundamentos de la inteligencia artificial, aprendizaje automático y redes neuronales con Python y TensorFlow.',
        duration: '8 meses',
        level: 'Avanzado',
        syllabus: ['Fundamentos de IA', 'Machine Learning', 'Redes Neuronales', 'TensorFlow y Keras']
    },
    {
        type: 'Curso',
        title: 'Ciberseguridad',
        description: 'Conoce las estrategias para proteger sistemas y redes contra ciberataques, incluyendo criptografía y hacking ético.',
        duration: '7 meses',
        level: 'Intermedio',
        syllabus: ['Seguridad en Redes', 'Criptografía', 'Hacking Ético', 'Auditoría de Sistemas']
    },
    {
        type: 'Curso',
        title: 'Gestión de Proyectos',
        description: 'Aprende metodologías ágiles y herramientas clave para la planificación y ejecución eficiente de proyectos.',
        duration: '5 meses',
        level: 'Básico',
        syllabus: ['Introducción a la Gestión de Proyectos', 'Metodologías Ágiles', 'Scrum y Kanban', 'Gestión de Riesgos']
    },
    {
        type: 'Actualizaciones',
        title: 'Actualizaciones en Desarrollo Web',
        description: 'Mantente al día con las últimas tendencias y tecnologías en desarrollo web, incluyendo nuevas herramientas y mejores prácticas.',
        duration: '3 meses',
        level: 'Intermedio',
        syllabus: ['Nuevas Tecnologías', 'Frameworks Modernos', 'Mejores Prácticas', 'Tendencias en UX/UI']
    },
    {
        type: 'Actualizaciones',
        title: 'Actualizaciones en Inteligencia Artificial',
        description: 'Descubre las últimas innovaciones y avances en inteligencia artificial y aprendizaje automático.',
        duration: '4 meses',
        level: 'Avanzado',
        syllabus: ['Nuevas Técnicas de IA', 'Avances en Machine Learning', 'Redes Neuronales Avanzadas', 'Aplicaciones Prácticas']
    },
    {
        type: 'Actualizaciones',
        title: 'Actualizaciones en Ciberseguridad',
        description: 'Infórmate sobre las nuevas amenazas y técnicas de defensa en el campo de la ciberseguridad.',
        duration: '4 meses',
        level: 'Intermedio',
        syllabus: ['Amenazas Emergentes', 'Técnicas de Defensa', 'Normativas y Regulaciones', 'Casos de Estudio']
    },
    {
        type: 'Actualizaciones',
        title: 'Actualizaciones en Gestión de Proyectos',
        description: 'Conoce las últimas herramientas y metodologías en gestión de proyectos para mejorar la eficiencia y efectividad.',
        duration: '3 meses',
        level: 'Básico',
        syllabus: ['Nuevas Herramientas', 'Metodologías Emergentes', 'Gestión de Equipos', 'Tendencias en Gestión de Proyectos']
    },
    {
        type: 'Diplomatura',
        title: 'Diplomatura en Desarrollo de Software',
        description: 'Un programa integral que cubre desde los fundamentos de programación hasta el desarrollo de aplicaciones complejas.',
        duration: '1 año',
        level: 'Intermedio',
        syllabus: ['Fundamentos de Programación', 'Desarrollo Web', 'Bases de Datos', 'Metodologías Ágiles']
    },
    {
        type: 'Diplomatura',
        title: 'Diplomatura en Data Science',
        description: 'Aprende a analizar y visualizar datos, aplicar técnicas de machine learning y construir modelos predictivos.',
        duration: '1 año',
        level: 'Avanzado',
        syllabus: ['Fundamentos de Estadística', 'Análisis de Datos', 'Machine Learning', 'Visualización de Datos']
    },
    {
        type: 'Diplomatura',
        title: 'Diplomatura en Ciberseguridad',
        description: 'Desarrolla habilidades para proteger sistemas y redes, detectar vulnerabilidades y responder a incidentes de seguridad.',
        duration: '1 año',
        level: 'Intermedio',
        syllabus: ['Fundamentos de Ciberseguridad', 'Seguridad en Redes', 'Criptografía', 'Respuesta a Incidentes']
    },
    {
        type: 'Diplomatura',
        title: 'Diplomatura en Gestión de Proyectos Ágiles',
        description: 'Conviértete en un experto en gestión de proyectos ágiles, aprendiendo Scrum, Kanban y otras metodologías.',
        duration: '1 año',
        level: 'Básico',
        syllabus: ['Introducción a la Gestión Ágil', 'Scrum', 'Kanban', 'Gestión de Equipos Ágiles']
    },
    {
        type: 'Diplomatura',
        title: 'Diplomatura en Marketing Digital',
        description: 'Aprende estrategias de marketing digital, SEO, SEM y redes sociales para impulsar tu negocio en línea.',
        duration: '1 año',
        level: 'Intermedio',
        syllabus: ['Fundamentos de Marketing Digital', 'SEO y SEM', 'Redes Sociales', 'Analítica Web']
    },
    {
        type: 'Diplomatura',
        title: 'Diplomatura en UX/UI Design',
        description: 'Desarrolla habilidades en diseño de experiencia de usuario y diseño de interfaces para aplicaciones web y móviles.',
        duration: '1 año',
        level: 'Intermedio',
        syllabus: ['Fundamentos de UX/UI', 'Investigación de Usuarios', 'Prototipado y Wireframing', 'Diseño Visual']
    }
];

const Courses = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const ulRefs = useRef([]);
  
    useEffect(() => {
      ulRefs.current = courses.map(() => React.createRef());
    }, [courses]);
  
    const toggleSyllabus = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index);
      ulRefs.current.forEach((ref, idx) => {
        if (ref.current) {
          if (idx === index) {
            ref.current.classList.toggle('show');
          } else {
            ref.current.classList.remove('show');
          }
        }
      });
    };
  
    return (
      <div className="courses-container">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course.title}</h3>
            <p><strong>Tipo:</strong> {course.type}</p>
            <p><strong>Descripción:</strong> {course.description}</p>
            <p><strong>Duración:</strong> {course.duration}</p>
            <p><strong>Nivel:</strong> {course.level}</p>
            <div className="syllabus-container">
              <button onClick={() => toggleSyllabus(index)}>
                {expandedIndex === index ? 'Ocultar Plan de Estudios' : 'Ver Plan de Estudios'}
              </button>
              <ul ref={ulRefs.current[index]}>
                <strong>Plan de Estudios:</strong>
                {course.syllabus && course.syllabus.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Courses;