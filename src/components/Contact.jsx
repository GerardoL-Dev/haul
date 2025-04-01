import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import '../styles/contact.css';

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
    <form onSubmit={handleSubmit}>
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
  );
};

export default Contacto;
