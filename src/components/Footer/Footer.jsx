import React, { useState } from "react";
import Reveal from "../Reveal/Reveal";
import Logo from "../../img/header/logo.png";
import "./Footer.css";

export default function Footer() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        <Reveal className="footer__cta">
          <p className="footer__eyebrow">Project in mind?</p>
          <h2 className="footer__title">
            Let’s make your <span>Website shine</span>
          </h2>
          <p className="footer__lead">
            Premium web design, WordPress, and SEO services to help your business stand out.
          </p>
          <a href="#contact-form" className="footer__cta-btn">
            Get in touch
          </a>
        </Reveal>

        <Reveal className="footer__form-wrap" delay={80}>
          <h3 className="footer__form-title" id="contact-form">Let’s get in touch.</h3>
          {sent ? (
            <p className="footer__thanks">Thanks — I’ll get back to you shortly.</p>
          ) : (
            <form className="footer__form" onSubmit={onSubmit}>
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@studio.com" required />
              </label>
              <label className="footer__full">
                Message
                <textarea name="message" rows="4" placeholder="Tell me about the project" required />
              </label>
              <button type="submit" className="footer__submit">
                Send Message
              </button>
            </form>
          )}
        </Reveal>

        <div className="footer__brand">
          <img src={Logo} alt="arik." />
          <div className="footer__socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
          </div>
        </div>

        <div className="footer__grid">
          <div>
            <p className="footer__col-title">Pages</p>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="footer__col-title">Service</p>
            <ul>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Web Design</a></li>
              <li><a href="#services">UI Design</a></li>
              <li><a href="#services">SEO Optimization</a></li>
            </ul>
          </div>
          <div>
            <p className="footer__col-title">Contact</p>
            <ul>
              <li><a href="tel:123456789">123 456 789</a></li>
              <li><a href="mailto:support@raddito.com">support@raddito.com</a></li>
              <li>Saint Paul, MN 55112-6629 USA</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} arik. Made by Gola.</p>
          <a href="#hero" className="footer__top">To Top</a>
        </div>
      </div>
    </footer>
  );
}
