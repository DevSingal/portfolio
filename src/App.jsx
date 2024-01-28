// Desc: This is the main app file
import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Football from "./components/Football.jsx";
import Anime from "./components/Anime.jsx";
import Coding from "./components/Coding.jsx";
import { ContactUs } from "./components/Contact.jsx"
import { Toaster } from 'react-hot-toast';


function App() {
 

  return (
      <BrowserRouter>
          <Navbar />
          <Toaster/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/football" element={<Football />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/coding" element={<Coding />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
