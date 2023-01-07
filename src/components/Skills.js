import React from 'react';

// window.onload = function () {
//   const skillsTransition = document.querySelector('#skills');
//   skillsTransition.onmouseover = function (e) {
//     document.body.style.background = '#0a0c64';
//     document.body.style.color = 'green';
//     document.body.style.transition = 'all 0.2s ease-in';
//   };
//   skillsTransition.onmouseout = function (e) {
//     document.body.style.background = '#FFFFFF';
//     document.body.style.color = '#000000';
//     document.body.style.transition = 'all 0.2s ease-in';
//   };
// };
function Skills() {
  return (
    <>
      <div data-scroll-section>
        {
          <section className="skills-wrapper" id="skills">
            <h1>SKILLS</h1>
            <div className="skills-grid">
              <div>
                <div className="skill">
                  <i className="devicon-html5-plain"></i>
                  <p className="">HTML</p>
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-css3-plain"></i>
                  <p>CSS</p>
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-javascript-plain"></i> <p>JavaScript</p>{' '}
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-typescript-plain"></i>
                  <p>TypeScript</p>{' '}
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-react-original"></i> <p>React</p>
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-python-plain"></i> <p>Python</p>
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-django-plain"></i> <p>Django</p>{' '}
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-postgresql-plain"></i> <p>PostgreSQL</p>{' '}
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-nodejs-plain"></i> <p>Node.js</p>{' '}
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-npm-original-wordmark"></i> <p>npm</p>
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-express-original"></i> <p>Express</p>{' '}
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-mongodb-plain"></i> <p>MongoDB</p>{' '}
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-github-original"></i> <p>GitHub</p>
                </div>
              </div>

              <div>
                <div className="skill">
                  <i className="devicon-heroku-original"></i> <p>Heroku</p>{' '}
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="iconify" data-icon="simple-icons:netlify"></i>{' '}
                  <p>Netlify</p>{' '}
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-vscode-plain"></i> <p>VSCode</p>{' '}
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-git-plain"></i> <p>Git</p>
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-sass-plain"></i> <p>Sass</p>
                </div>
              </div>
              <div>
                <div className="skill">
                  <i className="devicon-bulma-plain"></i> <p>Bulma</p>
                </div>
              </div>

              <div>
                <div className="skill">
                  <i className="devicon-slack-plain"></i>
                  <p>Slack</p>{' '}
                </div>
              </div>
            </div>

            {/* <h1 className="project-title">PROJECTS</h1> */}
          </section>
        }
      </div>
    </>
  );
}

export default Skills;
