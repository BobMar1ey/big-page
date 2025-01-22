import React, { useState } from "react";
import "./Header.css";
import Logo from '../../img/header/logo.png'
export default function Header() {
  const [show, setShow] = useState(true)

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__label">
          <img src={Logo} alt="logo" />
        </div>
        <nav className="header__navigation">
          <ul className="header__list">
            <li className="header__item">
              <a href="/#" className="header__link">
                Services
              </a>
            </li>
            <li className="header__item">
              <a href="/#" className="header__link">
                Work
              </a>
            </li>
            <li className="header__item">
              <a href="/#" className="header__link">
                About
              </a>
            </li>
            <li className="header__item">
              <a href="/#" className="header__link">
                Blog
              </a>
            </li>
            <li className={`header__item ${show ? '' : 'active'}`}>
              <a onClick={() => setShow(!show)} href="/#" className="header__link">
                Pages
              </a>
            </li>
            <li className="header__item-big">
              <a href="/#" className="header__link-big">
                Let’s talk
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
