import React, { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import '../styles/contact.css';
import MessageModal from "./MessageModal"; // Importa el modal
import { agregarMensaje } from "../services/firestoreService"; // Importa la función para agregar mensajes

const Contacto = () => {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [modalMessage, setModalMessage] = useState(""); // Estado para el mensaje del modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  // Función para manejar la verificación del captcha
  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica que el captcha esté completado
    if (!captchaToken) {
      setModalMessage("Por favor, completa el captcha.");
      setIsModalOpen(true);
      return;
    }

    // Obtiene los valores del formulario
    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const mensaje = e.target.mensaje.value;

    try {
      // Agrega el mensaje a Firestore
      await agregarMensaje(email, nombre, mensaje);

      // Limpia el formulario
      e.target.reset();
      setCaptchaToken(null); // Reinicia el captcha

      // Muestra el modal con el mensaje de éxito
      setModalMessage("Mensaje enviado con éxito.");
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setModalMessage("Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.");
      setIsModalOpen(true);
    }
  };

  // Función para cerrar el modal y limpiar campos
  const closeModal = () => {
    setIsModalOpen(false); // Cierra el modal
  };

  return (
    <div className="contact-container">
      {/* Modal */}
      <MessageModal
        isOpen={isModalOpen}
        onClose={closeModal} // Cierra el modal
        message={modalMessage} // Mensaje a mostrar
      />

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contacto</h2>
        <input type="text" name="nombre" placeholder="Nombre" required />
        <input type="email" name="email" placeholder="Correo Electrónico" required />
        <textarea name="mensaje" placeholder="Mensaje" required />
        
        {/* hCaptcha */}
        <HCaptcha
          sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY}
          onVerify={handleCaptcha}
        />
        
        <button type="submit">Enviar</button>
      </form>

      {/* Imagen al lado */}
      <div className="contact-image">
        <img src="https://res.cloudinary.com/dbfrdhebo/image/upload/v1744552961/contact_rlncw8.png" alt="Imagen de contacto" />
      </div>
    </div>
  );
};

export default Contacto;
