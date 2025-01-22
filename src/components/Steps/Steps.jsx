import "./Steps.css";
import arrow from '../../img/Steps/arrow.png'
import React from "react";

export default function Steps() {
  return (
    <section className="steps">
      <div className="steps__container">
        <div className="steps__top-row">
          <h3 className="steps__subtitle">THe PRocess</h3>
          <h2 className="steps__title">Your Website <span>in 5 steps</span></h2>
          <p className="steps__text">
            Our process ensures that we create a website tailored to your
            business needs.
          </p>
        </div>
        <div className="steps__bottom-row">
          <div className="steps__bottom-column">
            <div className="steps__bottom-item">
                <div className="steps__bottom-time">2 Hours</div>
              <h4 className="steps__bottom-subtitle">lorem ipsum</h4>
              <h3 className="steps__bottom-title">Concept & STrategy</h3>
              <p className="steps__bottom-text">
                Together, we develop a strategy that successfully combines your
                goals with the needs of your target audience. Based on this
                concept, I create the first wireframes and an interactive
                prototype. This provides us with a very good impression of the
                website and the user interface.
              </p>
              <ul className="steps__bottom-list">
                <li className="steps__bottom-small-item">UX Design</li>
                <li className="steps__bottom-small-item">Wireframes</li>
                <li className="steps__bottom-small-item">
                  Interactive Prototype
                </li>
              </ul>
            </div>
            <div className="steps__bottom-item">
                <div className="steps__bottom-time">2 Hours</div>
              <h4 className="steps__bottom-subtitle">lorem ipsum</h4>
              <h3 className="steps__bottom-title">Concept & STrategy</h3>
              <p className="steps__bottom-text">
                Together, we develop a strategy that successfully combines your
                goals with the needs of your target audience. Based on this
                concept, I create the first wireframes and an interactive
                prototype. This provides us with a very good impression of the
                website and the user interface.
              </p>
              <ul className="steps__bottom-list">
                <li className="steps__bottom-small-item">UX Design</li>
                <li className="steps__bottom-small-item">Wireframes</li>
                <li className="steps__bottom-small-item">
                  Interactive Prototype
                </li>
              </ul>
            </div>
          </div>
          <div className="steps__bottom-column">
            <div className="steps__bottom-img-box">
            <img src={arrow} alt="" className="steps__bottom-img" />
            </div>
           
            <span className="steps__bottom-number">01</span>
            <span className="steps__bottom-number">02</span>
            <span className="steps__bottom-number">03</span>
            <span className="steps__bottom-number">04</span>
            <span className="steps__bottom-number">05</span>
          </div>
          <div className="steps__bottom-column">
            <div className="steps__bottom-item">
                <div className="steps__bottom-time">2 Hours</div>
              <h4 className="steps__bottom-subtitle">lorem ipsum</h4>
              <h3 className="steps__bottom-title">Concept & STrategy</h3>
              <p className="steps__bottom-text">
                Together, we develop a strategy that successfully combines your
                goals with the needs of your target audience. Based on this
                concept, I create the first wireframes and an interactive
                prototype. This provides us with a very good impression of the
                website and the user interface.
              </p>
              <ul className="steps__bottom-list">
                <li className="steps__bottom-small-item">UX Design</li>
                <li className="steps__bottom-small-item">Wireframes</li>
                <li className="steps__bottom-small-item">
                  Interactive Prototype
                </li>
              </ul>
            </div>
            <div className="steps__bottom-item">
                <div className="steps__bottom-time">2 Hours</div>
              <h4 className="steps__bottom-subtitle">lorem ipsum</h4>
              <h3 className="steps__bottom-title">Concept & STrategy</h3>
              <p className="steps__bottom-text">
                Together, we develop a strategy that successfully combines your
                goals with the needs of your target audience. Based on this
                concept, I create the first wireframes and an interactive
                prototype. This provides us with a very good impression of the
                website and the user interface.
              </p>
              <ul className="steps__bottom-list">
                <li className="steps__bottom-small-item">UX Design</li>
                <li className="steps__bottom-small-item">Wireframes</li>
                <li className="steps__bottom-small-item">
                  Interactive Prototype
                </li>
              </ul>
            </div>
            <div className="steps__bottom-item">
                <div className="steps__bottom-time">2 Hours</div>
              <h4 className="steps__bottom-subtitle">lorem ipsum</h4>
              <h3 className="steps__bottom-title">Concept & STrategy</h3>
              <p className="steps__bottom-text">
                Together, we develop a strategy that successfully combines your
                goals with the needs of your target audience. Based on this
                concept, I create the first wireframes and an interactive
                prototype. This provides us with a very good impression of the
                website and the user interface.
              </p>
              <ul className="steps__bottom-list">
                <li className="steps__bottom-small-item">UX Design</li>
                <li className="steps__bottom-small-item">Wireframes</li>
                <li className="steps__bottom-small-item">
                  Interactive Prototype
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
