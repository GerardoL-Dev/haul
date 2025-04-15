import React, { useState } from 'react';
import '../styles/testimonio.css'; // Importamos los estilos específicos

const Testimonio = () => {
    const cardsData = [
        {
            id: 1,
            title: "Mariano López",
            description: "Licenciatura en Administración de Empresas",
            image: "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553655/student1_nt7got.jpg",
            phrase: "Estoy a solo unos meses de terminar mi carrera y no puedo estar más agradecido con Haul Mawr."
        },
        {
            id: 2,
            title: "Julián Méndez",
            description: "Ingeniero en Sistemas, ahora CTO de una startup",
            image: "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553632/student2_vweolm.jpg",
            phrase: "Estudiar en Haul Mawr fue una de las mejores decisiones de mi vida."
        },
        {
            id: 3,
            title: "Camila Torres",
            description: "Diplomatura en Marketing Digital",
            image: "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553637/student3_yyvuqc.jpg",
            phrase: "El curso superó mis expectativas. Aprendí estrategias actuales de marketing digital."
        },
        {
            id: 4,
            title: "Lucía Fernández",
            description: "Maestría en Educación",
            image: "https://res.cloudinary.com/dbfrdhebo/image/upload/v1744553644/student4_zkpb8a.jpg",
            phrase: "Me inscribí en la maestría con dudas, pero después del primer mes supe que había tomado la decisión correcta."
        },
    ];

    const [currentCard, setCurrentCard] = useState(0);

    const changeCard = (index) => {
        setCurrentCard(index);
    };

    return (
        <section className="testimonios">
            {/* Título */}
            <h2 className="testimonios-title">Testimonios</h2>

            {/* Tarjeta actual */}
            <div className="testimonio-card">
                <div className="testimonio-content">
                    {/* Imagen */}
                    <div className="testimonio-image">
                        <img src={cardsData[currentCard].image} alt={`Foto de ${cardsData[currentCard].title}`} />
                    </div>
                    {/* Texto */}
                    <div className="testimonio-text">
                        <h3>{cardsData[currentCard].title}</h3>
                        <p>{cardsData[currentCard].description}</p>
                        <p className="testimonio-phrase">“{cardsData[currentCard].phrase}”</p>
                    </div>
                </div>
            </div>

            {/* Indicadores de puntos */}
            <div className="testimonio-indicators">
                {cardsData.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentCard ? 'active' : ''}`}
                        onClick={() => changeCard(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Testimonio;