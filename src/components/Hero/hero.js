// import react from 'react';
// import myImage from '../../../src/utils/Images/nikita.png';
// import '../Hero/hero.css';
// import resumePDF from '../../utils/Resume/NikitaBhade_SoftwareEngineer_2yrs.pdf';

// function About() {
//   return (
//     <div className="About">
//      <div className='leftContainer'>
//           <h1>Hi, I am <br/> Nikita Bhade</h1>
//           <h3>I am Software Developer</h3>
//           <h4>I am motivated and versatile individual, always egar to take new challanges.With passion for learning I am dedicated to deliver high quality results.With positive attitute and gowth midset I am ready to make meaningful contribution</h4>
//           <a href={resumePDF} target="_blank" rel="noopener noreferrer">
//           <button>Check Resume</button>
//         </a>
//      </div>
//      <div className='rightContainer'>
//      <img src={myImage} alt="Description of the image" />
//      </div>
//     </div>
//   );
// }

// export default About;
import React from 'react';
import myImage from '../../../src/utils/Images/image.png';
import '../Hero/hero.css';
import resumePDF from '../../utils/Resume/NikitaBhade_SoftwareEngineer_2yrs.pdf';

function About() {
  return (
    <div className="About"  id="about">
      <div className='leftContainer fade-in'>
        <h1>Hi, I am <br/> Nikita Bhade</h1>
        <h3>I am a Software Developer</h3>
        <h4>I am a motivated and versatile individual, always eager to take new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and growth mindset, I am ready to make meaningful contributions.</h4>
        <a href={resumePDF} target="_blank" rel="noopener noreferrer">
          <button className="fade-in">Check Resume</button>
        </a>
      </div>
      <div className='rightContainer fade-in'>
        <img src={myImage} alt="Nikita Bhade" />
      </div>
    </div>
  );
}

export default About;
