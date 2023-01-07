import React from 'react';

function Hero() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="hero-section" id="hero">
            {/* <img
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="1"
              data-scroll-position="left"
              data-scroll-target="#about"
              // className=" fadeInUp1"
              id="ashley-gyngell-avatar"
              src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1652981470/ashley-gyngell-avatar1.png"
              alt="ashley-gyngell-avatar"
            /> */}

            <h1 className="name-title fadeInUp2">ASHLEY GYNGELL </h1>

            {/* <h2
              className="role-title fadeInUp2"
              // data-scroll
              // data-scroll-direction="horizontal"
              // data-scroll-speed="3"
            >
              Junior Software Engineer
            </h2> */}
            {/* <h6
              className="role-title fadeInUp4"

              // data-scroll
              // data-scroll-direction="horizontal"
              // data-scroll-speed="3"
            >
              <em>(Site in development)</em>
            </h6> */}
          </section>
        }
      </div>
    </>
  );
}

export default Hero;
