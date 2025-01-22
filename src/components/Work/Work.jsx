import React from 'react'
import './Work.css'
import one from '../../img/work/1.png'
import two from '../../img/work/2.png'
import three from '../../img/work/3.png'
import four from '../../img/work/4.png'
export default function Work() {
  return (
    <section className="work">
        <div className="work__container">
            <div className="work__top-row">
                <h2 className="work__top-title">Selected Work</h2>
                <a href="/#" className="work__top-button">See all</a>
            </div>
            <div className="work__bottom-row">
                <div className="work__bottom-item">
                    <img src={one} alt="first_img" />
                    <div className="work__text-box">
                        <span className="work__name">Space</span>
                        <span className="work__design">Webdesign</span>
                    </div>
                </div>
                <div className="work__bottom-item">
                <img src={two} alt="second_img" />
                    <div className="work__text-box">
                        <span className="work__name">Nova</span>
                        <span className="work__design">Webdesign</span>
                    </div>
                </div>
                <div className="work__bottom-item">
                <img src={three} alt="third_img" />
                    <div className="work__text-box">
                        <span className="work__name">Sonic</span>
                        <span className="work__design">Webdesign</span>
                    </div>
                </div>
                <div className="work__bottom-item">
                <img src={four} alt="first_img" />
                    <div className="work__text-box">
                        <span className="work__name">Solar</span>
                        <span className="work__design">Webdesign</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
