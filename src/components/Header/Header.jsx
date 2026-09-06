import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../img/header/logo.png";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
];

const PAGE_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("is-locked", menuOpen);
    return () => document.body.classList.remove("is-locked");
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
        setPagesOpen(false);
      }
    };
    const onScroll = () => setPagesOpen(false);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setPagesOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <a href="#hero" className="header__label" onClick={closeMenu}>
          <img src={Logo} alt="arik." />
        </a>

        <nav className={`header__navigation ${menuOpen ? "is-open" : ""}`}>
          <ul className="header__list">
            {NAV_LINKS.map((link) => (
              <li className="header__item" key={link.href}>
                <a href={link.href} className="header__link" onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className={`header__item header__item--pages ${pagesOpen ? "is-open" : ""}`}>
              <button
                type="button"
                className="header__link header__pages-btn"
                aria-expanded={pagesOpen}
                aria-haspopup="true"
                onClick={() => setPagesOpen((open) => !open)}
              >
                Pages
              </button>
              <ul className="header__dropdown">
                {PAGE_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={closeMenu}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="header__item-big">
              <a href="#contact" className="header__link-big" onClick={closeMenu}>
                Let’s talk
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className={`header__burger ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
