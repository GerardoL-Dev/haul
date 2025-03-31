import React from "react";
import "../../styles/postgraduate/doctorate.css";

const Doctorate = () => {
    const doctoratePrograms = [
        { title: "Doctorado en Inteligencia Artificial", description: "Conviértete en un experto en IA, incluyendo algoritmos, machine learning y redes neuronales." },
        { title: "Doctorado en Biotecnología", description: "Investiga y desarrolla nuevas soluciones en biología molecular, genética y bioprocesos." },
        { title: "Doctorado en Filosofía", description: "Explora los fundamentos del pensamiento filosófico y su aplicación en los desafíos contemporáneos." },
        { title: "Doctorado en Psicología Clínica", description: "Especialízate en la investigación avanzada de trastornos mentales, terapias y enfoques clínicos." },
        { title: "Doctorado en Derecho Constitucional", description: "Profundiza en el análisis constitucional, derechos fundamentales y justicia en un marco global." },
        { title: "Doctorado en Ciencias Ambientales", description: "Desarrolla nuevas estrategias para la protección del medio ambiente y la sostenibilidad global." },
    ];

    return (
        <div className="doctorate-container">
            <h1>Programas de Doctorado</h1>
            <div className="doctorate-list">
                {doctoratePrograms.map((program, index) => (
                    <div key={index} className="doctorate-item">
                        <h2>{program.title}</h2>
                        <p>{program.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Doctorate;
