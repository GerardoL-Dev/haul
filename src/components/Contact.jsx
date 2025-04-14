import React, { useState, useEffect, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import '../styles/contact.css';


const Contacto = () => {
  const [captchaToken, setCaptchaToken] = useState(null);
  const mainRef = useRef(null); // ← referencia al formulario

  // Efecto para desplazar al formulario cuando se carga la página
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: 'smooth' }); // hace foco suave
      mainRef.current.focus(); // opcional: da foco por accesibilidad
    }
  }, []);

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Por favor, completa el captcha.");
      return;
    }
    alert("Formulario enviado con éxito.");
  };

  return (
    <div className="contact-container" ref={mainRef} tabIndex={-1}>
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contacto</h2>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo Electrónico" required />
        <textarea placeholder="Mensaje" required />
        
        {/* hCaptcha */}
        <HCaptcha
          sitekey="553c3b96-e65c-4d68-a1e6-b8c855f06c88"
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
