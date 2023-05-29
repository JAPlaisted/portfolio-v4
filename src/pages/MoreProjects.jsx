import React, { useEffect, useState } from 'react';
import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
import GitHubIcon from '@mui/icons-material/GitHub';

function MoreProjects() {
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
      fetch('/data/projects.json')
        .then((response) => response.json())
        .then((data) => setProjectsData(data.projects))
        .catch((error) => {
          console.error('Error fetching projects data:', error);
        });
    }, []);

    return (
        <div className='container'>
            <Navbar/>
            <div id="more-projects">
                <h2>All Work</h2>
                <div className="projects">
                {projectsData.map((project, index) => (
                    <div className="media" data-aos="fade-right" key={index}>
                        <a href={project['project-link']} target="_blank" rel="noopener noreferrer">
                        <img src={project['project-image']} alt="project logo" />
                        <h4>{project['project-name']}</h4>
                        <p>{project['project-description']}</p>
                        </a>
                        <a href={project['github-link']} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon style={{ fontSize: 'x-large' }} />
                        </a>
                    </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default MoreProjects;