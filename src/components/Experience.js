import React from 'react';
import bridgeLogo from '../assets/images/bridgelogo.png';

function Experience() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="experience-wrapper" id="experience">
            <h1>
              <u>Experience</u>
            </h1>

            <br />
            <div className="experience-text">
              <div className="bridge-family" id="experience-section">
                <div className="bridge-family-mediation">
                  <img
                    id="experience-logo"
                    src={bridgeLogo}
                    alt="Bridge Family Mediation Logo"
                  />
                  <h2>Bridge Family Mediation</h2>
                </div>
                <h4>Jun '22 - Nov '22</h4>
                <p>Freelance web developer for a divorce mediation company.</p>
                <p>
                  Designed using with <strong>Figma</strong> and built using{' '}
                  <strong>ReactJS</strong>
                </p>

                <p>Involved weekly zoom meetings and regular emails.</p>
              </div>
              <div className="generalassembly" id="experience-section">
                <div className="ga-header">
                  <img
                    id="experience-logo"
                    src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1653511975/general-assembly-logo.png"
                    alt="ga-logo"
                  />
                  <h2>General Assembly</h2>
                </div>
                <h4>Feb '22 - May '22</h4>
                <p>
                  12 Week <strong>(Full Time)</strong> Software Engineering
                  Bootcamp.
                </p>
                <p>
                  Developed my programming knowledge, especially
                  <strong> React.JS</strong> &amp; building{' '}
                  <strong> APIs</strong>.
                </p>

                <p>
                  Modeled &amp; stored data in<strong> SQL</strong> &amp;{' '}
                  <strong>noSQL</strong> databases.
                </p>

                <p>
                  Built four, full-stack apps both individually &amp; in groups.
                </p>

                <p>
                  Daily stand-ups, homeworks &amp; paired-coding challanges.
                </p>
              </div>

              <div className="socialfiltar" id="experience-section">
                <img
                  id="experience-logo"
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1653512101/socialfiiltar-logo.png"
                  alt="socialfilt.ar-logo"
                />
                <h2>Socialfilt.ar</h2>
                <h4>May '20 - May '21</h4>

                <p>
                  Created an augemented reality company utilising Meta&apos;s
                  SparkAR studio.
                </p>
                <p>
                  Delivered digital content for businesses during the covid
                  lockdown.
                </p>
              </div>
            </div>
          </section>
        }
      </div>
    </>
  );
}

export default Experience;
