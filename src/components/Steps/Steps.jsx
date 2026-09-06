import "./Steps.css";
import arrow from "../../img/Steps/arrow.png";
import React from "react";
import Reveal from "../Reveal/Reveal";

const steps = [
  {
    time: "8 Hours",
    kicker: "Do we Match?",
    title: "Discovery Call",
    text: "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
    points: ["We get to know each other better", "Determine how I can best assist you", "Understand the goals you have for your website"],
  },
  {
    time: "1 Week",
    kicker: "Then We Plan",
    title: "Concept & Strategy",
    text: "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.",
    points: ["UX Design", "Wireframes", "Interactive Prototype"],
  },
  {
    time: "1 week",
    kicker: "Some Magic",
    title: "Web Design",
    text: "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.",
    points: ["High-end web design tailored to your brand", "Interactive prototype of the design"],
  },
  {
    time: "2 week",
    kicker: "More Magic",
    title: "Development",
    text: "In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.",
    points: ["Custom framer website", "Modular web design systems", "CMS integration"],
  },
  {
    time: "2 Hours",
    kicker: "Ready to go",
    title: "Website Onboarding",
    text: "In a personal Framer workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized Framer video tutorials that you can access at any time.",
    points: ["Personal workshop", "Video tutorials", "Easy self-edits"],
  },
];

function StepCard({ step }) {
  return (
    <article className="steps__bottom-item">
      <div className="steps__bottom-time">{step.time}</div>
      <h4 className="steps__bottom-subtitle">{step.kicker}</h4>
      <h3 className="steps__bottom-title">{step.title}</h3>
      <p className="steps__bottom-text">{step.text}</p>
      <ul className="steps__bottom-list">
        {step.points.map((point) => (
          <li className="steps__bottom-small-item" key={point}>
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Steps() {
  const leftSteps = [steps[1], steps[3]];
  const rightSteps = [steps[0], steps[2], steps[4]];

  return (
    <section className="steps" id="process">
      <div className="steps__container">
        <Reveal className="steps__top-row">
          <h3 className="steps__subtitle">The Process</h3>
          <h2 className="steps__title">
            Your Website <span>in 5 steps</span>
          </h2>
          <p className="steps__text">
            Our process ensures that we create a website tailored to your business needs.
          </p>
        </Reveal>

        <div className="steps__bottom-row steps__bottom-row--desktop">
          <div className="steps__bottom-column">
            {leftSteps.map((step) => (
              <Reveal key={step.title}>
                <StepCard step={step} />
              </Reveal>
            ))}
          </div>
          <div className="steps__bottom-column steps__bottom-column--track">
            <div className="steps__bottom-img-box">
              <img src={arrow} alt="" className="steps__bottom-img" />
            </div>
            {steps.map((_, index) => (
              <span className="steps__bottom-number" key={index}>
                {String(index + 1).padStart(2, "0")}
              </span>
            ))}
          </div>
          <div className="steps__bottom-column">
            {rightSteps.map((step) => (
              <Reveal key={step.title}>
                <StepCard step={step} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="steps__mobile">
          {steps.map((step, index) => (
            <Reveal key={step.title} className="steps__mobile-row" delay={index * 80}>
              <span className="steps__bottom-number">{String(index + 1).padStart(2, "0")}</span>
              <StepCard step={step} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
