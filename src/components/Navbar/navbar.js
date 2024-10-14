import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar"  id="navbar">
      <div className="logo">Portfolio</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </button>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <ul>
          {/* <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/skills" activeClassName="active">Skills</NavLink></li>
          <li><NavLink to="/experience" activeClassName="active">Experience</NavLink></li>
          <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
          <li><NavLink to="/education" activeClassName="active">Education</NavLink></li> */}
        <li><button onClick={() => scrollTo('about')}>About</button></li>
        <li><button onClick={() => scrollTo('skills')}>Skills</button></li>
        <li><button onClick={() => scrollTo('experience')}>Experience</button></li>
        <li><button onClick={() => scrollTo('projects')}>Projects</button></li>
        <li><button onClick={() => scrollTo('education')}>Education</button></li>
        <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
        
        <li className="github">
        <a href="https://github.com/BhadeN123" target="_blank" rel="noopener noreferrer">
          <button>GitHub Profile</button>
        </a>
      </li>
      </ul>
      </div>
      
    </nav>
  );
}

export default Navbar;