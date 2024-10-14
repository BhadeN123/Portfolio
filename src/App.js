import './App.css';
import Navbar from '../src/components/Navbar/navbar.js';
import About from '../src/components/Hero/hero.js';
import Contact from '../src/components/Contact/contact.js';
import Footer from '../src/components/Footer/footer.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Skills from './components/Skills/skills.js';
import Experience from './components/Experience/experience.js';
import Education from './components/Education/education.js';
import Project from './components/Project/project.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Project /></div>
        <div id="education"><Education /></div>
        <div id="contact"><Contact /></div>
        <Footer/>
     {/* <Router>
     <Navbar/>
     <About/>
     <Skills/>
     <Experience/>
     <Education/>
     <Project/>
     <Contact/>
     <Footer/>
    
     <Routes>
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/project" element={<Project/>} />
     </Routes>
     </Router> */}
    </div>
  );
}

export default App;
