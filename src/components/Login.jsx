import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "../config/firebase";
import "../styles/login.css";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Función para validar si el usuario está en la whitelist
  const validateUser = async (email) => {
    const wlRef = doc(db, "whLuser", email);
    const wlSnap = await getDoc(wlRef);

    if (!wlSnap.exists() || wlSnap.data().trust !== true) {
      throw new Error("Este correo no está autorizado para ingresar.");
    }

    return wlSnap.data(); // Retorna los datos del usuario (rol, trust, etc.)
  };

  // Función para iniciar sesión con Google
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      // Iniciar sesión con Google
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Validar que el usuario esté en la whitelist
      const userData = await validateUser(user.email);

      if (!userData) {
        // Si el usuario no está autorizado, cerrar sesión
        await auth.signOut();
        setError("No tienes permisos para acceder a esta aplicación.");
        return;
      }

      // Redirigir al dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error("Error al iniciar sesión con Google:", err);
      setError("Ocurrió un error al iniciar sesión. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-background">
      {/* Mensaje de error */}
      {error && (
        <div className="login-error-overlay" aria-live="assertive">{error}</div>
      )}

      {/* Contenedor principal */}
      <div className="login-container">
        {/* Información de la izquierda */}
        <div className="login-info">
          <h2>Bienvenido</h2>
          <p>Inicia sesión con tu cuenta de Google.</p>
        </div>

        {/* Botón de inicio de sesión con Google */}
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
