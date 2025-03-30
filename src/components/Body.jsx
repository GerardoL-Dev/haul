// src/components/Body.jsx
import React from "react";
import "../styles/BodyStyle.css";
import logo1 from "../images/gerardo-motosport.png";
import logo2 from "../images/gerardo-travel.png";

const Body = () => {
  return (
    <div className="body">
      {/* Sección Sobre mí */}
      <section id="about" className="about">
        <h2>Sobre mí</h2>
        <p>
          Soy un Desarrollador Full Stack apasionado por el arte del diseño web y la ciencia detrás de su funcionamiento. Me motiva el profesionalismo individual y el esfuerzo que implica construir soluciones tecnológicas eficientes y atractivas.
        </p>
        <p>Creo firmemente en el aprendizaje continuo y la evolución constante en este campo. Trabajo con tecnologías como Java, JavaScript, HTML y CSS, además de frameworks y herramientas como React, Node.js, MySQL e Hibernate.</p>
        <p>He desarrollado proyectos como una tienda online de motos y una app de reservas de vuelos, lo que me ha permitido aplicar mis conocimientos en el desarrollo de aplicaciones funcionales y escalables.</p>
        <p>Mis fortalezas:</p>
        <ul>
          <li> Creatividad y dinamismo en la resolución de problemas.</li>
          <li> Habilidad para comunicar ideas de forma clara y efectiva.</li>
          <li> Trabajo en equipo y cumplimiento de plazos.</li>
          <li> Adaptabilidad y enfoque en la mejora constante.</li>
        </ul>
        <p>Busco participar en proyectos que me desafíen y me permitan expandir mis conocimientos, donde pueda desarrollar mi creatividad mientras aprendo y aporto valor. Disfruto enfrentar nuevos retos y aprender cosas nuevas. Me desenvuelvo bien en entornos dinámicos y sé gestionar la presión de manera efectiva cuando es necesario.</p>
      </section>
      {/* Sección de Proyectos */}
      <section id="projects" className="projects">
        <h2>Mis Proyectos</h2>
        <div className="projects-list">
          <div className="project">
            <img src={logo1} alt="logo1" />
            <p>Desarrollé una tienda online totalmente funcional donde los usuarios pueden explorar productos, agregarlos al carrito y finalizar su compra de manera segura. La plataforma incluye un sistema de filtrado de productos, integración con pasarelas de pago y una interfaz intuitiva optimizada para dispositivos móviles.</p>
            <p>Tecnologías utilizadas: React.js, Node.js, MongoDB, Stripe (para pagos), CSS con Tailwind..</p>
          </div>
          <div className="project">
            <img src={logo2} alt="logo2" />
            <p>Este proyecto es un sistema de reservas de vuelos que permite a los usuarios buscar vuelos, seleccionar fechas y realizar reservas en línea. Implementé un sistema de autenticación para usuarios, integración con APIs de aerolíneas y una experiencia de usuario fluida con animaciones y carga dinámica de datos.</p>
            <p>Tecnologías utilizadas: React.js, Firebase (para autenticación y base de datos), Tailwind CSS, API REST de aerolíneas.</p>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contact" className="contact">
        <h2>Contacto</h2>
        <div id="contact-form" className="contact-form">
          <div>
            <p>Me puedes encontrar en las siguientes redes sociales:</p>
            <ul>
              <li><a href="https://www.linkedin.com/in/gerardo-leivas-dev/" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/72px-LinkedIn_icon.svg.png?20210220164014" alt="linkedIn-Logo" srcset="" />
              </a></li>
            </ul></div>
          <div>
            <p>Mi Repositorio</p>
            <ul>
              <li><a href="https://github.com/GerardoL-Dev" target="_blank" rel="noopener noreferrer">
                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github-logo" srcset="" />
              </a></li>
            </ul></div>
        </div>

      </section>
    </div>
  );
};

export default Body;
