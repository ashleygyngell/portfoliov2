import { React, useEffect } from 'react';
import { projects } from './ProjectsArray.js';

const filterSkills = [
  'Python',
  'PostgreSQL',
  'Django',
  'MongoDB',
  'Express',
  'ReactJS',
  'JavaScript',
  'Bulma',
  'SASS',
  'CSS',
  'HTML5'
];

let filteredProjects = [];

function ProjectsAsCards() {
  useEffect(() => {
    let hueGradient = 0;
    document.querySelectorAll('.card').forEach((el) => {
      hueGradient += 0;
      let bounds;
      function rotateToMouse(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
          x: leftX - bounds.width / 2,
          y: topY - bounds.height / 2
        };
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

        el.style.transform = `
      scale3d(1.18, 1.18, 1.18)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2.5}deg
      )
    `;

        el.querySelector('.glow').style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff85,
        #0000000f
      )
    `;
      }
      el.addEventListener('mouseenter', () => {
        bounds = el.getBoundingClientRect();
        document.addEventListener('mousemove', rotateToMouse);
        el.style.cursor = 'default';
      });

      el.addEventListener('mouseleave', () => {
        document.removeEventListener('mousemove', rotateToMouse);
        el.style.transform = '';
        el.style.background = '';
      });

      el.querySelector('.e6_40').style.filter = `hue-rotate(${hueGradient}deg)`;

      // if (el.classList.contains('is-flipped')) {
      //   el.removeEventListener('mousemove', rotateToMouse);
      // }
    });

    let filterArray = [];
    let blurArray = [];
    document.querySelectorAll('.skill-button').forEach((e) => {
      e.addEventListener('click', () => {
        if (!filterArray.includes(e.id)) {
          e.classList.add('skill-is-selected');
          e.classList.remove('skill-is-not-selected');
          filterArray.push(e.id);
        } else if (filterArray.includes(e.id)) {
          e.classList.remove('skill-is-selected');
          e.classList.add('skill-is-not-selected');
          filterArray.splice(filterArray.indexOf(e.id), 1);
        }
        document.querySelectorAll('.item').forEach((e) => {
          const cardToTarget = e.childNodes[1].firstChild.firstChild;
          const cardSkillsToTarget = e.childNodes[1].id.split(',');
          filterArray.every((r) => cardSkillsToTarget.includes(r));
          if (filterArray.every((r) => cardSkillsToTarget.includes(r))) {
            blurArray = [...new Set([...blurArray, ...cardSkillsToTarget])];
            cardToTarget.classList.remove('is-flipped');
            cardToTarget.classList.add('un-flipped');
          } else {
            cardToTarget.classList.add('is-flipped');
            cardToTarget.classList.remove('un-flipped');
            filteredProjects.push(e);
          }
        });
        let i = 0;
        filterSkills.forEach((e) => {
          const skillToTarget = document.querySelector(`#${e}`);
          const skillPokeballCSS = skillToTarget.childNodes[0].style;
          if (blurArray.includes(filterSkills[i])) {
            skillToTarget.classList.remove('not-selected');
            skillToTarget.classList.add('un-selected');
            skillPokeballCSS.display = 'none';
            skillToTarget.disabled = '';
          } else {
            skillToTarget.classList.add('not-selected');
            skillToTarget.classList.remove('un-selected');
            skillToTarget.disabled = 'true';
            skillPokeballCSS.display = 'flex';
          }
          i++;
        });
        blurArray = [];
        filteredProjects = [];
      });
    });
    const track = document.querySelector('.track');
    document.querySelector('.prev').addEventListener('click', (e) => {
      track.append(track.querySelector('.item:first-of-type'));
    });
    document.querySelector('.next').addEventListener('click', (e) => {
      track.prepend(track.querySelector('.item:last-of-type'));
    });
    let targetProjects = document.querySelector('.projects');

    if (
      navigator.userAgent.indexOf('Safari') !== -1 &&
      navigator.userAgent.indexOf('Chrome') === -1
    ) {
      targetProjects.classList.remove('fadeInForSafari-hidden');
      targetProjects.classList.add('fadeInForSafari');
    } else {
      targetProjects.classList.remove('fadeInForSafari-hidden');
      targetProjects.classList.add('fadeInUp3');
    }
  }, []);

  return (
    <>
      <div data-scroll-section>
        {
          <section className="projects fadeInForSafari-hidden " id="projects">
            <div className="viewport">
              <div className="track" id="track">
                {projects.data.length <= 7 ? (
                  projects.data.map((project, index) => (
                    <div className="item">
                      <div className="shadow"></div>
                      <div
                        key={index}
                        id={projects.data[index].allSkills}
                        className="card-main"
                      >
                        <div className="scene scene--cardF ">
                          <div
                            className="cardF card card__shine  "
                            data-rarity=""
                          >
                            <div className="cardF__face cardF__face--front  ">
                              <div className=" e17_30   " id="project-1">
                                <div
                                  className="e6_40"
                                  style={{
                                    backgroundImage: `url(${projects.data[index].backgroundImage})`
                                  }}
                                ></div>
                                <div className="e6_41">
                                  <a
                                    href={projects.data[index].websiteURL}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <div
                                      className="e6_42"
                                      style={{
                                        backgroundImage: `url(${projects.data[index].focusImage})`
                                      }}
                                    ></div>
                                  </a>
                                  <div className="e6_43"></div>
                                  <div className="e6_44"></div>
                                </div>
                                <div className="e6_45"></div>
                                <div className="e6_46"></div>
                                <span className="e6_47">
                                  {projects.data[index].name}
                                </span>
                                <span className="e6_48">
                                  {projects.data[index].breakdown}
                                </span>
                                <p className="e6_49">
                                  {projects.data[index].highlightTitle}
                                  <span id="e6_49b">
                                    {' '}
                                    {projects.data[index].highlight}
                                  </span>
                                </p>
                                <p className="e6_52">
                                  {projects.data[index].skills}
                                </p>
                                <span className="e6_53a">
                                  <span className="e6_53"></span>
                                </span>
                                <span className="e6_54">
                                  © {new Date().getFullYear()} Ashley Gyngell
                                </span>
                                <span className="e6_55">
                                  {projects.data[index].yearCreated} 1/1
                                </span>
                                <span className="e6_60">
                                  {projects.data[index].timeframeAndType}
                                </span>
                                <div className="e6_61"></div>
                                <div className="e6_62"></div>
                                <span className="e6_63">
                                  {projects.data[index].hoursTaken}
                                </span>
                                <span className="e6_64">
                                  {projects.data[index].category}
                                </span>
                                <a
                                  href={projects.data[index].githubURL}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <div id="github-1" className="github-1">
                                    <div className="github-2">
                                      {/* <div className="loader">
                                        <div class="loader-6 center">
                                          <span></span>
                                        </div>
                                      </div> */}
                                    </div>

                                    <div className="github-3"></div>
                                  </div>
                                </a>
                                <div className="react-1">
                                  <div
                                    className="react-2"
                                    style={{
                                      backgroundImage: `url(${projects.data[index].skillsImages[3]})`
                                    }}
                                  ></div>
                                  <div className="react-3"></div>
                                </div>
                                <div className="javascript-1">
                                  <div
                                    className="javascript-2"
                                    style={{
                                      backgroundImage: `url(${projects.data[index].skillsImages[2]})`
                                    }}
                                  ></div>
                                  <div className="javascript-3"></div>
                                </div>
                                <div className="css-1">
                                  <div
                                    className="css-2"
                                    style={{
                                      backgroundImage: `url(${projects.data[index].skillsImages[0]})`
                                    }}
                                  ></div>
                                  <div className="css-3"></div>
                                </div>

                                <div
                                  className="html5-1"
                                  style={{
                                    backgroundImage: `url(${projects.data[index].skillsImages[1]})`
                                  }}
                                >
                                  <div className="html5-2"></div>
                                </div>
                                <div className="blackdot-1"></div>
                              </div>
                              <div className="glow" />
                            </div>
                            <div className="cardF__face cardF__face--back"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No projects </div>
                )}
              </div>
            </div>
          </section>
        }
      </div>
      <div data-scroll-section>
        {
          <section className="skills" id="skills">
            <div className="scroll-button-wrapper">
              <button className="prev"></button>
              <button className="next"></button>
            </div>
            <div className="skills-button-wrapper">
              {filterSkills.length > 0 ? (
                filterSkills.map((skill, index) => (
                  <>
                    <span className="skill-button-container">
                      <div id="skill-button-sphere">
                        <button
                          className="skill-button un-selected "
                          id={skill}
                          key={index}
                        >
                          <div className="ball-line-container ">
                            <div className="ball-line-1 "></div>
                            <div className="ball-circle"> </div>
                            <div className="ball-line-2 "></div>
                          </div>
                        </button>
                      </div>
                      {skill}
                    </span>
                  </>
                ))
              ) : (
                <p>No Skills</p>
              )}
            </div>
          </section>
        }
      </div>
    </>
  );
}

export default ProjectsAsCards;
