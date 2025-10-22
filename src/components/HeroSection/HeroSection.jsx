import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay">
        <h1>Welcome to The Learning Point Academy</h1>
        <h2>Your Child’s Success, Our Commitment ✨</h2>
        <p>
          At The Learning Point Academy, we believe that every student has
          unlimited potential. Our mission is to provide the right guidance,
          structured learning, and personal care to help students not only
          score well but also develop a love for learning.
        </p>
        <div className="hero-divider"></div>
      </div>
    </section>
  );
};

export default HeroSection;