import React, { useState } from 'react';
import '../styles/faq.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same item is clicked
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(0)}>
          <h3>1. ¿Cuáles son los programas de estudio disponibles en Haul Mawr?</h3>
          <span className="faq-arrow">{activeIndex === 0 ? '−' : '+'}</span>
        </div>
        {activeIndex === 0 && (
          <div className="faq-answer">
            <ul>
              <li><strong>Cursos:</strong> Desarrollo Web, Inteligencia Artificial, Gestión de Proyectos, Ciberseguridad.</li>
              <li><strong>Actualizaciones:</strong> Actualización en Desarrollo Web, Actualización en Inteligencia Artificial, Actualización en Gestión de Proyectos, Actualización en Ciberseguridad.</li>
              <li><strong>Diplomaturas:</strong> Diplomatura en Desarrollo Web Full Stack, Diplomatura en Inteligencia Artificial y Machine Learning, Diplomatura en Gestión de Proyectos Ágiles, Diplomatura en Marketing Digital.</li>
              <li><strong>Licenciaturas:</strong> Licenciatura en Administración de Empresas, Licenciatura en Ingeniería Informática, Licenciatura en Psicología, Licenciatura en Ciencias de la Comunicación, Licenciatura en Diseño Gráfico, Licenciatura en Educación, Licenciatura en Contaduría Pública, Licenciatura en Relaciones Internacionales.</li>
              <li><strong>Posgrados:</strong> Especialización en Inteligencia Artificial, Especialización en Ciberseguridad, Especialización en Gestión de Proyectos, Especialización en Marketing Digital.</li>
              <li><strong>Maestrías:</strong> Maestría en Desarrollo de Software, Maestría en Administración de Empresas (MBA), Maestría en Ciencias de la Computación, Maestría en Derecho Internacional.</li>
              <li><strong>Doctorados:</strong> Doctorado en Inteligencia Artificial, Doctorado en Biotecnología, Doctorado en Filosofía, Doctorado en Psicología Clínica.</li>
            </ul>
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(1)}>
          <h3>2. ¿Cómo es el proceso de inscripción?</h3>
          <span className="faq-arrow">{activeIndex === 1 ? '−' : '+'}</span>
        </div>
        {activeIndex === 1 && (
          <div className="faq-answer">
            <p>
              El proceso de inscripción es a través de la página web de la institución. La admisión se realiza mediante un examen para evaluar los conocimientos básicos.
            </p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(2)}>
          <h3>3. ¿Cómo se accede al contenido de los cursos?</h3>
          <span className="faq-arrow">{activeIndex === 2 ? '−' : '+'}</span>
        </div>
        {activeIndex === 2 && (
          <div className="faq-answer">
            <p>
              Los estudiantes tienen acceso al contenido de los cursos a través de la plataforma Crescer, disponible solo para estudiantes regulares.
            </p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(3)}>
          <h3>4. ¿Hay soporte técnico o administrativo?</h3>
          <span className="faq-arrow">{activeIndex === 3 ? '−' : '+'}</span>
        </div>
        {activeIndex === 3 && (
          <div className="faq-answer">
            <p>
              Sí, el instituto ofrece soporte técnico y administrativo para asistir a los estudiantes.
            </p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(4)}>
          <h3>5. ¿El instituto ofrece becas o ayuda financiera?</h3>
          <span className="faq-arrow">{activeIndex === 4 ? '−' : '+'}</span>
        </div>
        {activeIndex === 4 && (
          <div className="faq-answer">
            <p>
              Cada dos años se ofrecen becas, como descuentos en las cuotas. Si un estudiante aprueba el 70% de las materias en el mismo año, obtiene una bonificación de una cuota.
            </p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(5)}>
          <h3>6. ¿Cuál es la duración de los cursos y programas?</h3>
          <span className="faq-arrow">{activeIndex === 5 ? '−' : '+'}</span>
        </div>
        {activeIndex === 5 && (
          <div className="faq-answer">
            <p>
              La duración de los cursos y programas está detallada en cada sección de la carrera o curso en la página web.
            </p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(6)}>
          <h3>7. ¿Se puede estudiar a distancia?</h3>
          <span className="faq-arrow">{activeIndex === 6 ? '−' : '+'}</span>
        </div>
        {activeIndex === 6 && (
          <div className="faq-answer">
            <p>
              Sí, la plataforma es 100% online, por lo que todos los cursos se pueden estudiar a distancia.
            </p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(7)}>
          <h3>8. ¿Cómo se puede contactar con los profesores o administradores?</h3>
          <span className="faq-arrow">{activeIndex === 7 ? '−' : '+'}</span>
        </div>
        {activeIndex === 7 && (
          <div className="faq-answer">
            <p>
              Los estudiantes pueden contactar a los profesores y administradores a través de la plataforma Crescer o por correo electrónico a soporte administrativo. Estos informarán al docente correspondiente.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
