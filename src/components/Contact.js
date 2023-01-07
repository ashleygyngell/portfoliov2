import React from 'react';

function Contact() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="contact-wrapper" id="contact">
            <h1>
              <u>Contact</u>
            </h1>
            <br />
            <div className="contact-icons">
              <a
                href="https://github.com/ashleygyngell"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-3x fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/ashleygyngell/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-3x fa-linkedin"></i>
              </a>
              <a
                href="mailto:ashleygyngell@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid  fa-3x fa-envelope"></i>
              </a>
            </div>
          </section>
        }
      </div>
    </>
  );
}

export default Contact;
