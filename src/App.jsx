// Desc: This is the main app file
import React from "react";
import Navbar from './components/Navbar.jsx';
import Home from "./components/home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import Football from "./components/Football.jsx";
import Anime from "./components/Anime.jsx";
import Coding from "./components/Coding.jsx";

function App() {
  // set up react router dom

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/about/Football" element={<Football/>} />
        <Route path="/about/Anime" element={<Anime/>} />
        <Route path="/about/Coding" element={<Coding/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
