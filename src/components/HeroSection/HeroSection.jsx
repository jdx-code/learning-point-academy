import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay">
        <h1>Welcome to The Learning Point Academy</h1>
        <h2>Your Child’s Success, Our Commitment ✨</h2>
        <p>
          At <strong>The Learning Point Academy</strong>, we believe that every student possesses limitless potential waiting to be nurtured. Our mission is to create a supportive, engaging, and disciplined learning environment that empowers students to excel academically and personally.
We go beyond helping students score better—we strive to cultivate curiosity, confidence, and a lifelong love for learning.
        </p>
        <div className="hero-divider"></div>
      </div>
    </section>
  );
};

export default HeroSection;