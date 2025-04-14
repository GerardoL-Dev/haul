// components/NoAccess.jsx
// components/NoAccess.jsx
import React, { useEffect, useState } from "react";
import { auth } from "../config/firebase"; // Configuración de Firebase Auth
import "../styles/noAccess.css";

const NoAccess = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Limpiar el listener al desmontar el componente
  }, []);

  return (
    <div className="no-access-container">
      <div className="no-access-box">
        <h2>Acceso denegado</h2>
        <p>No tienes permiso para ver esta página.</p>
        {/* Solo muestra el mensaje si el usuario está autenticado */}
        {user ? (
          <p>
            Ya has iniciado sesión como <strong>{user.email}</strong>, pero no
            tienes acceso a esta sección.
          </p>
        ) : (
          <p>
            Si crees que deberías tener acceso, intenta{" "}
            <a href="/login" className="no-access-btn">
              iniciar sesión
            </a>{" "}
            con una cuenta autorizada.
          </p>
        )}
      </div>
    </div>
  );
};

export default NoAccess;