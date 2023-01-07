import React from 'react';

function About() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="about-wrapper" id="about">
            <div className="brand-statement fadeInUp2">
              <p>
                I am a Junior Software Engineer with a background in theatre and
                film. During the pandemic I created an AR filter for Instagram
                and found the thrill of practical problem solving translated
                perfectly to coding. As a result, I decided to enrol in a full
                time bootcamp at General Assembly, and make the leap from script
                to JavaScript.
              </p>
              <br />
              <p>
                I found the creative collaboration on the course incredibly
                rewarding and am extremely motivated by the challenges and
                possibilities this career change presents. Building on my skills
                in the fast paced world of software engineering is very
                appealing to me and is why I am looking for opportunities to
                grow as part of a positive, dynamic and collaborative team.
              </p>{' '}
            </div>
          </section>
        }
      </div>
    </>
  );
}

export default About;
