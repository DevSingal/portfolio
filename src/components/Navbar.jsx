import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
// import "../styles/navbar.css";

const Navbar = () => {
  return (

    // create me a navbar with menu and dark/light mode icon on the right side of the navbar 
    
    <div className="navbar">
        <div className="navbar__right">
            <a href="#theme"><FiSun /></a>
            <a href="#menuIcon"><AiOutlineMenu /></a>
        </div>
    </div>


  )
}

export default Navbar