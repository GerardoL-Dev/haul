import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Asegúrate de importar correctamente
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Trainings from "./components/courses/Trainings.jsx";
import Updates from "./components/courses/Updates.jsx";
import DiplomaPrograms from "./components/courses/DiplomaPrograms.jsx";
import Udegree from "./components/degree/Udegree.jsx";
import Specialization from "./components/postgraduate/Specialization.jsx";
import Masters from "./components/postgraduate/Masters.jsx";
import Doctorate from "./components/postgraduate/Doctorate.jsx";
import News from "./components/news/News.jsx";

import "./App.css"; 

function App() {
  return (
    <BrowserRouter basename="/haul"> {/* 📌 Agregado el basename para GitHub Pages */}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/diploma-programs" element={<DiplomaPrograms />} />
          <Route path="/lic" element={<Udegree />} />
          <Route path="/special" element={<Specialization />} />
          <Route path="/masters" element={<Masters />} />
          <Route path="/doctorate" element={<Doctorate />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
