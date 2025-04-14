import React, { useState, useEffect } from "react";
import "../styles/about.css";

const images = [
  "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553483/instituto1_mvi9mz.jpg",
  "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553486/instituto2_jbpcst.jpg",
  "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553524/instituto3_rjdiro.png",
  "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553515/instituto4_labc9n.png",
  "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553551/instituto5_ihkm4g.png",
  "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553546/instituto6_zvgauf.png",
  "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553565/instituto7_pgprbg.png",
];

const img1 = "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553174/develop_znbbvc.jpg";
const img2 = "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553726/engineering_cnxzdl.jpg";
const img3 = "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553586/logo_tumncj.png";

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <article className="about-container">
      <header className="about-header">
        <h1 className="about-title">Sobre Instituto Haul Mawr: Excelencia Académica y Liderazgo Global</h1>
      </header>

      <section className="about-intro">
        <div className="intro-content">
          <p>
            <strong>Instituto Haul Mawr</strong>, fundado en 1608, es sinónimo de excelencia académica, innovación y liderazgo en la educación superior.
            Con una trayectoria inigualable, nos hemos consolidado como un referente mundial en formación académica,
            moldeando mentes brillantes y líderes en diversas disciplinas. Somos reconocidos como una de las universidades más prestigiosas a nivel global.
          </p>
          <figure>
            <img src={img1} alt="Campus principal de Instituto Haul Mawr" className="intro-image" />
          </figure>
        </div>
      </section>

      <section className="about-mission">
        <div className="mission-content">
          <figure>
            <img src={img2} alt="Investigación avanzada en Instituto Haul Mawr" className="mission-image" />
          </figure>
          <div className="mission-text">
            <header>
              <h2 className="about-subtitle">Nuestra Misión: Transformar el Mundo a Través del Conocimiento</h2>
            </header>
            <p>
              En <strong>Instituto Haul Mawr</strong>, nos dedicamos a transformar el mundo a través del conocimiento, impulsando el progreso social y tecnológico.
              Nuestra misión es formar a los mejores profesionales, comprometidos con el cambio global, la innovación y la investigación de vanguardia.
              Empoderamos a nuestros estudiantes para enfrentar los desafíos del futuro con visión, ética y creatividad.
            </p>
          </div>
        </div>
      </section>

      <section className="about-history">
        <div className="history-content">
          <header>
            <h2 className="about-subtitle">Historia de Instituto Haul Mawr: Un Pilar en la Educación Superior</h2>
          </header>
          <p>
            Desde su fundación en 1608, <strong>Instituto Haul Mawr</strong> ha sido un pilar en el ámbito educativo, ofreciendo formación académica de excelencia.
            Hemos forjado alianzas con instituciones globales, impulsando la investigación avanzada y siendo referentes en múltiples campos.
            A lo largo de los años, hemos cultivado una comunidad académica que ha producido líderes reconocidos a nivel mundial,
            contribuyendo significativamente al progreso de la humanidad.
          </p>
          <figure>
            <img src={img3} alt="Laboratorios de química en Instituto Haul Mawr" className="history-image" />
          </figure>
        </div>
      </section>

      <section className="about-carousel">
        <header>
          <h2 className="about-subtitle">Galería de Imágenes de Instituto Haul Mawr</h2>
        </header>
        <div className="carousel-container">
          <img
            src={images[currentImage]}
            alt={`Imagen ${currentImage + 1} de Instituto Haul Mawr`}
            className="carousel-image"
          />
          <div className="carousel-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`carousel-dot ${index === currentImage ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
