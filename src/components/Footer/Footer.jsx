import React, { useState } from "react";
import Reveal from "../Reveal/Reveal";
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
            Premium web design, development, and SEO services to help your business stand out.
          </p>
        </Reveal>

        <Reveal className="footer__form-wrap" delay={120}>
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
                Project
                <textarea name="message" rows="4" placeholder="Tell me about the project" required />
              </label>
              <button type="submit" className="footer__submit">
                Get in touch
              </button>
            </form>
          )}
        </Reveal>

        <div className="footer__grid">
          <div>
            <p className="footer__col-title">Social</p>
            <ul>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a></li>
              <li><a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a></li>
            </ul>
          </div>
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
            <p className="footer__col-title">CMS</p>
            <ul>
              <li><a href="#work">Work</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#process">Process</a></li>
            </ul>
          </div>
          <div>
            <p className="footer__col-title">Utility</p>
            <ul>
              <li><a href="#hero">Styleguide</a></li>
              <li><a href="#contact">Licensing</a></li>
              <li><a href="#contact">Changelog</a></li>
              <li><a href="#hero">404</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} arik. All rights reserved.</p>
          <a href="#hero" className="footer__top">To Top</a>
        </div>
      </div>
    </footer>
  );
}
