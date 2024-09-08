import React from 'react';

export const Navbar = ({ scrollToSection, sections }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="/">Malik Ibrar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home" onClick={() => scrollToSection(sections.homeRef)}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#awards" onClick={() => scrollToSection(sections.awardsRef)}>Awards</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={() => scrollToSection(sections.projectsRef)}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => scrollToSection(sections.contactRef)}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
