import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me">
                <h1>ABOUT ME</h1>
                <div>
                    <h2>Hello</h2>
                    <br/>
                    <p>My name is Dawid Ciechowski, I'm 23 year-old master's computer science graduate mostly specialising in Java and Python
                        programming. I've lived in England for 10 years, since 2010, where I've studied since 2015 at Leeds Beckett 
                        University, majoring in MEng Computer Science. My interest in computing and programming emerged from computer 
                        games, since I had a high-level of interest in how they were made, which pushed me towards programming, starting
                        with Visual Basic - due to it's easy to grasp syntax - and Java, as most universities were using it as a teaching
                        tool.
                        <br/>
                        <br/>
                        I've been part of numerous projects, including - but not limited to - working on Machine learning model, for statistical
                        and contextualised predictions of stock data, using previous stock information and social media/articles. Android application
                        for visualisation of the known asteroids with the use of NASA API. Personal projects operating with APIs and creating them,
                        game development, etc. More specific information can be found in Projects section.
                    </p>
                </div>
                
            </div>
        );
    }
}

export default AboutMe;