import React, { useEffect, useState } from "react";
import "../styles/modal.css"; // Importa los estilos existentes

const ClosingSessionModal = ({ isOpen, onClose, redirectAfter }) => {
  const [countdown, setCountdown] = useState(3); // Contador inicial (3 segundos)

  useEffect(() => {
    if (isOpen) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1); // Decrementa el contador cada segundo
      }, 1000);

      // Limpiar el intervalo y redirigir cuando el contador llega a 0
      if (countdown === 0) {
        clearInterval(timer);
        redirectAfter(); // Redirige al login
      }

      return () => clearInterval(timer); // Limpia el temporizador si el componente se desmonta
    }
  }, [isOpen, countdown, redirectAfter]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>Cerrando sesión...</p>
        <p>
          Serás redirigido en <strong>{countdown}</strong> segundos...
        </p>
      </div>
    </div>
  );
};

export default ClosingSessionModal;