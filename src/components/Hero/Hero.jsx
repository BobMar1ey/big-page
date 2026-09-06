import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__tittle-box">
          <p className="hero__eyebrow">Freelance web studio</p>
          <h1 className="hero__title">
            Web Designer <span>& Developer</span>
          </h1>
          <h2 className="hero__subtitle">
            Premium web design, development, and SEO services to help your
            business stand out.
          </h2>
          <a href="#contact" className="hero__cta">
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
