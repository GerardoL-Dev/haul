import React, { useState, useEffect } from 'react';
import '../styles/cards.css'; // Asegúrate de tener la ruta correcta
import student1 from '../assets/images/student1.jpeg'; // Asegúrate de tener la ruta correcta
import student2 from '../assets/images/student2.jpeg';
import student3 from '../assets/images/student3.jpeg';
import student4 from '../assets/images/student4.jpeg';

const Cards = () => {
    const cardsData = [
        {
            id: 1,
            title: "Mariano López",
            description: "Licenciatura en Administración de Empresas",
            image: student1, 
            phrase: `"Estoy a solo unos meses de terminar mi carrera y no puedo estar más agradecido con Haul Mawr.
            La calidad de los profesores y el enfoque práctico de las clases me han preparado completamente para el mundo laboral. Estoy emocionado por lo que viene después de la graduación."`
        },
        {
            id: 2,
            title: "Julián Méndez",
            description: "Ingeniero en Sistemas, ahora CTO de una startup",
            image: student2, // Ruta de la imagen
            phrase: "Estudiar en Haul Mawr fue una de las mejores decisiones de mi vida. Gracias a la sólida formación que recibí, logré conseguir mi primer trabajo incluso antes de graduarme. Hoy soy CTO de una startup de tecnología y sigo aplicando todo lo aprendido en la universidad."
        },
        {
            id: 3,
            title: "Camila Torres",
            description: "Diplomatura en Marketing Digital",
            image: student3, // Ruta de la imagen
            phrase: `"El curso superó mis expectativas. Aprendí estrategias actuales de marketing digital con herramientas que realmente se usan en la industria. Además, los profesores son excelentes y siempre están dispuestos a ayudar."`
        },
        {
            id: 4,
            title: "Lucía Fernández",
            description: "Maestría en Educación",
            image: student4, // Ruta de la imagen
            phrase: `"Me inscribí en la maestría con dudas, pero después del primer mes supe que había tomado la decisión correcta. El nivel académico es excelente, el contenido actualizado y la modalidad flexible me permitió seguir trabajando mientras estudio."`
        },
    ];

    const [currentCard, setCurrentCard] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCard((prevCard) => (prevCard + 1) % cardsData.length);
        }, 3000); // Cambia la carta cada 3 segundos

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, [cardsData.length]);

    return (
        <div className="cards-container">
            <div className="card">
                <img src={cardsData[currentCard].image} alt={cardsData[currentCard].title} className="card-image" />
                <div className="card-content">
                    <h2>{cardsData[currentCard].title}</h2>
                    <p>{cardsData[currentCard].description}</p>
                    <p className="card-phrase">{cardsData[currentCard].phrase}</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
