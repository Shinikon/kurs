import React, { useState } from "react";
import logoSvg from "../assets/img/logo.svg";
import "../scss/components/_header.scss";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      />

      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img src={logoSvg} alt="logo" />
            <div>
              <h2>Vertex Visions</h2>
            </div>
          </div>
        </Link>

        <ul className="header__nav">
          <li>
            <Link to="/">
              <h3>Главная</h3>
            </Link>
          </li>
          <li>
            <Link to="/order">
              <h3>Заказ</h3>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <h3>Портфолио</h3>
            </Link>
          </li>
          <li>
            <Link to="/contacts">
              <h3>Контакты</h3>
            </Link>
          </li>
        </ul>

        <div
          className={`header__burger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {menuOpen && (
            <span>
              <h3>Меню</h3>
            </span>
          )}
          <div></div>
          <div></div>
          <div></div>
        </div>

        {menuOpen && (
          <ul className="header__nav-burger">
            <li>
              <Link to="/">
                <h3>Главная</h3>
              </Link>
            </li>
            <li>
              <Link to="/order">
                <h3>Заказ</h3>
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <h3>Портфолио</h3>
              </Link>
            </li>
            <li>
              <Link to="/contacts">
                <h3>Контакты</h3>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
