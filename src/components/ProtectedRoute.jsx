import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const [access, setAccess] = useState(null); // null = cargando, true = acceso, false = no acceso
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      const currentUser = auth.currentUser;

      if (!currentUser) {
        setAccess(false); // No autenticado
        setAuthChecked(true);
        return;
      }

      try {
        const email = currentUser.email;
        const userDoc = await getDoc(doc(db, "whLuser", email));

        if (!userDoc.exists()) {
          setAccess(false); // No está en la whitelist
          return;
        }

        const { rol, trust } = userDoc.data();
        const isTrusted = trust === true;

        if (allowedRoles.length > 0 && (!rol || !allowedRoles.includes(rol))) {
          setAccess("unauthorized"); // Rol no permitido
          return;
        }

        setAccess(isTrusted); // Acceso si es confiable
      } catch (error) {
        console.error("Error al verificar el rol:", error);
        setAccess("unauthorized");
      }

      setAuthChecked(true);
    };

    checkAccess();
  }, [allowedRoles]);

  if (!authChecked || access === null) {
    return <div>Cargando permisos...</div>;
  }

  if (!auth.currentUser) {
    return <Navigate to="/login" />;
  }

  if (access === "unauthorized" || access === false) {
    return <Navigate to="/no-access" />;
  }

  return children;
};

export default ProtectedRoute;