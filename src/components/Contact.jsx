import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import '../styles/contact.css';
import contact from '../assets/images/contact.png'; // Asegúrate de que la ruta sea correcta

const Contacto = () => {
  const [captchaToken, setCaptchaToken] = useState(null);

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
    <div className="contact-container">
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
        <img src={contact} alt="Imagen de contacto" />
      </div>
    </div>
  );
};

export default Contacto;

