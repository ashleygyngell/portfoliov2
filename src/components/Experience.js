import React from 'react';

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
              <div className="generalassembly">
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
                  12 Week, <strong>(Full Time)</strong> Software Engineering
                  Bootcamp.
                </p>
                <p>
                  Furthered my programming knowledge, especially with
                  <strong> JavaScript, React.js,</strong>&amp; external
                  <strong> APIs</strong>.
                </p>

                <p>
                  Modeled &amp; Stored data in<strong> SQL</strong> &amp;{' '}
                  <strong>noSQL</strong> databases.
                </p>

                <p>Four full-stack apps built individually &amp; paired.</p>

                <p>
                  Daily stand-ups, online lessons, labs, paired-coding &amp;
                  daily homeworks
                </p>
              </div>

              <div className="socialfiltar">
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
                <p>Delivered digital content for businesses during lockdown.</p>
              </div>

              <div className="actor">
                <img
                  id="experience-logo"
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1653514333/bbc-logo.png"
                  alt="bbc-logo"
                />
                <h2>Actor</h2>
                <h4>Jun '16 - Mar '20</h4>

                <p>
                  Work includes: BBC&apos;s War &amp; Peace, Mastercard, Orange,
                  Mars, Arts Theatre, Arcola Theatre.
                </p>
                <p>
                  Developed my creative &amp; empathy skills with a capacity to
                  engage &amp; connect in front of a live audience.
                </p>
                <p>
                  Crafted my ability to take direction &amp; deliver content
                  under the extreme pressure of big studio sets &amp; time
                  sensitive operations.
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
