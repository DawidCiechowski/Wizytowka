import React from 'react';
import './Projects.css';
import TopLeft from './top-left.png';
import TopRight from './top-right.png';
import BottomLeft from './bottom-left.png';
import BottomRight from './bottom-right.png';
import {useHistory} from 'react-router-dom';

function ProjectCard({ id, title, intro, technologies }) {

    const history = useHistory();

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
            <div className="photo" onClick={() => history.push('/projects/' + id)}>
                <img src={TopLeft} alt="model" className="top-left" />
                <img src={TopRight} alt="model" className="top-right" />
                <img src={BottomLeft} alt="model" className="bottom-left" />
                <img src={BottomRight} alt="model" className="bottom-right" />
            </div>
        </section>
    );
}

export default ProjectCard;