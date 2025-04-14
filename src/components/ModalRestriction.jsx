import React, { useEffect, useState } from "react";
import "../styles/modalRestriction.css"; // Importa los estilos

const ModalRestriction = ({ isOpen, onClose, message, redirectAfter }) => {
    const [countdown, setCountdown] = useState(5); // Contador inicial

    useEffect(() => {
        if (isOpen) {
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);

            // Limpiar el intervalo cuando el contador llega a 0
            if (countdown === 0) {
                clearInterval(timer);
                redirectAfter(); // Redirige al login
            }

            return () => clearInterval(timer);
        }
    }, [isOpen, countdown, redirectAfter]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>{message}</p>
                <p>
                    Serás redirigido en <strong>{countdown}</strong> segundos...
                </p>
            </div>
        </div>
    );
};

export default ModalRestriction;