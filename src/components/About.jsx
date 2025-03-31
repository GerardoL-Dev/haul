import React from "react";
import "../styles/about.css";  // Asegúrate de tener un archivo de estilos
import campus from "../assets/images/Campus.png";  // Asegúrate de que la ruta sea correcta
import investigacion from "../assets/images/Research.png";  // Asegúrate de que la ruta sea correcta
const About = () => {
    return (
        <div className="about-container">
            <section className="about-intro">
                <h1>Sobre Nosotros</h1>
                <p>
                    Nuestra institución es una de las más prestigiosas y respetadas del mundo. Con más de 100 años de trayectoria,
                    hemos formado a líderes en diversos campos. A lo largo de los años, hemos mantenido un compromiso inquebrantable con
                    la excelencia académica, el desarrollo de la investigación, y la formación integral de nuestros estudiantes.
                </p>
            </section>

            <section className="about-mission">
                <h2>Nuestra Misión</h2>
                <p>
                    Nos dedicamos a proporcionar una educación de calidad que fomente el pensamiento crítico, la innovación y el
                    liderazgo. Buscamos empoderar a nuestros estudiantes para que puedan enfrentar los desafíos del mundo moderno con
                    creatividad y pasión.
                </p>
            </section>

            <section className="about-history">
                <h2>Historia de la Institución</h2>
                <p>
                    Fundado en 1985, nuestro instituto ha sido un referente en la educación superior, dedicándose a formar profesionales altamente capacitados en diversas áreas del conocimiento. A lo largo de los años, hemos construido una sólida reputación por nuestra enseñanza de calidad y el compromiso con el desarrollo integral de nuestros estudiantes.

                    Desde nuestros inicios, hemos mantenido un enfoque innovador en la enseñanza, adaptándonos a los cambios y avances tecnológicos para ofrecer programas académicos que se alineen con las necesidades del mercado. A través de un modelo educativo flexible y accesible, hemos logrado formar a generaciones de líderes, que han destacado tanto a nivel nacional como internacional.

                    Hoy en día, el Instituto continúa creciendo y expandiendo su alcance, estableciendo alianzas estratégicas con instituciones educativas de renombre y empresas líderes. Nuestro compromiso con la excelencia académica y la formación de profesionales competentes sigue siendo nuestra principal misión, y nos enorgullece ver cómo nuestros egresados marcan la diferencia en sus respectivas áreas de trabajo.
                </p>
            </section>

            <section className="about-images">
                <h2>Imágenes de Nuestra Institución</h2>
                <div className="images-container">
                    <img
                        src={campus}
                        alt="Campus"
                        className="about-image"
                    />
                    <img
                        src={investigacion}
                        alt="Investigación"
                        className="about-image"
                    />
                </div>
            </section>
        </div>
    );
};

export default About;
