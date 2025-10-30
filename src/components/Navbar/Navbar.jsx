import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* <img src="/vite.svg" alt="Logo" className="logo" /> */}
          {/* <h4 style={{ color: '#000' }}>The Learning Point Academy</h4> */}
          <img src="/logo.png" alt="The Learning Point Academy Logo" className="logo" />
        </div>        

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#whychoose" onClick={() => setIsOpen(false)}>Why Choose Us</a>
          <a href="#students" onClick={() => setIsOpen(false)}>Our Students</a>
        </div>


        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
