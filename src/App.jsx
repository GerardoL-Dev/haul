import React from "react";
import Header from "./components/Header.jsx";  // Asegúrate de importar el encabezado
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";  // Asegúrate de importar el pie de página
import "./App.css";  // Para estilos globales si los tienes
function App() {
  return (
    <div className="App">
      <Header />  {/* Este es el encabezado que acabamos de crear */}
      <Home/>
      <Footer /> {/* Este es el pie de página que acabamos de crear */}  
    </div>
  );
}

export default App;