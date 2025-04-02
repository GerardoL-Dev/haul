import React from "react";
import { Routes, Route } from "react-router-dom"; // Correcto importando BrowserRouter desde react-router-dom
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";  // Asegúrate de importar los componentes que uses
import Contact from "./components/Contact.jsx";  // Asegúrate de importar los componentes que uses
import Trainings from "./components/courses/Trainings.jsx";  // Ruta correcta // Asegúrate de importar los componentes que uses
import Updates from "./components/courses/Updates.jsx"; 
import DiplomaPrograms from "./components/courses/DiplomaPrograms.jsx";
import Udegree from "./components/degree/Udegree.jsx"; // Asegúrate de importar los componentes que uses 
import Specialization from "./components/postgraduate/Specialization.jsx"; // Asegúrate de importar los componentes que uses
import Masters from "./components/postgraduate/Masters.jsx";
import Doctorate from "./components/postgraduate/Doctorate.jsx";
import News from "./components/news/News.jsx";
import FAQ from "./components/Faq.jsx";
import Login from "./components/Login.jsx";

import "./App.css";  // Para estilos globales si los tienes






function App() {
  return (
    <div className="App">

      <Header />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/diploma-programs" element={<DiplomaPrograms />}/>
        <Route path="/lic" element={<Udegree/>} />
        <Route path="/special" element={<Specialization/>} />
        <Route path="/masters" element={<Masters />} />
        <Route path="/doctorate" element={<Doctorate />} />
        <Route path="/news" element={<News />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
