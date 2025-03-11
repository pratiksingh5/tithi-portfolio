import React from "react";

const Header = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar" id="navbar">
        <div className="navbar__logo">
          <a href="/">
            <span className="navbar__name">tithi choudhary</span>
            <i className="twa twa-tulip"></i>
          </a>
        </div>
        <ul className="navbar__links">
          <li className="navbar__link">
            <a className="active" href="/">
              work
            </a>
          </li>
          <li>/</li>
          <li className="navbar__link">
            <a className="" href="/about">
              about
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
