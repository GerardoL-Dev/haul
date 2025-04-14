import React, { useState, useEffect } from 'react';
import '../styles/cards.css';

const Cards = () => {
    const cardsData = [
        {
            id: 1,
            title: "Mariano López",
            description: "Licenciatura en Administración de Empresas",
            image: "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553655/student1_nt7got.jpg",
            phrase: "Estoy a solo unos meses de terminar mi carrera y no puedo estar más agradecido con Haul Mawr. La calidad de los profesores y el enfoque práctico de las clases me han preparado completamente para el mundo laboral. Estoy emocionado por lo que viene después de la graduación."
        },
        {
            id: 2,
            title: "Julián Méndez",
            description: "Ingeniero en Sistemas, ahora CTO de una startup",
            image: "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553632/student2_vweolm.jpg",
            phrase: "Estudiar en Haul Mawr fue una de las mejores decisiones de mi vida. Gracias a la sólida formación que recibí, logré conseguir mi primer trabajo incluso antes de graduarme. Hoy soy CTO de una startup de tecnología y sigo aplicando todo lo aprendido en la universidad."
        },
        {
            id: 3,
            title: "Camila Torres",
            description: "Diplomatura en Marketing Digital",
            image: "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553637/student3_yyvuqc.jpg",
            phrase: "El curso superó mis expectativas. Aprendí estrategias actuales de marketing digital con herramientas que realmente se usan en la industria. Además, los profesores son excelentes y siempre están dispuestos a ayudar."
        },
        {
            id: 4,
            title: "Lucía Fernández",
            description: "Maestría en Educación",
            image: "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553644/student4_zkpb8a.jpg",
            phrase: "Me inscribí en la maestría con dudas, pero después del primer mes supe que había tomado la decisión correcta. El nivel académico es excelente, el contenido actualizado y la modalidad flexible me permitió seguir trabajando mientras estudio."
        },
    ];

    const [currentCard, setCurrentCard] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCard((prevCard) => (prevCard + 1) % cardsData.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [cardsData.length]);

    return (
        <div className="cards-container">
            <div className="card">
                <img src={cardsData[currentCard].image} alt={`Foto de ${cardsData[currentCard].title}`} className="card-image" />
                <div className="card-content">
                    <h2>{cardsData[currentCard].title}</h2>
                    <p>{cardsData[currentCard].description}</p>
                    <p className="card-phrase">“{cardsData[currentCard].phrase}”</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
