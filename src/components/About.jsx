import React from "react";
import aboutImg from "../../public/images/aboutImg.jpeg";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="header-bg">
          <div className="about-header">
            <div className="about-header__content">
              <h1>
                nice to meet you!
                <i className="twa twa-ribbon"></i>
                <br />
                i'm tithi, business analyst @
                <a target="_blank" href="https://business.meta.com/">
                  springer
                </a>
              </h1>
              <p>
                places i exist on the internet
                <i className="twa twa-computer"></i>
              </p>
              <ul className="links links--stack links--body">
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/ms_choudharain"
                  >
                    instagram
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://medium.com/@tithichoudhary">
                    medium
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/tithi-choudhary/"
                  >
                    linkedin
                  </a>
                </li>
              </ul>
              {/* <p>
                    <a target="_blank" href="mailto: joannecho.ux@gmail.com">
                        <i className="twa twa-star"></i> contact me
                    </a> for my resume!
                </p> */}
            </div>
            <div className="about-header__image">
              {/* <Image src={aboutImg} width={40} height={40} alt='tithi'/>  */}
              <img src={aboutImg.src} alt="joanne cho" />
            </div>
          </div>
          <div className="header-bg__pink"></div>
          <div className="header-bg__purple"></div>
        </div>
        <div className="divider">
          <i className="divider__icon twa twa-lg twa-ribbon"></i>
        </div>
      </div>

      <div className="container">
        <div className="about-body">
          <h2>
            a lil about me
            <i className="twa twa-cherries"></i>
          </h2>
          <h3>i'm a coffee-loving bookworm (ᴗ_ ᴗ。)ꕤ*.ﾟ</h3>
          <p>
            words are my playground, and i love crafting stories, poems, and
            thoughts that make people feel something. when i’m not lost in
            writing, you’ll find me doodling, watching k-dramas, or analyzing
            life like a true business analyst! ଘ(੭˃ᴗ˂)੭
          </p>
          <h3>i'm currently @ springer nature</h3>
          <p>
            untangling complex business problems and turning them into
            structured solutions! i am currently analyzing and optimizing
            workflows at
            <a
              target="_blank"
              style={{ margin: "0 6px" }}
              href="https://www.springernature.com/gp"
            >
              springer nature
            </a>
            to help teams make informed decisions and create meaningful impact.
            love connecting dots between data, people, and processes to make
            things a little smoother and a lot more efficient! (•ᴗ•)و
            <i className="twa twa-cloud"></i>
          </p>
          <h3>when i'm not analyzing or writing.....</h3>
          <p>
            my interests include getting lost in books with a cup of coffee ☕,
            scribbling poetry in random notebooks, and doodling when inspiration
            strikes. i love watching k-dramas & anime, exploring new cafés, and
            trying to resist buying *just one more* book. you can also find me
            binge-watching my favorite series, curating the perfect playlist, or
            dreaming about my next trip! (๑˃̵ᴗ˂̵)و ♡
            <i className="twa twa-smiling-face-with-halo"></i>
            <i className="twa twa-cherry-blossom"></i>i also write on
            <a href="https://medium.com/@tithichoudhary" target="_blank">
              medium
            </a>{" "}
            check out my latest blogs! ૮ ˶ᵔ ᵕ ᵔ˶ ა
          </p>
          <h3>some fun facts ٩(⸝⸝ᵕᴗᵕ⸝⸝)و ✧*.ﾟ</h3>

          <p>
            zodiac signs — libra sun,
            <i className="twa twa-sparkles"></i> according to {""}, my strengths
            are being "introspective, intuitive, versatile, ultra-sensitive,
            thoughtful and caring" <i className="twa twa-dizzy"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
