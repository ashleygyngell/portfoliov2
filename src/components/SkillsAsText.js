import React from 'react';

function Skills() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="skills-wrapper" id="skills">
            <h1>SKILLS</h1>

            <div className="skills-text">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p> <p>TypeScript</p> <p>React</p>
              <p>Python</p>
              <p>Django</p>
              <p>PostgreSQL</p>
              <p>Node.js</p>
              <p>npm</p>
              <p>Express</p>
              <p>MongoDB</p>
              <p>GitHub</p>
              <p>Heroku</p>
              <p>Netlify</p>
              <p>VSCode</p>
              <p>Git</p>
              <p>Sass</p>
              <p>Bulma</p>
              <p>Slack</p>{' '}
            </div>

            {/* <h1 className="project-title">PROJECTS</h1> */}
          </section>
        }
      </div>
    </>
  );
}

export default Skills;
