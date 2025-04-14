import { useState, useEffect, useRef } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import "../styles/login.css";

const Login = ({ onLoginSuccess }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const loginRef = useRef(null); // ← Referencia al contenedor

  // Efecto para hacer scroll suave al login al cargar
  useEffect(() => {
    if (loginRef.current) {
      loginRef.current.scrollIntoView({ behavior: "smooth" });
      loginRef.current.focus(); // opcional
    }
  }, []);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      if (onLoginSuccess) {
        onLoginSuccess(user, result.user.accessToken);
      }
    } catch (err) {
      console.error("Error al iniciar sesión con Google:", err);
      setError("Ocurrió un error al iniciar sesión. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="login-background"
      ref={loginRef}
      tabIndex={-1} // Para que pueda recibir focus
    >
      {/* Mensaje de error */}
      {error && (
        <div className="login-error-overlay" aria-live="assertive">
          {error}
        </div>
      )}

      {/* Contenedor principal */}
      <div className="login-container">
        <div className="login-info">
          <h2>Bienvenido</h2>
          <p>Inicia sesión con tu cuenta de Google.</p>
        </div>

        <div className="login-form-wrapper">
          <button
            className="google-login-btn"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            {loading ? "Ingresando..." : "Iniciar sesión con Google"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
