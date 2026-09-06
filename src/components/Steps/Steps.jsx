import "./Steps.css";
import arrow from "../../img/Steps/arrow.png";
import React from "react";
import Reveal from "../Reveal/Reveal";

const steps = [
  {
    time: "2 Hours",
    kicker: "Do we match?",
    title: "Discovery Call",
    text: "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
    points: ["We get to know each other better", "Determine how I can best assist you", "Understand the goals you have for your website"],
  },
  {
    time: "5 Hours",
    kicker: "We need a plan",
    title: "Concept & Strategy",
    text: "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype.",
    points: ["UX Design", "Wireframes", "Interactive Prototype"],
  },
  {
    time: "1 Week",
    kicker: "Some magic",
    title: "Web Design",
    text: "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand, your audience, and a memorable user experience.",
    points: ["High-end UI", "Brand-led visuals", "Responsive layouts"],
  },
  {
    time: "2 Weeks",
    kicker: "More magic",
    title: "Development",
    text: "In this step, we breathe life into your new high-end design. You receive a custom-built website with a modular system, CMS-ready structure, and animations that set you apart.",
    points: ["Custom build", "CMS structure", "Motion & interactions"],
  },
  {
    time: "1 Hour",
    kicker: "Ready to go",
    title: "Website Onboarding",
    text: "In a personal workshop I show you how to make changes quickly and easily. You also get short video guides so you can edit the site without a complicated backend.",
    points: ["Live walkthrough", "Video tutorials", "Handover & support"],
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
