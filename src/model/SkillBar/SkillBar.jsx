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
                    <li className="csharp skillbar-li">C#</li>
                </ul>
            </div>
        );
    }
}

export default SkillBar;