import React from 'react';
import './AboutMe.css';
import {useHistory} from 'react-router-dom';


function AboutMe() {
    return (

        <div>
            <AboutMeBiography />
            <AboutMeEducation />
            <AboutMeProgramming />
            <AboutMeProjects />
        </div>
    );
}


function AboutMeBiography() {
    return (
        <div className="about-me">
            <h1>Biography</h1>
            <div className="bio">
                <h3>Hello</h3>
                <br/>
                <p> My name is <span className="word-style">Dawid Ciechowski</span>, I'm 23 year-old software developer mostly 
                    specialising in <span className="word-style">Java</span> and <span className="word-style">Python</span> programming. I've been
                    living in England since late 2010, where I've finished my education at master's degree in <span className="word-style">
                    Computer Science</span>. I'm Polish by descent, and am capable of communicating at high-level in both languages <span className="word-style">
                    Polish and English.</span> I'm highly ambitious and motivated to improve my skills as developer, mostly creating my own
                    random software from scratch and doing coding challenges in my spare time (there is also time for a bit of gaming and 
                    gym). 
                </p>
            </div>
        </div>
    );
}

function AboutMeEducation() {
    return (
        <div className="education">
            <h1>Education</h1>
            <div>
                <h3>Leeds Beckett University 09/2015 - 06/2020</h3>
                <br/>
                <p>Degree: <span className="word-style">Master of Engineering Computer Science</span></p>
            </div>
            <br/>
            <div>
                <h3>Notre Dame Sixth Form College 09/2013-06-2015</h3>
                <br/>
                <p>A-Levels: <span className="word-style">Computing,</span> Law, Classival Civilisations</p>
            </div>
        </div>
    );
}

function AboutMeProgramming() {
    return (
        <div className="programming">
            <h1>Programming Languages</h1>
            <br/>
            <div>
                <h3>Main</h3>
                <p><span className="word-style">Java & Python</span></p>
            </div>
            <br/>
            <div>
                <h3>Secondary</h3>
                <p><span className="word-style">HTML, CSS & JavaScript with React</span></p>
            </div>
            <br/>
            <div>
                <h3>Additional with Some Experience</h3>
                <p><span className="word-style">C# & Flutter</span></p>
            </div>
        </div>
    );
}

function AboutMeProjects() {
    let history = useHistory();

    const projectLink = () => {
        history.push("/projects");
    }
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div>
                <p>Projects</p>
            </div>
        </div>
    );
}

export default AboutMe;