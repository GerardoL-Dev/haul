import React from "react";
import "../../styles/postgraduate/specialization.css";

const Specialization = () => {
    const specializations = [
        { title: "Especialización en Inteligencia Artificial", description: "Profundiza en machine learning, redes neuronales y visión por computadora." },
        { title: "Especialización en Ciberseguridad", description: "Aprende sobre protección de datos, hacking ético y seguridad en redes." },
        { title: "Especialización en Gestión de Proyectos", description: "Domina metodologías ágiles y gestión de recursos para proyectos exitosos." },
        { title: "Especialización en Marketing Digital", description: "Explora estrategias de SEO, redes sociales y publicidad digital." },
    ];

    return (
        <div className="specialization-container">
            <h1>Programas de Especialización</h1>
            <div className="specialization-list">
                {specializations.map((spec, index) => (
                    <div key={index} className="specialization-item">
                        <h2>{spec.title}</h2>
                        <p>{spec.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Specialization;