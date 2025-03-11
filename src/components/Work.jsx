import React from "react";

const Work = () => {
  return (
    <div className="container">
      <p className="container__title">
        &mdash; my blogs ✿
        <span className="container__subtitle">
          you can see all of my blogs in the medium!
        </span>
      </p>
      <div className="projects hide-on-mobile">
        <div className="project project--indigo">
          <div className="project__image">
            <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*qiI10EyJE6Hp5qUgarhedg.jpeg" alt="paypal partner" />
          </div>
          <div className="project__body">
            <div className="project__overview">
              <div className="project__description">
                <h2>Empowering Meta Businesses</h2>
                <p>
                  Currently designing experiences that empower merchants to grow
                  their business with Meta!
                </p>
              </div>
              <div className="project__cta">
                <a
                  className="button button--indigo"
                  href="https://www.facebook.com/business/business-messaging"
                  target="_blank"
                >
                  Business Messaging
                  <i className="arrow" data-feather="arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project project--blue">
          <div className="project__image">
            <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*hSL8DalTIj5_8_rqJ13UzQ.jpeg" alt="paypal partner" />
          </div>
          <div className="project__body">
            <div className="project__overview">
              <div className="project__description">
                <h2>Designing for PayPal Partners</h2>
                <p>
                  Partner Portal empowers partner merchants to manage and grow
                  their business through a self-serve experience.
                </p>
                <p>
                  Worked collaboratively alongside a cross-functional team of
                  product, research, engineering, and content to help drive the
                  design of this portal from start to launch.
                </p>
              </div>
              <div className="project__cta">
                <a className="button button--blue" href="/projects/partners">
                  Partner Portal
                  <i className="arrow" data-feather="arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project project--pink">
          <div className="project__image">
            <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*V3xSAgUmd9QDjCZaDHrvYQ.jpeg" alt="paypal partner" />
          </div>
          <div className="project__body">
            <div className="project__overview">
              <div className="project__description">
                <h2>Streamlining Account Management</h2>
                <p>
                  Streamlined the management experience for merchants by
                  allowing them to link their various accounts and have a
                  consolidated view to manage their business holistically.
                </p>
                <p>
                  Delivered the end-to-end design and pushed the team to rethink
                  account management for merchants as a whole.
                </p>
              </div>
              <div className="project__cta">
                <a className="button button--pink" href="/projects/accounts">
                  Account Linking
                  <i className="arrow" data-feather="arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project project--coral">
          <div className="project__image">
            <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*dSw_ANEgT7v4REnklqBiNA.jpeg" alt="paypal partner" />
          </div>
          <div className="project__body">
            <div className="project__overview">
              <div className="project__description">
                <h2>Designing for PayPal Vault</h2>
                <p>
                  Vault migration enables merchants to seamlessly import their
                  customer information over from a different payment processor
                  in a self-serve way, with no interruption to their business.
                </p>
                <p>
                  Led the design of this self-serve experience that reduced the
                  time it takes to import data from several weeks to days.
                </p>
              </div>
              <div className="project__cta">
                <a className="button button--coral" href="projects/vault">
                  Vault Migration
                  <i className="arrow" data-feather="arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects mobile-only">
        <div className="side-project side-project--indigo">
          <div className="side-project__header"></div>
          <div className="side-project__body">
            <div className="side-project__description">
              <div>
                <h2>Empowering Meta Businesses</h2>
                <p>
                  Currently designing experiences that empower merchants to grow
                  their business with Meta!
                </p>
              </div>
              <div>
                <div className="side-project__cta">
                  <a
                    className="button button--indigo"
                    href="https://www.facebook.com/business/business-messaging"
                    target="_blank"
                  >
                    Business Messaging
                    <i className="arrow" data-feather="arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-project side-project--blue">
          <div className="side-project__header"></div>
          <div className="side-project__body">
            <div className="side-project__description">
              <div>
                <h2>Designing for PayPal Partners</h2>
                <p>
                  Partner Portal empowers partner merchants to manage and grow
                  their business through a self-serve experience.
                </p>
              </div>
              <div>
                <div className="side-project__cta">
                  <a className="button button--blue" href="/projects/partners">
                    Partner Portal
                    <i className="arrow" data-feather="arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-project side-project--pink">
          <div className="side-project__header"></div>
          <div className="side-project__body">
            <div className="side-project__description">
              <div>
                <h2>Streamlining Account Management</h2>
                <p>
                  Streamlined the management experience for merchants by
                  allowing them to link their various accounts and have a
                  consolidated view to manage their business holistically.
                </p>
              </div>
              <div>
                <div className="side-project__cta">
                  <a className="button button--pink" href="/projects/accounts">
                    Account Linking
                    <i className="arrow" data-feather="arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-project side-project--coral">
          <div className="side-project__header"></div>
          <div className="side-project__body">
            <div className="side-project__description">
              <div>
                <h2>Designing for PayPal Vault</h2>
                <p>
                  Vault migration enables merchants to seamlessly import their
                  customer information over from a different payment processor
                  in a self-serve way, with no interruption to their business.
                </p>
              </div>
              <div>
                <div className="side-project__cta">
                  <a className="button button--coral" href="projects/vault">
                    Vault Migration
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

export default Work;
