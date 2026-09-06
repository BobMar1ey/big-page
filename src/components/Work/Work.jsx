import React from "react";
import "./Work.css";
import one from "../../img/work/1.png";
import two from "../../img/work/2.png";
import three from "../../img/work/3.png";
import four from "../../img/work/4.png";
import Reveal from "../Reveal/Reveal";

const projects = [
  { img: one, name: "Space", type: "Webdesign", alt: "Space project" },
  { img: two, name: "Nova", type: "Webdesign", alt: "Nova project" },
  { img: three, name: "Sonic", type: "Webdesign", alt: "Sonic project" },
  { img: four, name: "Solar", type: "Development", alt: "Solar project" },
];

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="work__container">
        <Reveal className="work__top-row">
          <h2 className="work__top-title">Selected Work</h2>
          <a href="#contact" className="work__top-button">
            See all
          </a>
        </Reveal>
        <div className="work__bottom-row">
          {projects.map((item, index) => (
            <Reveal key={item.name} delay={index * 90} className="work__reveal">
              <a href="#contact" className="work__bottom-item">
                <img src={item.img} alt={item.alt} />
                <div className="work__text-box">
                  <span className="work__name">{item.name}</span>
                  <span className="work__design">{item.type}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
