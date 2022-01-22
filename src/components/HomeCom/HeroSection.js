import React from "react";
import "./HeroSection.css";
import Cards from "./Cards";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video1.mp4" autoPlay loop muted />
      <h1 className=""> MON SLOGAN VA ETRE ICI </h1>
      <p>WHAT ARE YOU WAITING FOR ?</p>
      <Cards />
    </div>
  );
}

export default HeroSection;
