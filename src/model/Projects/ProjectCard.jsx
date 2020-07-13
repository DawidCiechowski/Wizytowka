import React from 'react';
import './Projects.css';
import TopLeft from './top-left.png';
import TopRight from './top-right.png';
import BottomLeft from './bottom-left.png';
import BottomRight from './bottom-right.png';
import { Link } from 'react-router-dom';
import ProjectDescription from './ProjectDescription';

function ProjectCard({ id, title, intro, technologies }) {


    return (
        <section className="project-card-section">
            <div className="details">
                <h1>{title}</h1>
                <h2>Introduction:</h2>
                <p>{intro}</p>
                <h2>Technologies:</h2>
                <ul>
                    {technologies.map(technology => (
                        <li>{technology}</li>
                    ))}
                </ul>
            </div>
            <Link to={'/projects/' + id} className="photo-link">
                <div className="photo">
                    <img src={TopLeft} alt="model" className="top-left" />
                    <img src={TopRight} alt="model" className="top-right" />
                    <img src={BottomLeft} alt="model" className="bottom-left" />
                    <img src={BottomRight} alt="model" className="bottom-right" />
                </div>
            </Link>
        </section>
    );
}

export default ProjectCard;