import React from "react";
import "./Marquee.css";

const rowA = ["Let’s talk", "Start a project", "Get in touch", "Book a call"];
const rowB = ["New website", "Brand refresh", "Web design", "SEO & content"];

function Track({ items, className }) {
  const loop = [...items, ...items, ...items, ...items];

  return (
    <div className={`talk__track ${className}`.trim()}>
      {loop.map((item, index) => (
        <span className="talk__item" key={`${item}-${index}`}>
          <span className="talk__mark">+++</span>
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="talk" aria-label="Start a conversation">
      <a href="#contact" className="talk__link">
        <div className="talk__copy">
          <p className="talk__kicker">Available for new work</p>
          <h2 className="talk__title">Let’s talk</h2>
          <p className="talk__text">Tell me about the site, the brand, or the problem you want solved.</p>
          <span className="talk__button">Start a project</span>
        </div>
        <div className="talk__marquee" aria-hidden="true">
          <Track items={rowA} />
          <Track items={rowB} className="talk__track--reverse" />
        </div>
      </a>
    </section>
  );
}
