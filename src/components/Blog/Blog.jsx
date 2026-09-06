import React from "react";
import Reveal from "../Reveal/Reveal";
import "./Blog.css";

const posts = [
  {
    date: "23rd Aug 2023",
    title: "The art of SEO writing: How to write content that ranks on Google",
    tag: "Webdesign",
  },
  {
    date: "23rd Aug 2023",
    title: "Why responsive web design is critical for your business",
    tag: "Webdesign",
  },
  {
    date: "23rd Aug 2023",
    title: "10 common web development mistakes to avoid",
    tag: "Development",
  },
];

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="blog__container">
        <Reveal className="blog__top">
          <h2 className="blog__title">From the blog</h2>
          <p className="blog__text">Notes on design, development, and growing a brand online.</p>
        </Reveal>
        <div className="blog__list">
          {posts.map((post, index) => (
            <Reveal key={post.title} delay={index * 80}>
              <a href="#contact" className="blog__item">
                <span className="blog__date">{post.date}</span>
                <h3 className="blog__item-title">{post.title}</h3>
                <span className="blog__tag">{post.tag}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
