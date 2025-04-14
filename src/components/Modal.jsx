import React from 'react';
import '../styles/modal.css'; // Archivo de estilos para el modal

export default function Modal({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null; // No renderiza nada si el modal está cerrado

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-actions">
          <button className="modal-cancel" onClick={onClose}>Cancelar</button>
          <button className="modal-confirm" onClick={onConfirm}>Aceptar</button>
        </div>
      </div>
    </div>
  );
}