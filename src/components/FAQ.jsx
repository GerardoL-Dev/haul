
import React, { useState, useEffect, useRef } from 'react';
import '../styles/faq.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const mainRef = useRef(null); // ← referencia al contenedor

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: 'smooth' }); // hace foco suave
      mainRef.current.focus(); // opcional: da foco por accesibilidad
    }
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: '¿Cuáles son los programas de estudio disponibles en Haul Mawr?',
      answer: (
        <ul>
          <li><strong>Cursos:</strong> Desarrollo Web, Inteligencia Artificial, Gestión de Proyectos, Ciberseguridad.</li>
          <li><strong>Actualizaciones:</strong> Actualización en Desarrollo Web, Inteligencia Artificial, Gestión de Proyectos, Ciberseguridad.</li>
          <li><strong>Diplomaturas:</strong> Desarrollo Web Full Stack, IA y Machine Learning, Gestión de Proyectos Ágiles, Marketing Digital.</li>
          <li><strong>Licenciaturas:</strong> Administración de Empresas, Ingeniería Informática, Psicología, Comunicación, Diseño Gráfico, Educación, Contaduría, Relaciones Internacionales.</li>
          <li><strong>Posgrados:</strong> Especialización en IA, Ciberseguridad, Gestión de Proyectos, Marketing Digital.</li>
          <li><strong>Maestrías:</strong> Desarrollo de Software, MBA, Ciencias de la Computación, Derecho Internacional.</li>
          <li><strong>Doctorados:</strong> IA, Biotecnología, Filosofía, Psicología Clínica.</li>
        </ul>
      )
    },
    {
      question: '¿Cómo es el proceso de inscripción?',
      answer: 'El proceso de inscripción se realiza a través de la página web de la institución. La admisión se lleva a cabo mediante un examen para evaluar conocimientos básicos.'
    },
    {
      question: '¿Cómo se accede al contenido de los cursos?',
      answer: 'Los estudiantes tienen acceso a los cursos a través de la plataforma Crescer, disponible para estudiantes regulares.'
    },
    {
      question: '¿Hay soporte técnico o administrativo?',
      answer: 'Sí, el instituto ofrece soporte técnico y administrativo para los estudiantes.'
    },
    {
      question: '¿El instituto ofrece becas o ayuda financiera?',
      answer: 'Cada dos años se otorgan becas como descuentos en las cuotas. Si un estudiante aprueba el 70% de las materias en un año, obtiene una bonificación de una cuota.'
    },
    {
      question: '¿Cuál es la duración de los cursos y programas?',
      answer: 'La duración está detallada en cada sección de carrera o curso en la página web.'
    },
    {
      question: '¿Se puede estudiar a distancia?',
      answer: 'Sí, la modalidad es 100% online.'
    },
    {
      question: '¿Cómo se puede contactar con los profesores o administradores?',
      answer: 'A través de la plataforma Crescer o por correo electrónico a soporte administrativo, quien contactará al docente correspondiente.'
    }
  ];

  return (
    <div className="faq-container" ref={mainRef} tabIndex={-1}>
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      {faqs.map((faq, index) => (
        <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3>{faq.question}</h3>
            <span className="faq-arrow">{activeIndex === index ? '−' : '+'}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
