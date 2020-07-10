import React, { useState, useEffect } from 'react';
import ProjectIcon from './ProjectIcon';


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


    return (
        <div>
            <CheckProjects projects={projects} />
        </div>
    );
}

function CheckProjects(props) {
    const projects = props.projects;

    if (typeof (projects._embedded) === 'undefined' || typeof (projects._embedded) === 'null') {
        return <h1>empty</h1>;
    } else {
        console.log(projects._embedded)
        console.log(projects._embedded.projectList[0].id);
        return (
            <div>
                {projects._embedded.projectList.map(project => (
                    <ProjectZ key={project.id} name={project.name} intro={project.introduction} description={project.description}
                    technologies={project.technologies} link={project.link} />
                ))}
            </div>
        )
    }
}

const ProjectZ = ({name, intro, description, technologies, link }) => {
    const stylez = {
        
    }
    return (
        <div style={{color:"white"}}>
            <h1>Nazwa:{name}</h1>

            <h1>Intro: {intro}</h1>
            <h1>Opis: {description}</h1>
            <h1>Technologie: <span style={{fontSize: "20px"}}>{technologies.map(tech => (
                <p>{tech}</p>
            ))}</span></h1>
            <h1>Link: {link}</h1>
            <br />
        </div>
    )
}

export default Projects;