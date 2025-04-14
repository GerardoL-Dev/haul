import React from 'react';
import '../styles/modal.css'; // Importa los estilos

const MessageModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose} className="modal-continue">
          Continuar
        </button>
      </div>
    </div>
  );
};

export default MessageModal;