import React from 'react';
import '../Education/education.css'; // Ensure this file is created for styles

const educationData = [
  {
    institutionName: 'vishwakarma Institute of Information Technology,Pune',
    logo: 'https://th.bing.com/th?id=OIP.ATFuW-DAL5QXZtjJwRsfpgAAAA&w=188&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    duration: 'Aug 2018 - May 2022',
    Grade:'9.32 CGPA',
    degree: 'Bachelor of  Computer Science',
    info: ''
  },
  {
    institutionName: 'Agarkar Jr college, Akola',
    logo: 'https://via.placeholder.com/50?text=Logo2',
    duration: 'june 2016 - May 2018',
    degree: 'Science',
    Grade:'78%',
    info:''
  },
  {
    institutionName: 'Bharat Vidyalaya, Akola',
    logo: 'https://via.placeholder.com/50?text=Logo2',
    duration: 'june 2015 - May 2016',
    degree: 'SSC',
    Grade:'94%',
    info:''
  },
];

const Education = () => {
  return (
    <section className="education"  id="education">
      <h2>My Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
           <div className="connector">
              <div className="line"></div> {/* Connector line */}
              <div className="dot"></div> {/* Dot connector */}
            </div>
            <div className="education-card">
              <div className="institution-info">
                <img src={edu.logo} alt={`${edu.institutionName} logo`} className="institution-logo" />
                <div className="institution-details">
                  <p className="intitute-name">{edu.institutionName}</p>
                  <p className="degree">{edu.degree}</p>
                  <p className="duration">{edu.duration}</p>
                  <p className="Percentage/GGPA">Grade-{edu.Grade}</p>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;