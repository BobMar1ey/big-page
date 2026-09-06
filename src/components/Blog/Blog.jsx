import React from "react";
import Reveal from "../Reveal/Reveal";
import "./Blog.css";

const posts = [
  {
    date: "12 Jun 2026",
    read: "6 min",
    title: "The art of SEO writing: How to write content that ranks on Google",
    excerpt: "Search-friendly copy still needs a voice. Here’s how I structure pages so they rank without sounding like a robot.",
    tag: "SEO",
  },
  {
    date: "28 May 2026",
    read: "5 min",
    title: "Why responsive web design is critical for your business",
    excerpt: "Most first visits happen on a phone. A layout that holds up on every screen is no longer a nice extra — it’s the product.",
    tag: "Design",
  },
  {
    date: "09 Apr 2026",
    read: "7 min",
    title: "10 common web development mistakes to avoid",
    excerpt: "From heavy images to inaccessible forms: the issues I still catch in audits, and how to fix them before launch.",
    tag: "Development",
  },
  {
    date: "21 Mar 2026",
    read: "4 min",
    title: "How motion can make a premium site feel alive",
    excerpt: "Subtle timing, staggered reveals, and one strong hover beat do more than a page full of gimmicks.",
    tag: "Motion",
  },
];

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <section className="blog" id="blog">
      <div className="blog__container">
        <Reveal className="blog__top">
          <div>
            <p className="blog__kicker">Journal</p>
            <h2 className="blog__title">From the blog</h2>
            <p className="blog__text">Notes on design, development, and growing a brand online.</p>
          </div>
          <a href="#contact" className="blog__all">
            All articles
          </a>
        </Reveal>

        <div className="blog__layout">
          <Reveal className="blog__featured-wrap">
            <a href="#contact" className="blog__featured">
              <div className="blog__featured-meta">
                <span className="blog__tag">{featured.tag}</span>
                <span className="blog__date">{featured.date}</span>
                <span className="blog__read">{featured.read} read</span>
              </div>
              <h3 className="blog__featured-title">{featured.title}</h3>
              <p className="blog__excerpt">{featured.excerpt}</p>
              <span className="blog__more">Read article</span>
            </a>
          </Reveal>

          <div className="blog__list">
            {rest.map((post, index) => (
              <Reveal key={post.title} delay={index * 90}>
                <a href="#contact" className="blog__item">
                  <div className="blog__item-meta">
                    <span className="blog__tag">{post.tag}</span>
                    <span className="blog__date">{post.date}</span>
                  </div>
                  <h3 className="blog__item-title">{post.title}</h3>
                  <p className="blog__excerpt">{post.excerpt}</p>
                  <span className="blog__more">{post.read} read</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
