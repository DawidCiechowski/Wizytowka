import React, { useState, useEffect } from 'react';
import Banner from './banner.jpg';
import './ProjectDescription.css';
import Projects from './Projects';


const ProjectDescription = ({ match }) => {

    const [project, setProject] = useState({});
    const request = "http://dawid-ciechowski.eu-west-2.elasticbeanstalk.com/api/v1/projects/" + match.params.id;
    const getProject = async () => {
        const response = await fetch(request);
        const data = await response.json();
        setProject(data);
    }

    useEffect(() => {
        getProject();
    }, []);


    if (typeof(project.technologies) === 'undefined' || typeof(project.technologies) === 'null') {
        return null;//<h1 style={{color:"white"}}>Loading...</h1>;
    } else {
        return (
            <section>
                <div className="banner">
                    <img src={Banner} alt="banner" />
                    <div className="project-tag">
                        <h1>{project.name}</h1>
                        <div className="project-description-technologies">
                            {project.technologies.map(technology => (
                                <h2>{technology}</h2>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="project-introduction">
                    <div className="introduction">
                        <h3>Introduction</h3>

                        <p>{project.introduction}</p>
                    </div>
                </div>
                <div className="project-description">
                    <div className="description">
                        <h3>Project Description</h3>
                        <p>{project.description}</p>
                    </div>
                </div>
            </section >
        );
    }
}

export default ProjectDescription;