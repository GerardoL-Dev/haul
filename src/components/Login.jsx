import { useState } from "react";
import "../styles/login.css";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(email, password); // Envía los datos a la API para autenticación
    };

    return (
        <div className="login-background"> {/* Cambiamos la clase a login-background */}
            <div className="login-container">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Correo Electrónico:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        Contraseña:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </label>
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
