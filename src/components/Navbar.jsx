import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";


// import "../styles/navbar.css";

const Navbar = () => {
  const openMenu = () => {
    document.querySelector(".menu").classList.add("active");
  };

  const closeMenu = () => {
    document.querySelector(".menu").classList.remove("active");
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/" className="logo_link">
            <img src="./nintendo-ds.png" alt="" />
          </Link>
        </div>
        <div className="navbar_right">
          <button id="theme_btn">
            <FiSun />
          </button>
          <a href="https://github.com/DevSingal" target="_blank" ><FaGithub /></a>

          <button id="menu_btn">
            <AiOutlineMenu onClick={openMenu} className="open" />
          </button>
        </div>
      </div>

      {/* //create a full page menu */}
      <div className="menu">
        <div className="menu_close">
          <RxCross1 onClick={closeMenu} className="close" />
        </div>
        <ul className="menu_list">
          <li className="menu_list_item">
            <Link to="/" className="menu_link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="menu_list_item">
            <Link to="/projects" onClick={closeMenu} className="menu_link">
              Projects
            </Link>
          </li>
          <li className="menu_list_item">
            <Link to="/about" onClick={closeMenu} className="menu_link">
              About Me
            </Link>
          </li>

          <li className="menu_list_item">
            <Link to="/contact" onClick={closeMenu} className="menu_link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
