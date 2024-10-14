import React from 'react';
import '../Skills/skills.css'; // You can create this CSS file to style the skills component

const skillsData = [
  {
    name: 'HTML',
    img: 'data:image/jpeg;base64,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', // Replace with actual image URL
  },
  {
    name: 'CSS',
    img: 'https://th.bing.com/th?id=OIP.NccvSu6Gut1HXGwUTBKYKgHaH3&w=242&h=257&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Replace with actual image URL
  },
  {
    name: 'JavaScript',
    img: 'https://www.bing.com/th?id=OIP.enmrdVqi-spRDaUaxYXPxgHaHa&w=89&h=92&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Replace with actual image URL
  },
  {
    name: 'React JS',
    img: 'data:image/jpeg;base64,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', // Replace with actual image URL
  },
];

const Skills = () => {
  return (
    <section className="skills"  id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.img} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;