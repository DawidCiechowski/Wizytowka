import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';


const Projects = () => {


    const [projects, setProjects] = useState({});
    const request = "http://dawid-ciechowski.eu-west-2.elasticbeanstalk.com/api/v1/projects";
    const getProjects = async () => {
        const response = await fetch(request);
        const data = await response.json();
        setProjects(data);
    }

    useEffect(() => {
        getProjects();
    }, []);


    /* If call is empty return null otherwise return projects */
    if (typeof (projects._embedded) === 'undefined' || typeof (projects._embedded) === 'null') {
        return null;//<h1 style={{color:"white"}}>Loading...</h1>;
    } else {
        return (
            <section className="projects">
                {projects._embedded.projectList.map((project, index) => {

                    console.log(index);
                    return(
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.name}
                            intro={project.introduction}
                            technologies={project.technologies}
                        />
                )})}
            </section>
        )
    }
}

export default Projects;