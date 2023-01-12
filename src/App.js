import React from 'react';

import NavbarCopy from './components/NavbarCopy';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
import ProjectsAsCards from './components/ProjectsAsCards';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Interests from './components/Interests';
// import SkillsAsText from './components/SkillsAsText';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';

function App() {
  const containerRef = useRef(null);
  return (
    // <LocomotiveScrollProvider
    //   options={{
    //     smooth: true,
    //     tablet: {
    //       breakpoint: 0 // <---- Fixes The Issue 🎉
    //     }

    //     // ... all available Locomotive Scroll instance options
    //   }}
    //   watch={
    //     [
    //       //..all the dependencies you want to watch to update the scroll.
    //       //  Basicaly, you would want to watch page/location changes
    //       //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    //     ]
    //   }
    //   data-scroll
    //   containerRef={containerRef}
    // >
    <>
      <header>{/* <Navbar /> */}</header>
      <main data-scroll-container ref={containerRef}>
        <NavbarCopy />
        <Hero />
        <About />
        {/* <Skills /> */}
        <ProjectsAsCards />
        {/* <SkillsAsText /> */}
        {/* <Projects /> */}
        <Experience />
        <Interests />
        <Contact />
        <footer>
          <Footer />
        </footer>
      </main>
    </>
    // </LocomotiveScrollProvider>
  );
}
export default App;
