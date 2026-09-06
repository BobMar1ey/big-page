import React from "react";
import Reveal from "../Reveal/Reveal";
import "./Testimonials.css";
import logo1 from "../../img/web/1.png";
import logo2 from "../../img/web/2.png";
import logo3 from "../../img/web/3.png";
import logo4 from "../../img/web/4.png";
import logo5 from "../../img/web/5.png";
import logo6 from "../../img/web/6.png";
import cl1 from "../../img/clients/cl1.webp";
import cl2 from "../../img/clients/cl2.webp";
import cl3 from "../../img/clients/cl3.webp";
import cl4 from "../../img/clients/cl4.webp";
import cl5 from "../../img/clients/cl5.webp";
import cl6 from "../../img/clients/cl6.webp";

const reviews = [
  {
    logo: logo1,
    photo: cl1,
    title: "Amazing Results with Arik’s Premium Web Design Services.",
    text: "Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.",
    name: "John Smith",
    role: "ABC Company",
  },
  {
    logo: logo2,
    photo: cl2,
    title: "Expert Webflow and SEO Services: Excellent Work, Great Results.",
    text: "Working with Arik on my website redesign was a fantastic experience. He was able to take my vision and turn it into a beautiful and functional website. His attention to detail and creative approach is unmatched.",
    name: "John Smith",
    role: "ABC Company",
  },
  {
    logo: logo3,
    photo: cl3,
    title: "Professional, Collaborative Web Design Experience with Arik.",
    text: "I had the pleasure of working with Arik on a website development project and was blown away by his expertise and professionalism. He made the process seamless and delivered a website that exceeded our expectations.",
    name: "John Smith",
    role: "ABC Company",
  },
  {
    logo: logo4,
    photo: cl4,
    title: "Expertise in Web Design: Second to None with Arik.",
    text: "Arik is not only an exceptional web designer, but also a pleasure to work with. He took the time to understand my business and its unique needs, and created a website that perfectly represents my brand.",
    name: "David Kim",
    role: "Design Inc.",
  },
  {
    logo: logo5,
    photo: cl5,
    title: "Web Design and Content Solutions: Stand Out from the Crowd.",
    text: "Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.",
    name: "Emily Davis",
    role: "Greenway Industries",
  },
  {
    logo: logo6,
    photo: cl6,
    title: "High-Quality Web Design: Exceptional Attention to Detail with Arik.",
    text: "Arik's development services are top-notch. He is able to take complex ideas and turn them into functional, user-friendly websites. His attention to detail and commitment to customer satisfaction are unmatched.",
    name: "Ryan Chen",
    role: "Golden Gate Solutions",
  },
];

export default function Testimonials() {
  return (
    <section className="reviews" id="reviews">
      <div className="reviews__container">
        <Reveal className="reviews__top">
          <p className="reviews__ghost" aria-hidden="true">What My</p>
          <h2 className="reviews__title">What My Clients Say</h2>
          <p className="reviews__text">
            See what my clients have to say about working with me and the results I helped them achieve.
          </p>
        </Reveal>
        <div className="reviews__grid">
          {reviews.map((item, index) => (
            <Reveal className="reviews__card" key={`${item.title}-${index}`} delay={index * 70}>
              <img src={item.logo} alt="" className="reviews__logo" />
              <h3 className="reviews__card-title">{item.title}</h3>
              <p className="reviews__card-text">{item.text}</p>
              <div className="reviews__author">
                <img src={item.photo} alt={item.name} className="reviews__avatar" />
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
