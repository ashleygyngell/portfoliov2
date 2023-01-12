import React from 'react';
import moment from 'moment';

const duoLinguoStreak = moment().diff(moment('2021-11-27'), 'days');

function Interests() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="interests-wrapper" id="interests">
            <h1>
              <u>Interests</u>
            </h1>
            <br />
            <div className="interests-text">
              <div className="theatre" id="interest-section">
                <p>
                  I love theatre &amp; music, regularly attending music venues
                  &amp; The West End.
                </p>
              </div>
              <div className="sports" id="interest-section">
                <p>
                  On the weekends you can find me having a kickabout or playing
                  a frisbee game called bottle bash.
                </p>
              </div>
              <div className="languages" id="interest-section">
                <p>
                  I am also studying <strong>Spanish</strong> with daily
                  DuoLingo lessons. <strong>{duoLinguoStreak} days</strong> and
                  counting!
                </p>
              </div>
              <div className="cycling" id="interest-section">
                <p>
                  During the first lockdown, I built my own bike from scratch
                  &amp; plan to cycle from London to Amsterdam in 2023.
                </p>
              </div>
              {/* <div className="actor" id="experience-section">
                <img
                  id="experience-logo"
                  src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1653514333/bbc-logo.png"
                  alt="bbc-logo"
                />
                <h2>Actor</h2>
                <h4>Jun '16 - Mar '20</h4>

                <p>
                  Work includes: BBC&apos;s War &amp; Peace, Mastercard, Mars.
                </p>
                <p>
                  Developed my creative skills with a capacity to <br /> engage
                  &amp; connect with a live audience.
                </p>
                <p>
                  Crafted my ability to take direction &amp; deliver content{' '}
                  <br />
                  under the intense pressure of time sensitive, large scale
                  productions.
                </p>
              </div> */}
            </div>
          </section>
        }
      </div>
    </>
  );
}

export default Interests;
