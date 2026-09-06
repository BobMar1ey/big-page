import React from "react";
import Reveal from "../Reveal/Reveal";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <Reveal className="about__portrait" delay={0}>
          <div className="about__frame">
            <span className="about__initials">AA</span>
            <p className="about__frame-label">Arik Andersson</p>
          </div>
        </Reveal>
        <Reveal className="about__content" delay={120}>
          <p className="about__kicker">About</p>
          <h2 className="about__title">Arik Andersson</h2>
          <h3 className="about__subtitle">A website that leaves a lasting impression!</h3>
          <p className="about__text">
            Hi, I'm Arik Andersson — a freelancer specializing in premium web design, development, and SEO
            services. I'm passionate about creating unique and effective solutions for my clients, and I
            bring a personal touch to every project. Let's work together to bring your vision to life!
          </p>
          <a href="#contact" className="about__button">
            Let’s talk
          </a>
        </Reveal>
      </div>
    </section>
  );
}
