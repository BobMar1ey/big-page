import React from "react";
import one from "../../img/web/1.png";
import two from "../../img/web/2.png";
import three from "../../img/web/3.png";
import four from "../../img/web/4.png";
import five from "../../img/web/5.png";
import six from "../../img/web/6.png";
import Reveal from "../Reveal/Reveal";
import "./Web.css";

const logos = [one, two, three, four, five, six];

const services = [
  {
    number: "01",
    title: "Web design",
    text: "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
    link: "About Webdesign",
  },
  {
    number: "02",
    title: "Development",
    text: "Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.",
    link: "About Development",
  },
  {
    number: "03",
    title: "Content & Seo",
    text: "Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.",
    link: "About SEO",
  },
];

export default function Web() {
  return (
    <section className="web" id="services">
      <div className="web__container">
        <div className="web__marquee" aria-hidden="true">
          <div className="web__top-row">
            {[...logos, ...logos].map((src, index) => (
              <span className="web__top-link" key={`${src}-${index}`}>
                <img src={src} alt="" className="web__top-img" />
              </span>
            ))}
          </div>
        </div>
        <div className="web__bottom-row">
          {services.map((item, index) => (
            <Reveal className="web__botttom-item" key={item.number} delay={index * 120}>
              <span className="web__bottom-number">{item.number}</span>
              <h2 className="web__bottom-title">{item.title}</h2>
              <p className="web__bottom-text">{item.text}</p>
              <a href="#contact" className="web__bottom-button">
                {item.link}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
