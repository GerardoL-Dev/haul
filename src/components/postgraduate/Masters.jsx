import React from "react";
import "../../styles/postgraduate/masters.css";

const Masters = () => {
    const mastersPrograms = [
        { title: "Maestría en Desarrollo de Software", description: "Profundiza en las últimas tecnologías y metodologías para la creación de software de alta calidad." },
        { title: "Maestría en Administración de Empresas (MBA)", description: "Capacítate para liderar organizaciones con estrategias de gestión, marketing y finanzas." },
        { title: "Maestría en Ciencias de la Computación", description: "Estudia algoritmos, inteligencia artificial y procesamiento de datos para aplicaciones avanzadas." },
        { title: "Maestría en Derecho Internacional", description: "Especialízate en normas internacionales, derechos humanos y resolución de conflictos globales." },
    ];

    return (
        <div className="masters-container">
            <h1>Programas de Maestría</h1>
            <div className="masters-list">
                {mastersPrograms.map((program, index) => (
                    <div key={index} className="masters-item">
                        <h2>{program.title}</h2>
                        <p>{program.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Masters;
