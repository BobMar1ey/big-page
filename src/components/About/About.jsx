import React from "react";
import Reveal from "../Reveal/Reveal";
import portrait from "../../img/about/arik.webp";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__names" aria-hidden="true">
        <span>Arik Andersson</span>
        <span>Arik Andersson</span>
        <span>Arik Andersson</span>
      </div>
      <div className="about__photo-wrap">
        <img src={portrait} alt="Arik Andersson" className="about__photo" />
      </div>
      <div className="about__container">
        <Reveal>
          <h2 className="about__title">
            A website that leaves <span>a lasting impression!</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="about__text">
            Hi, I'm Arik Andersson - a freelancer specializing in premium web design, development, and SEO
            services. I'm passionate about creating unique and effective solutions for my clients, and I
            bring a personal touch to every project. Let's work together to bring your vision to life!
          </p>
          <div className="about__socials">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">X</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">Ig</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble">Dr</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" aria-label="Behance">Be</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
