import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { HashLink } from 'react-router-hash-link';

function Projects() {
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
    <div id="projects">
        <h2>Work</h2>
        <HashLink className="link" to="/more-projects">View All</HashLink>
        <div className="projects">
        {projectsData.slice(0, 6).reduce((rows, project, index) => {
            if (index % 3 === 0) {
            rows.push([]);
            }
            rows[rows.length - 1].push(
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
            );
            return rows;
        }, []).map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
            {row}
            </div>
        ))}
        </div>
    </div>
  );
}

export default Projects;
