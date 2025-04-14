import React from "react";
import "../styles/noAccess.css";

const NoAccess = () => {
  return (
    <div className="no-access-container">
      <div className="no-access-box">
        <h2>Acceso denegado</h2>
        <p>No tienes permiso para ver esta página.</p>
        <p>
          Si crees que deberías tener acceso, contacta con el administrador
        </p>
      </div>
    </div>
  );
};

export default NoAccess;