import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import "../src/App.css";

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

// 🛡️ Rutas protegidas por rol
const ProtectedRoute = React.lazy(() => import("./components/ProtectedRoute.jsx"));

function App() {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Monitorear el estado de autenticación
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser); // Actualiza el estado del usuario
                localStorage.setItem("user", JSON.stringify(currentUser));
            } else {
                setUser(null); // Limpia el estado si no hay usuario autenticado
                localStorage.removeItem("user");
            }
            setAuthLoading(false); // Finaliza la carga
        });

        return () => unsubscribe();
    }, []);

    // Función para manejar el inicio de sesión exitoso
    const handleLoginSuccess = async (userData, token) => {
        setUser(userData); // Actualiza el estado del usuario
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", token);
        navigate("/dashboard"); // Redirige al dashboard
    };

    // Función para cerrar sesión
    const handleLogout = async () => {
        try {
            await signOut(auth); // Cierra la sesión en Firebase
            setUser(null); // Limpia el estado del usuario
            localStorage.removeItem("user"); // Elimina el usuario del localStorage
            localStorage.removeItem("token"); // Elimina el token del localStorage
            navigate("/login"); // Redirige al login
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    // Muestra un mensaje de carga mientras se verifica el estado del usuario
    if (authLoading) {
        return <div className="loading">Cargando sesión...</div>;
    }

    return (
        <div className="App">
            {/* Componentes de layout */}
            <Suspense fallback={<div>Cargando...</div>}>
                <Header />
                <Navbar user={user} onLogout={handleLogout} /> {/* Pasa el estado del usuario y la función de logout al Navbar */}
            </Suspense>

            {/* Rutas */}
            <Suspense fallback={<div>Cargando página...</div>}>
                <Routes>
                    {/* Rutas públicas */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/faq" element={<FAQ />} />

                    {/* Ruta de login */}
                    <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />

                    {/* Ruta protegida: Dashboard */}
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute allowedRoles={["admin", "director"]}>
                                <Dashboard user={user} />
                            </ProtectedRoute>
                        }
                    />

                    {/* Ruta para acceso denegado */}
                    <Route path="/no-access" element={<NoAccess />} />
                </Routes>
            </Suspense>

            {/* Footer */}
            <Suspense fallback={<div>Cargando footer...</div>}>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;

