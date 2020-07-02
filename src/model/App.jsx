import React from 'react';
import './App.css';
import AboutMe from './About/AboutMe';
import SkillBar from './SkillBar/SkillBar';

function App() {
    return (      
        <body>
            <div className="app">
                <AboutMe />
                <SkillBar />
            </div>
        </body>
    );
}

export default App; 