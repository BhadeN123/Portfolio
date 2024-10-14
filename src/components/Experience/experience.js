import React from 'react';
import '../Experience/experience.css'; // Ensure this file is created for styles

const experienceData = [
  {
    companyName: 'zensar Technologies',
    logo: 'https://th.bing.com/th?id=OIP.Ce72t5vdY3EqiDEyW2CD3gAAAA&w=212&h=159&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    duration: 'Nov 2022 - Present',
    designation:'Software Engineer',
    description: [
      '-Developed a MERN stack-based application for interview panel management, implementing role-based user interfaces with React.js to enhance user experiences for admins, users, and TA personnel.',
'-Contributed to internal tools development, addressing JavaScript-related bugs and ensuring smooth project execution.',
'-Implement T1 test cases using Karma, Sinon, and Chai. Gained familiarity with Azure build pipelines and YAML configuration while performing code quality checks using SonarQube.'
    ],
  },
  
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>My Experience</h2>
      <div className="experience-container">
        {experienceData.map((experience, index) => (
          <div key={index} className="experience-item">
            <div className="connector">
              {/* Draw the connecting line */}
              {/* {index > 0 && <div className="line"></div>}
              <div className={`circle ${index === 0 ? 'top-circle' : ''}`}></div> */}
            </div>
            <div className="experience-card">
              <div className="company-info">
                <img src={experience.logo} alt={`${experience.companyName} logo`} className="company-logo" />
                <div className="company-details">
                  <p className="company-name">{experience.companyName}</p>
                  <p className="designation">{experience.designation}</p>
                  <p className="duration">{experience.duration}</p>
                </div>
              </div>
              <div className="description">
                <ul>
                  {experience.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;