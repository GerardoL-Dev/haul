import React from 'react';
import '../styles/card.css'; // Importar el archivo CSS

const Card = ({ title, description }) => {
    return (
        <article className="card">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </article>
    );
};

export default Card;