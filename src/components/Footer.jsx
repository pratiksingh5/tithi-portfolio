import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__divider">
        <div className="divider">
        <i className="divider__icon twa twa-lg twa-ribbon"></i>
      </div>
        </div>
        <h3 className="footer__content">
        i'm passionate about anime, K-dramas, writing, and crafting compelling stories!
          <i className="twa twa-love-letter"></i>
        </h3>
        <ul className="links" style={{marginTop:"1rem"}}>
          <li>
            <a target="_blank" href="mailto: tithichoudhary@gmail.com">
              email
            </a>
          </li>
          <li>/</li>
          <li>
            <a target="_blank" href="https://www.instagram.com/ms_choudharain">
              instagram
            </a>
          </li>
          <li>/</li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/tithi-choudhary/">
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
