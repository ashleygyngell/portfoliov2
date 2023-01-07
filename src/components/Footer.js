import React from 'react';

function Footer() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="footer">
            <p>ASHLEY GYNGELL &copy; {new Date().getFullYear()}</p>
          </section>
        }
      </div>
    </>
  );
}

export default Footer;
