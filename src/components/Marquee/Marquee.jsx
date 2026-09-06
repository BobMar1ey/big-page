import React from "react";
import "./Marquee.css";

export default function Marquee() {
  const items = Array.from({ length: 16 }, (_, index) => index);

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item) => (
          <span className="marquee__item" key={item}>
            Let’s Talk <span className="marquee__plus">+++</span>
          </span>
        ))}
      </div>
    </div>
  );
}
