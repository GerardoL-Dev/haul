import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./config/firebase"; // Importa Firestore
import "../src/App.css";
import Modal from "./components/ModalRestriction.jsx"; // Importa el componente Modal
import ClosingSessionModal from "./components/ClosingSessionModal"; // Importa el modal de cierre de sesión

// Componentes de layout y páginas cargadas bajo demanda
const Header = React.lazy(() => import("./components/Header2.jsx"));
const Footer = React.lazy(() => import("./components/Footer.jsx"));
const Home = React.lazy(() => import("./components/Home.jsx"));
const About = React.lazy(() => import("./components/About.jsx"));
const Contact = React.lazy(() => import("./components/Contact.jsx"));
const Careers = React.lazy(() => import("./components/Careers.jsx"));
const News = React.lazy(() => import("./components/News.jsx"));
const FAQ = React.lazy(() => import("./components/Faq.jsx"));
const Login = React.lazy(() => import("./components/Login.jsx"));
const Dashboard = React.lazy(() => import("./components/Dashboard.jsx"));
const NoAccess = React.lazy(() => import("./components/NoAccess.jsx"));
const Navbar = React.lazy(() => import("./components/Navbar")); // Importa el Navbar aquí

function App() {
    const [user, setUser] = useState(null);
    const [isAuthorized, setIsAuthorized] = useState(false); // Estado de autorización
    const [authLoading, setAuthLoading] = useState(true);
    const [authChecking, setAuthChecking] = useState(true); // Estado para indicar si se está verificando la autorización
    const [showModal, setShowModal] = useState(false); // Controla la visibilidad del modal
    const [isClosingModalOpen, setIsClosingModalOpen] = useState(false); // Estado del modal de cierre de sesión
    const navigate = useNavigate();

    useEffect(() => {
        // Recuperar usuario de localStorage al cargar la app
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        // Monitorear el estado de autenticación
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setAuthChecking(true); // Indicar que se está verificando la autorización

            try {
                if (currentUser) {
                    setUser(currentUser); // Actualiza el estado del usuario
                    localStorage.setItem("user", JSON.stringify(currentUser));

                    // Verificar si el usuario está en la whitelist y es confiable
                    const userDoc = await getDoc(doc(db, "whLuser", currentUser.email));
                    if (userDoc.exists() && userDoc.data().trust === true) {
                        setIsAuthorized(true); // Usuario autorizado
                    } else {
                        // Usuario no autorizado: limpiar el estado del usuario y mostrar modal
                        setUser(null); // Limpia el estado del usuario
                        setIsAuthorized(false);
                        setShowModal(true); // Mostrar modal
                    }
                } else {
                    setUser(null); // Limpia el estado si no hay usuario autenticado
                    setIsAuthorized(false); // Usuario no autorizado
                    localStorage.removeItem("user");
                }
            } catch (error) {
                console.error("Error al verificar autorización:", error);
                setUser(null); // Limpia el estado del usuario
                setIsAuthorized(false); // Fallback: asumir que el usuario no está autorizado
                setShowModal(true); // Mostrar modal
            } finally {
                setAuthChecking(false); // Finalizar la verificación
                setAuthLoading(false); // Finaliza la carga
            }
        });

        return () => unsubscribe();
    }, []);

    // Función para manejar el inicio de sesión exitoso
    const handleLoginSuccess = async (userData, token) => {
        setUser(userData); // Actualiza el estado del usuario temporalmente
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", token);

        try {
            // Verificar autorización después del login
            const userDoc = await getDoc(doc(db, "whLuser", userData.email));
            if (userDoc.exists() && userDoc.data().trust === true) {
                setIsAuthorized(true); // Usuario autorizado
                navigate("/dashboard"); // Redirige al dashboard
            } else {
                // Usuario no autorizado: limpiar el estado del usuario y mostrar modal
                setUser(null); // Limpia el estado del usuario
                setIsAuthorized(false);
                setShowModal(true); // Mostrar modal
            }
        } catch (error) {
            console.error("Error al verificar autorización:", error);
            setUser(null); // Limpia el estado del usuario
            setIsAuthorized(false); // Fallback: asumir que el usuario no está autorizado
            setShowModal(true); // Mostrar modal
        }
    };

    // Función para cerrar sesión
    const handleLogout = async () => {
        try {
            setIsClosingModalOpen(true); // Mostrar el modal de cierre de sesión
            await signOut(auth); // Cierra la sesión en Firebase
            setUser(null); // Limpia el estado del usuario
            setIsAuthorized(false); // Usuario no autorizado
            localStorage.removeItem("user"); // Elimina el usuario del localStorage
            localStorage.removeItem("token"); // Elimina el token del localStorage
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    // Función para redirigir al login
    const redirectToLogin = () => {
        setIsClosingModalOpen(false); // Ocultar el modal
        navigate("/login", { replace: true }); // Redirige al login
    };

    // Muestra un mensaje de carga mientras se verifica el estado del usuario
    if (authChecking || authLoading) {
        return <div className="loading">Cargando sesión...</div>;
    }

    return (
        <div className="App">
            {/* Componentes de layout */}
            <Suspense fallback={<div>Cargando...</div>}>
                <Header />
                {/* Pasa el estado del usuario, la autorización y la función de logout al Navbar */}
                <Navbar user={user} isAuthorized={isAuthorized} onLogout={handleLogout} />
            </Suspense>

            {/* Rutas */}
            <Suspense fallback={<div>Cargando página...</div>}>
                <Routes>
                    {/* Rutas públicas */}
                    <Route path="/" element={<Home />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />

                    {/* Ruta protegida: Dashboard */}
                    <Route
                        path="/dashboard"
                        element={
                            isAuthorized ? (
                                <Dashboard user={user} />
                            ) : (
                                <Navigate to="/no-access" replace />
                            )
                        }
                    />

                    {/* Ruta para acceso denegado */}
                    <Route path="/no-access" element={<NoAccess />} />

                    {/* Ruta predeterminada para cualquier otra URL */}
                    <Route path="*" element={<Navigate to="/no-access" replace />} />
                </Routes>
            </Suspense>

            {/* Modal para usuarios no autorizados */}
            {showModal && (
                <Modal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)} // Cerrar el modal manualmente (opcional)
                    message="No tienes permiso para acceder a esta aplicación."
                    redirectAfter={() => {
                        setShowModal(false); // Ocultar el modal
                        signOut(auth); // Cerrar sesión
                        navigate("/login"); // Redirigir al login
                    }}
                />
            )}

            {/* Modal de cierre de sesión */}
            {isClosingModalOpen && (
                <ClosingSessionModal
                    isOpen={isClosingModalOpen}
                    onClose={() => setIsClosingModalOpen(false)} // Ocultar el modal manualmente (opcional)
                    redirectAfter={redirectToLogin} // Redirigir al login
                />
            )}

            {/* Footer */}
            <Suspense fallback={<div>Cargando footer...</div>}>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;