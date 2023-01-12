import { React, useEffect } from 'react';

function Navbar() {
  useEffect(() => {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');
    const navLink = document.querySelectorAll('.nav-link');

    burger.addEventListener('click', () => {
      navbar.classList.toggle('nav-open');
      burger.classList.toggle('burger-open');
      navLink.forEach((link) => {
        link.classList.toggle('nav-link-open');
      });
    });
  });

  function burgerClose() {
    document.querySelector('.navbar').classList.toggle('nav-open');
    document.querySelector('.burger').classList.toggle('burger-open');
  }

  return (
    <>
      <div data-scroll-section>
        {
          <section className="navbar-wrapper fadeInUp4" id="navbar-start">
            <ul className="navbar-items">
              <li>
                <a href="#about" data-scroll-to>
                  ABOUT
                </a>
              </li>

              <li>
                <a href="#projects" data-scroll-to>
                  PROJECTS
                </a>
              </li>
              <li>
                <a href="#skills" data-scroll-to>
                  SKILLS
                </a>
              </li>
              <li>
                <a href="#experience" data-scroll-to>
                  EXPERIENCE
                </a>
              </li>

              <li>
                <a href="#interests" data-scroll-to>
                  INTERESTS
                </a>
              </li>

              <li>
                <div className="contact contact2">
                  <a href="#contact" data-scroll-to>
                    CONTACT
                  </a>
                  <div className="animated-avatar-wrapper">
                    <div id="avatar-body" className="avatar-body  ">
                      <div id="avatar-arm" className="avatar-arm "></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="burger">
              <i className="fas fa-bars fa-2x"></i>
            </div>

            <nav className="navbar">
              <ul className="nav-links">
                <li className="nav-link" onClick={burgerClose}>
                  <a href="#about">About</a>
                </li>
                <li className="nav-link" onClick={burgerClose}>
                  <a href="#projects">Projects</a>
                </li>
                <li className="nav-link" onClick={burgerClose}>
                  <a href="#skills">Skills</a>
                </li>
                <li className="nav-link">
                  <a href="#experience">Experience</a>
                </li>
                <li className="nav-link">
                  <a href="#interests">Interests</a>
                </li>
                <li className="nav-link">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </section>
        }
      </div>
    </>
  );
}

export default Navbar;
