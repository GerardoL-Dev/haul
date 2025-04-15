import React from 'react';
import '../styles/register-section.css'; // Importar el CSS específico

const RegisterSection = () => {
    const images = [
        'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744677221/register1_dsx4lo.png',
        'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744677425/register2_ykgs2u.png',
        'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744677624/register3_goqvfl.png',
        'https://res.cloudinary.com/dbfrdhebo/image/upload/v1744677862/register4_djoq3z.png',
    ];

    return (
        <section className="register-section">
            <h2 className="register-title">Inscríbete</h2>
            <p className="register-subtitle">Inscripciones abiertas 2025</p>
            <a href="#inscripcion" className="register-button">¡Inscríbete ya!</a>
            <div className="register-images">
                {images.map((image, index) => (
                    <div key={index} className="register-image-card">
                        <img src={image} alt={`Imagen ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RegisterSection;