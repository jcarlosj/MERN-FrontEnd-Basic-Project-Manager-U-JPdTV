import React from 'react';

/** Components */
import Project from './Project';

const ProjectList = () => {

    // TO DO: Change static data for dynamic data
    const projects = [
        { id: 1, name: 'Virtual Shopping' },
        { id: 2, name: 'Learning Python & Django' },
        { id: 3, name: 'Personal Web Page' }
    ];

    return(
        <ul className="project-list">
            { projects .map( ( project ) => (
                <Project 
                    key={ project .id }
                    data={ project }
                />
            ))}
        </ul>
    );
}

export default ProjectList;