import React from "react";
import Reveal from "../Reveal/Reveal";
import "./Testimonials.css";

const reviews = [
  {
    title: "A website that finally matches the brand",
    text: "Arik created a stunning website for my business. He was attentive to my needs and provided excellent communication throughout the entire process.",
    name: "John Smith",
    role: "ABC Company",
  },
  {
    title: "Clear process, premium result",
    text: "Working on my website redesign was a fantastic experience. He took the vision and turned it into a beautiful, functional site with unmatched attention to detail.",
    name: "Emily Carter",
    role: "Nova Studio",
  },
  {
    title: "SEO that actually moves the needle",
    text: "The new site looks exceptional and started ranking for the keywords we care about. The content and SEO work paid off faster than we expected.",
    name: "Daniel Lee",
    role: "Solar Labs",
  },
  {
    title: "Development with real craft",
    text: "Animations, structure, and performance were all handled with care. The handoff was simple, and we can update the site without calling a developer every time.",
    name: "Sofia Marin",
    role: "Sonic Goods",
  },
];

export default function Testimonials() {
  return (
    <section className="reviews" id="reviews">
      <div className="reviews__container">
        <Reveal className="reviews__top">
          <h2 className="reviews__title">What my clients say</h2>
          <p className="reviews__text">
            See what my clients have to say about working with me and the results I helped them achieve.
          </p>
        </Reveal>
        <div className="reviews__grid">
          {reviews.map((item, index) => (
            <Reveal className="reviews__card" key={item.name} delay={index * 90}>
              <h3 className="reviews__card-title">{item.title}</h3>
              <p className="reviews__card-text">{item.text}</p>
              <div className="reviews__author">
                <span className="reviews__avatar">{item.name[0]}</span>
                <div>
                  <p className="reviews__name">{item.name}</p>
                  <p className="reviews__role">{item.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
