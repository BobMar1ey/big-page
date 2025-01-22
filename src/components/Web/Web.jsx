import React from 'react'
import one from '../../img/web/1.png'
import two from '../../img/web/2.png'
import three from '../../img/web/3.png'
import four from '../../img/web/4.png'
import five from '../../img/web/5.png'
import six from '../../img/web/6.png'
import btn from '../../img/web/btn.png'
import './Web.css'
export default function Web() {
  return (
    <section className="web">
        <div className="web__container">
            <div className="web__top-row">
                <a href="/#" className="web__top-link"><img src={one} alt="" className="web__top-img" /></a>
                <a href="/#" className="web__top-link"><img src={two} alt="" className="web__top-img" /></a>
                <a href="/#" className="web__top-link"><img src={three} alt="" className="web__top-img" /></a>
                <a href="/#" className="web__top-link"><img src={four} alt="" className="web__top-img" /></a>
                <a href="/#" className="web__top-link"><img src={five} alt="" className="web__top-img" /></a>
                <a href="/#" className="web__top-link"><img src={six} alt="" className="web__top-img" /></a>
            </div>
            <div className="web__bottom-row">
                <div className="web__botttom-item">
                    <span className="web__bottom-number">01</span>
                    <h2 className="web__bottom-title">Web design</h2>
                    <p className="web__bottom-text">Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.</p>
                    <a href="/#" className="web__bottom-button">About Webdesign</a>
                </div>
                <div className="web__botttom-item">
                    <span className="web__bottom-number">02</span>
                    <h2 className="web__bottom-title">Development</h2>
                    <p className="web__bottom-text">Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.</p>
                    <a href="/#" className="web__bottom-button">About Webdesign</a>
                </div>
                <div className="web__botttom-item">
                    <span className="web__bottom-number">03</span>
                    <h2 className="web__bottom-title">Content & Seo</h2>
                    <p className="web__bottom-text">Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.</p>
                    <a href="/#" className="web__bottom-button">About Webdesign</a>
                </div>
            </div>
        </div>
    </section>
  )
}
