import React from "react";
import "../../styles/degree/uDegree.css";

const UDegree = () => {
    const undergraduatePrograms = [
        { title: "Licenciatura en Administración de Empresas", description: "Formación en gestión, liderazgo y toma de decisiones estratégicas en el ámbito empresarial." },
        { title: "Licenciatura en Ingeniería Informática", description: "Desarrollo de software, administración de redes y seguridad informática." },
        { title: "Licenciatura en Psicología", description: "Estudio del comportamiento humano, la mente y la salud mental." },
        { title: "Licenciatura en Ciencias de la Comunicación", description: "Medios de comunicación, relaciones públicas y estrategias de marketing digital." },
        { title: "Licenciatura en Diseño Gráfico", description: "Creatividad, identidad visual y desarrollo de proyectos gráficos." },
        { title: "Licenciatura en Educación", description: "Formación pedagógica para enseñar y gestionar entornos educativos." },
        { title: "Licenciatura en Contaduría Pública", description: "Análisis financiero, auditoría y gestión contable de empresas." },
        { title: "Licenciatura en Relaciones Internacionales", description: "Estudio de política global, comercio internacional y diplomacia." }
    ];

    return (
        <div className="udegree-container">
            <h1>Programas de Licenciatura</h1>
            <div className="udegree-list">
                {undergraduatePrograms.map((program, index) => (
                    <div key={index} className="udegree-item">
                        <h2>{program.title}</h2>
                        <p>{program.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UDegree;