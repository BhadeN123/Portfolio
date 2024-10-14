import React, { useState } from 'react';
import './project.css';

// Sample project data
const projectsData = {
    reactjs: [
       
        {
            id: 2,
            title: "Interview buddy App",
            description: "Developed an Interview Buddy application using React and Firebase, designed to assist users in preparing for interviews. Features include a clean and intuitive user interface with language selection and a comprehensive list of interview questions. Implemented user authentication with login and signup functionalities, along with a Take a Test/ option for users to assess their interview readiness. The app leverages Firebase for real-time data storage and user management, enhancing the overall user experience.",
            image: "https://th.bing.com/th/id/OIP.VzaB6XZdlH2pONNPDG1QJwHaD4?w=301&h=180&c=7&r=0&o=5&pid=1.7" ,
            githubUrl:'https://github.com/BhadeN123/InterviewBuddy',
            projecturl:''

        },
        {
            id: 3,
            title: "Portfolio",
            description: "Developed a personal portfolio website using React.js to showcase my skills, projects, and professional experiences. The website features a responsive design with an intuitive navigation layout, including sections such as About, Skills, Experience, Projects, Education, and Contact. Implemented smooth scrolling and interactive elements to enhance user experience. ",
            image: "https://th.bing.com/th/id/OIP.heGWsFSN26KY_os7Lnvm1gHaEK?w=283&h=180&c=7&r=0&o=5&pid=1.7" ,// replace with actual image URL
            githubUrl:'https://github.com/BhadeN123/Portfolio',
             projecturl:''
        },
        {
            id: 1,
            title: "Netflix",
            description: "This is a description for JavaScript project 1.",
            image: "https://th.bing.com/th?id=OIP.AK6U_jX96M3WhF4sVwmVrgHaEK&w=164&h=104&c=7&bgcl=579b75&r=0&o=6&pid=13.1://www.bing.com/th?id=OIF.FLjOyiWeZ1cHFMNLhNzJ6Q&w=164&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" ,
            githubUrl:'https://github.com/BhadeN123/Netflix',
            projecturl:'https://netflix-clone-16e3e.web.app/'
        },
    ],
    javascript: [
        {
            id: 1,
            title: "Break Breaker",
            description: "Developed a responsive and engaging brick-breaker game using pure JavaScript logic, leveraging mathematical calculations to simulate the game's physics. The game features a score system, lives, and timer, providing an immersive experience for the user.",
            image: "https://th.bing.com/th/id/OIP.E2zVaeEdgTqeU7_2m_GC6QHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7" ,
            githubUrl:'https://github.com/BhadeN123/Brick-Breaker',
             projecturl:''
        },
        {
            id: 2,
            title: "Dron Toy",
            description: "-Developed a drone game that allows users to control a drone to navigate through grid, attack enemy targets, and move around the grid. The game provides real-time feedback to the user about the drone's current position.",
            image: "https://www.bing.com/th?id=OIP.sBI3rr_hju_tCwjDcuhwVgHaEK&w=180&h=101&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" ,
            githubUrl:'https://github.com/BhadeN123/Drone',
            projecturl:'https://codepen.io/Nikita7878/pen/OJeBboY'
        }
    ]
};

const ProjectTabs = () => {
    const [activeTab, setActiveTab] = useState('javascript');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const renderProjects = () => {
        return projectsData[activeTab].map(project => (
            <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <h3 className='project-title'>{project.title}</h3>
                <button onClick={() => window.open(project.githubUrl, "_blank")}>Project code</button><br/>
                <div className='projectlink'><a href={project.projecturl}>Project URL</a></div>
                <p className='project-description'>{project.description}</p>
                
            </div>
        ));
    };

    return (
        <div className="project-tabs"  id="project">
            <h2>Projects</h2>
            <div className="tabs">
                <button onClick={() => handleTabChange('javascript')} className={activeTab === 'javascript' ? 'active' : ''}>JavaScript</button>
                <button onClick={() => handleTabChange('reactjs')} className={activeTab === 'reactjs' ? 'active' : ''}>React JS</button>
            </div>
            <div className="projects">
                {renderProjects()}
            </div>
        </div>
    );
};

export default ProjectTabs;