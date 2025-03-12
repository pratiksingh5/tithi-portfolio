import React from "react";
import ribbon from "../../public/images/ribbon.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container">
      <div className="header-bg">
        <div className="header">
          <div className="side-project side-project--header">
            <div className="side-project__header">
              <i className="twa twa-ribbon twa-lg"></i>
            </div>
            <div className="side-project__body">
              <div className="side-project__description">
                <h1>
                  hi, i'm
                  <a className="header__name" href="/about">
                    tithi
                  </a>
                  !<i className="twa twa-tulip"></i>
                </h1>
                <h2>
                  business analyst by day,
                  <br className="hide-on-mobile" />
                  kdrama enthusiast by night{" "}
                  <i className="twa twa-sparkles"></i>
                </h2>
                <p>
                  as a business analyst and book lover, I love using insight and
                  empathy to create meaningful experiences!
                </p>
              </div>
              <div className="side-project__ribbon hide-on-mobile">
                <Image src={ribbon} alt="rrr" />
              </div>
            </div>
          </div>
        </div>
        <div className="header-bg__pink"></div>
        <div className="header-bg__purple"></div>
      </div>
      <div className="divider">
        <i className="divider__icon twa twa-lg twa-ribbon"></i>
      </div>
    </div>
  );
};

export default Hero;
