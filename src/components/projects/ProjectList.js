import React, { useContext } from 'react';

/** Components */
import Project from './Project';

/** Context */
import ProjectContext from '../../context/projects/project-context';

const ProjectList = () => {

    /** Get State Project Context */
    const 
        projectContext = useContext( ProjectContext ),           // Hace accesible los datos del State del Contexto
        { projects } = projectContext;                   // Destructuring Context Provider

    /** Validate if data exists */
    if( projects .length === 0 ) return null;

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