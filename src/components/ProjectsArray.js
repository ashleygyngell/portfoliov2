import focusImage1 from '../assets/images/focusImage_1.png';
import focusImage2 from '../assets/images/focusImage_2.png';
import focusImage3 from '../assets/images/focusImage_3.png';
import focusImage4 from '../assets/images/focusImage_4.png';
import focusImage5 from '../assets/images/focusImage_5.png';
import focusImage6 from '../assets/images/focusImage_6.png';
import focusImage7 from '../assets/images/focusImage_8.png';
import backImage1 from '../assets/images/backImage_1.png';
import backImage2 from '../assets/images/backImage_2.png';

import PostgreSQL from '../assets/skills/postgresql.png';
import SCSS from '../assets/skills/sass.png';
import ReactJS from '../assets/skills/react.png';
import JavaScript from '../assets/skills/javascript.png';
import HTML5 from '../assets/skills/html.png';
import Python from '../assets/skills/python.png';
import MongoDB from '../assets/skills/mongodb.png';
import Bulma from '../assets/skills/bulma.png';
import CSS from '../assets/skills/css.png';
import Django from '../assets/skills/django.png';
import Github from '../assets/images/github.png';

export const projects = {
  total: 7,
  data: [
    {
      id: 1,
      category: 'Static Website',
      name: 'This Website',
      githubURL: 'https://github.com/ashleygyngell/port-folio',
      websiteURL: 'https://www.ashleygyngell.co.uk',
      highlightTitle: '3D',
      highlight:
        'Hover over each project and the div will transform according to the relative position of the mouse.',
      breakdown: (
        <p className="e6_48b">
          Built in <strong> ReactJS</strong> and hosted on{' '}
          <strong>Netlify</strong>. I deigned all the cards in{' '}
          <strong>Figma</strong> and exported the data as HTML using a plugin.
          In the project section, users can filter for applictions built with
          selected languages
        </p>
      ),
      skills: ['JavaScript ', 'ReactJS ', 'SASS ', 'HTML5 '],
      allSkills: ['JavaScript', 'ReactJS', 'SASS', 'HTML5'],
      skillsImages: [JavaScript, SCSS, ReactJS, HTML5],
      hoursTaken: '50+ hrs',
      timeframeAndType: ` May '22 - Present | Solo Project   `,
      yearCreated: '2022',
      backgroundImage: backImage2,
      focusImage: focusImage4
    },
    {
      id: 2,
      category: 'Static Website',
      name: 'Bridge Family Mediation',
      githubURL:
        'https://github.com/ashleygyngell/bridge-family-mediation-development',
      websiteURL: 'https://www.bridgefamilymediation.co.uk',
      highlightTitle: 'Mobile Responsive',
      highlight:
        'If screen width is within a certain width, display the appropriate layout.',
      breakdown: (
        <p className="e6_48b">
          Designed in <strong>Figma</strong> and built in
          <strong> ReactJS</strong>, with a <strong>Bulma CSS</strong>{' '}
          framework. Hosted on <strong>Netlify</strong> for client demonstration
          before deployment to Hostinger. Involved weekly zoom meetings with the
          client to develop and build components on request.
        </p>
      ),
      skills: ['JavaScript ', 'ReactJS ', 'SASS ', 'HTML5 '],
      allSkills: ['JavaScript', 'ReactJS', 'SASS', 'HTML5', 'Bulma'],
      skillsImages: [ReactJS, SCSS, JavaScript, HTML5],
      hoursTaken: '50+ hrs',
      timeframeAndType: `Jun '22 - Dec '22 | Freelance Work `,
      yearCreated: '2022',
      backgroundImage: backImage2,
      focusImage: focusImage1
    },
    {
      id: 3,
      category: 'Full-Stack App',
      name: 'Chat',
      githubURL: 'https://github.com/ashleygyngell/chatapp-frontend',
      websiteURL: 'https://chatwithchatapp.netlify.app/',
      highlightTitle: 'JWT',
      highlight:
        'The app features register and login functionality using JSON Web Tokens (JWT). ',
      breakdown: (
        <p className="e6_48b">
          An <strong>ReactJS</strong> based messaging app built with a{' '}
          <strong>Python </strong>
          backend, using a <strong>Django</strong> & an{' '}
          <strong>PostgreSQL</strong> database. Users are able to create
          accouts, send/recieve messages and join chatrooms. Design takes
          inspiration from iMessage, with a focus on profile images.
        </p>
      ),
      skills: ['Python ', 'PostgreSQL ', 'Django ', 'ReactJS'],
      allSkills: [
        'JavaScript',
        'ReactJS',
        'SASS',
        'HTML5',
        'Bulma',
        'Python',
        'PostgreSQL',
        'Django',
        'Express'
      ],
      skillsImages: [PostgreSQL, ReactJS, Django, Python],
      hoursTaken: '50+ hrs',
      timeframeAndType: ` Sept '22 | Solo Project   `,
      yearCreated: '2022',
      backgroundImage: backImage1,
      focusImage: focusImage2
    },
    {
      id: 4,
      category: 'Full-Stack App',
      name: 'Lyricle',
      githubURL: 'https://github.com/ashleygyngell/lyricle-frontend',
      websiteURL: 'https://playlyricle.com/',
      highlightTitle: 'Genius API',
      highlight:
        'Consumes an external API from Genius.com, demanding a wealth of string manipulation & automation.',
      breakdown: (
        <p className="e6_48b">
          'A spin-off of the viral Wordle game, rooted in{' '}
          <strong>Python</strong>, <strong>Django</strong> and a{' '}
          <strong>PostgreSQL </strong>
          database. Lyricle features register/login functionality where users
          can create and join leagues.
        </p>
      ),
      skills: ['Python ', 'PostgreSQL ', 'Django ', 'ReactJS'],
      allSkills: [
        'Python',
        'PostgreSQL',
        'Django',
        'Express',
        'JavaScript',
        'ReactJS',
        'SASS',
        'HTML5',
        'Bulma'
      ],
      skillsImages: [PostgreSQL, ReactJS, Django, Python],
      hoursTaken: '50+ hrs',
      timeframeAndType: ` Jun '22 - Dec '22 | Solo Project `,
      yearCreated: '2022',
      backgroundImage: backImage1,
      focusImage: focusImage3
    },
    {
      id: 5,
      category: 'Full-Stack App',
      name: 'Discover.ly',
      githubURL: 'https://github.com/ashleygyngell/discover.ly_client',
      websiteURL: 'https://discoverly.netlify.app/',
      highlightTitle: 'React Text Transition',
      highlight:
        'Discover.ly incorporates a React plugin that animates the homepage text after loading.',
      breakdown: (
        <p className="e6_48b">
          This app features complex <strong>CRUD</strong> operations like
          posting and commenting, including user registration and{' '}
          <strong>JWT </strong>
          authenication. Discoverly is served from a <strong>
            MongoDB
          </strong>{' '}
          database using <strong>Express</strong>.
        </p>
      ),
      skills: ['MongoDB ', 'JavaScript ', 'ReactJS ', 'NodeJS '],
      allSkills: [
        'JavaScript',
        'ReactJS',
        'SASS',
        'HTML5',
        'MongoDB',
        'NodeJS',
        'Bulma',
        'Express'
      ],
      skillsImages: [JavaScript, MongoDB, ReactJS, HTML5],
      hoursTaken: '30+ hrs',
      timeframeAndType: ` March '22 | Group Project (3)`,
      yearCreated: '2022',
      backgroundImage: backImage1,
      focusImage: focusImage5
    },
    {
      id: 6,
      category: 'Dynamic Website',
      name: 'CryptMo CAsh',
      githubURL: 'https://github.com/ashleygyngell/CryptMo-CAsh',
      websiteURL: 'https://cryptmo-cash.netlify.app/',
      highlightTitle: 'Conversion',
      highlight: `Convert fiat currency to crypto currency using live data from CoinMarketCap's API`,
      breakdown: (
        <p className="e6_48b">
          A Dynamic web application that provides accurate information about the
          top 100 cryptocurrencies using a <strong>REST API</strong>. Built as
          part of a 2 day hackathon Project at General Assembly's Bootcamp, it
          utilises the basics of a <strong>Bulma CSS</strong> framework.
        </p>
      ),
      skills: ['JavaScript ', 'ReactJS ', 'Bulma ', 'HTML5'],
      allSkills: ['JavaScript', 'ReactJS', 'HTML5', 'Bulma'],
      skillsImages: [JavaScript, Bulma, ReactJS, HTML5],
      hoursTaken: '10+ hrs',
      timeframeAndType: `March '22 | Paired Project (2)`,
      yearCreated: '2022',
      backgroundImage: backImage2,
      focusImage: focusImage6
    },
    {
      id: 7,
      category: 'Static Website',
      name: `'SEI'per Mario-Man`,
      githubURL: 'https://github.com/ashleygyngell/SEI-PER-MARIO-MAN',
      websiteURL: 'https://ashleygyngell.github.io/SEI-PER-MARIO-MAN/',
      highlightTitle: 'Dark Mode',
      highlight: `Complete the first level by collecting two stars and torch. This unlocks 'World 1-2' which is played with the lights out!`,
      breakdown: (
        <p className="e6_48b">
          A grid based <strong>JavaScript</strong> game that combines two of my
          favorite childhood games; Super Mario Bros & Pac Man. Built as part of
          General Assembly's Bootcamp, the aim of the project was to design the
          logic for the 'ghost hunt'.
        </p>
      ),
      skills: ['JavaScript ', 'HTM5 ', 'CSS ', 'Github'],
      allSkills: ['JavaScript', 'HTML5', 'CSS'],
      skillsImages: [JavaScript, CSS, HTML5, Github],
      hoursTaken: '15+ hrs',
      timeframeAndType: `March '22 | Paired Project (2)`,
      yearCreated: '2022',
      backgroundImage: backImage2,
      focusImage: focusImage7
    }
  ]
};
