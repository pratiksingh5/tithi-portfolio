import React from "react";
import Image from "next/image";
import Blog1 from "../../public/images/blog1.jpeg";
import Blog2 from "../../public/images/Blog2.jpeg";
import Blog3 from "../../public/images/blog3.webp";
import Blog4 from "../../public/images/blog4.webp";

const Blogs = () => {
  return (
    <div className="container">
      <p className="container__title" style={{ fontSize: "3vw" }}>
        &mdash; my Poems ✿
        <span className="container__subtitle">
          you can see all of my poems & blogs in the medium!
        </span>
      </p>
      <div className="projects hide-on-mobile">
        <div
          className="project project--indigo blog"

        >
          <div
            className="project__image"
            style={{ width: "45%"}}
          >
            <Image src={Blog1} alt="block in my chest" />
          </div>
          <div className="project__body" style={{ width: "40%" }}>
            <div className="project__overview">
              <div className="project__description">
                <h2>A Block In My Chest</h2>
                <p>I feel a block in my chest,</p>
                <p>Making me want to run away Maybe</p>
                <p> it could release this choke,</p>
                <p>And make my heart breathe again</p>
              </div>
              <div className="project__cta">
                <a
                  className="button button--indigo"
                  href="https://medium.com/@tithichoudhary/a-block-in-my-chest-53a4cee8d96c"
                  target="_blank"
                >
                  📖 Full Poem Here
                  <i className="arrow" data-feather="arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="project project--blue blog"

        >
          <div className="project__body" style={{ width: "48%" }}>
            <div className="project__overview">
              <div className="project__description">
                <h2>Unexpected</h2>
                <p>I never thought I could love someone this hard,</p>
                <p>Feels surreal to me at times,</p>
                <p> Because I used to be this person with guards high up,</p>
                <p>with a cold heart like those winter nights.</p>
              </div>
              <div className="project__cta">
                <a
                  className="button button--indigo"
                  href="https://medium.com/@tithichoudhary/unexpected-38d4327e87a1"
                  target="_blank"
                >
                  📖 Full Poem Here
                  <i className="arrow" data-feather="arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="project__image"
            style={{ width: "45%" }}
          >
            <Image src={Blog2} alt="block in my chest" />
          </div>
        </div>
        <div
          className="project project--pink blog"
        >
          <div
            className="project__image"
            style={{ width: "45%" }}
          >
            <Image src={Blog3} alt="block in my chest" />
          </div>
          <div className="project__body" style={{ width: "46%" }}>
            <div className="project__overview">
              <div className="project__description">
                <h2>Homebodies for New Years</h2>
                <p>As the clock ticks to welcome another New Year,</p>
                <p>And while the world spins in revelry and cheer,</p>
                <p> We sit in our cozy haven, a home for me and you,</p>
                <p>
                  To bid adieu to our past year’s journey, and embrace the new!
                </p>
              </div>
              <div className="project__cta">
                <a
                  className="button button--indigo"
                  href="https://medium.com/@tithichoudhary/homebodies-for-new-years-aeb8ed295338"
                  target="_blank"
                >
                  📖 Full Poem Here
                  <i className="arrow" data-feather="arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="project project--coral blog"

        >
          <div className="project__body" style={{ width: "40%" }}>
            <div className="project__overview">
              <div className="project__description">
                <h2>Love's Serenity</h2>
                <p>Trickling of the raindrops, </p>
                <p>along the windowsill.</p>
                <p> And there I was, lying next to him.</p>
              </div>
              <div className="project__cta">
                <a
                  className="button button--indigo"
                  href="https://medium.com/@tithichoudhary/loves-serenity-103c73797407"
                  target="_blank"
                >
                  📖 Full Poem Here
                  <i className="arrow" data-feather="arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="project__image"
            style={{ width: "45%" }}
          >
            <Image src={Blog4} alt="block in my chest" />
          </div>
        </div>
      </div>
      <div className="projects mobile-only">
        <div className="side-project side-project--indigo mobile-blog">
          <div className="side-project__header"></div>
          <div className="side-project__body">
            <div className="side-project__description">
              <div>
                <h2>A Block In My Chest</h2>
                <p>I feel a block in my chest,</p>
                <p>Making me want to run away Maybe</p>
                <p> it could release this choke,</p>
                <p>And make my heart breathe again</p>
              </div>
              <div>
                <div className="side-project__cta">
                  <a
                    className="button button--indigo"
                    href="https://medium.com/@tithichoudhary/a-block-in-my-chest-53a4cee8d96c"
                    target="_blank"
                  >
                    📖 Full Poem Here
                    <i className="arrow" data-feather="arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-project side-project--blue mobile-blog">
          <div className="side-project__header"></div>
          <div className="side-project__body">
            <div className="side-project__description">
              <div>
                <h2>Unexpected</h2>
                <p>I never thought I could love someone this hard,</p>
                <p>Feels surreal to me at times,</p>
                <p> Because I used to be this person with guards high up,</p>
                <p>with a cold heart like those winter nights.</p>
              </div>
              <div>
                <div className="side-project__cta">
                  <a
                    className="button button--indigo"
                    href="https://medium.com/@tithichoudhary/unexpected-38d4327e87a1"
                    target="_blank"
                  >
                    📖 Full Poem Here
                    <i className="arrow" data-feather="arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-project side-project--pink mobile-blog">
          <div className="side-project__header"></div>
          <div className="side-project__body">
            <div className="side-project__description">
              <div>
                <h2>Homebodies for New Years</h2>
                <p>As the clock ticks to welcome another New Year,</p>
                <p>And while the world spins in revelry and cheer,</p>
                <p> We sit in our cozy haven, a home for me and you,</p>
                <p>
                  To bid adieu to our past year’s journey, and embrace the new!
                </p>
              </div>
              <div>
                <div className="side-project__cta">
                  <a
                    className="button button--indigo"
                    href="https://medium.com/@tithichoudhary/homebodies-for-new-years-aeb8ed295338"
                    target="_blank"
                  >
                    📖 Full Poem Here
                    <i className="arrow" data-feather="arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-project side-project--coral mobile-blog">
          <div className="side-project__header"></div>
          <div className="side-project__body">
            <div className="side-project__description">
              <div>
                <h2>Love's Serenity</h2>
                <p>Trickling of the raindrops, </p>
                <p>along the windowsill.</p>
                <p> And there I was, lying next to him.</p>
              </div>
              <div>
                <div className="side-project__cta">
                  <a
                    className="button button--indigo"
                    href="https://medium.com/@tithichoudhary/loves-serenity-103c73797407"
                    target="_blank"
                  >
                    📖 Full Poem Here
                    <i className="arrow" data-feather="arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider">
        <i className="divider__icon twa twa-lg twa-ribbon"></i>
      </div>
    </div>
  );
};

export default Blogs;
