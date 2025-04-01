import React from "react";
import "../styles/about.css";
import campus from "../assets/images/Campus.png";
import investigacion from "../assets/images/Research.png";

const About = () => {
    return (
        <div className="about-container">
            <section className="about-intro">
                <h1 className="about-title">Sobre Nosotros</h1>
                <p>
                    Fundada en 1925, nuestra institución es sinónimo de excelencia académica, innovación y liderazgo. Con una
                    trayectoria inigualable, hemos sido pioneros en la educación superior, consolidándonos como el referente
                    mundial en formación académica. Reconocidos por nuestra capacidad para moldear mentes brillantes y líderes
                    en diversas disciplinas, seguimos siendo una de las universidades más prestigiosas a nivel global.
                </p>
            </section>

            <section className="about-mission">
                <h2 className="about-subtitle">Nuestra Misión</h2>
                <p>
                    En nuestra institución, nos dedicamos a transformar el mundo a través del conocimiento, impulsando el progreso
                    social y tecnológico. Nuestra misión es formar a los mejores profesionales, comprometidos con el cambio
                    global, la innovación y la investigación de vanguardia. Empoderamos a nuestros estudiantes para enfrentar los
                    desafíos del futuro con visión, ética y creatividad.
                </p>
            </section>

            <section className="about-history">
                <h2 className="about-subtitle">Historia de la Institución</h2>
                <p>
                    Desde su fundación en 1925, nuestra institución ha sido un pilar en el ámbito educativo, ofreciendo formación
                    académica de excelencia. Hemos forjado alianzas con instituciones globales, impulsando la investigación
                    avanzada y siendo referentes en múltiples campos. A lo largo de los años, hemos cultivado una comunidad
                    académica que ha producido líderes reconocidos a nivel mundial, contribuyendo significativamente al progreso
                    de la humanidad.
                </p>
            </section>

            <section className="about-images">
                <h2 className="about-subtitle">Imágenes de Nuestra Institución</h2>
                <div className="images-container">
                    <img src={campus} alt="Campus" className="about-image" />
                    <img src={investigacion} alt="Investigación" className="about-image" />
                </div>
            </section>
        </div>
    );
};

export default About;
