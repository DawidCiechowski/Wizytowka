import React from 'react';
import './SkillBar.css';


class SkillBar extends React.Component {
    render() {
        return(
            <div className="skillbar">
                <h1>SKILL SET</h1>
                <ul>
                    <li className="java skillbar-li">Java</li>
                    <li className="python skillbar-li">Python</li>
                    <li className="springboot skillbar-li">Spring Boot</li>
                    <li className="html skillbar-li">HTML</li>
                    <li className="react skillbar-li">React</li>
                    <li className="css skillbar-li">CSS</li>
                    <li className="csharp skillbar-li">C#</li>
                    <li className="flutter skillbar-li">Flutter</li>
                </ul>
            </div>
        );
    }
}

export default SkillBar;