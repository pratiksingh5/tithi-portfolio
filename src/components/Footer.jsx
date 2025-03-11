import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__divider">
          <div className="divider">
            <i className="divider__icon twa twa-lg twa-sparkles"></i>
          </div>
        </div>
        <h3 className="footer__content">
          i'd love to chat about design, kdramas, or good food!
          <i className="twa twa-love-letter"></i>
        </h3>
        <ul className="links">
          <li>
            <a target="_blank" href="mailto: joannecho.ux@gmail.com">
              email
            </a>
          </li>
          <li>/</li>
          <li>
            <a target="_blank" href="https://www.instagram.com/joanne.cho/">
              instagram
            </a>
          </li>
          <li>/</li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/joannecho96/">
              linkedin
            </a>
          </li>
        </ul>
        {/* <p>designed by happiflower ✿ developed by besated</p> */}
      </div>
    </div>
  );
};

export default Footer;
