import React, { useRef } from 'react';
import './App.css';
import { Awards } from './components/Awards';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Home2 } from './components/Home2';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const home2Ref = useRef(null);
  const awardsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Scroll target not found');
    }
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        sections={{ homeRef, home2Ref, awardsRef, projectsRef, contactRef }}
      />
        <div ref={home2Ref}>
        <Home2 />
      </div>
      <div ref={homeRef}>
        <Home />
      </div>
     
      <div ref={awardsRef}>
        <Awards />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default App;
