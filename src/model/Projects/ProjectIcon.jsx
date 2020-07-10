import React from 'react';

function ProjectIcon({id, title, intro}) {
    return(
        <div>
            <h1>{title}</h1>
            <p>{intro}</p>
        </div>
    );
}

export default ProjectIcon;