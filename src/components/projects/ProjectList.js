import React, { useContext, useEffect } from 'react';

/** Components */
import Project from './Project';

/** Context */
import ProjectContext from '../../context/projects/project-context';

const ProjectList = () => {

    /** Get State Project Context */
    const 
        projectContext = useContext( ProjectContext ),           // Hace accesible los datos del State del Contexto
        { projects, getApiProjects } = projectContext;           // Destructuring Context Provider

    /** Hook: Tracking State 
     * Get projects when the component load
    */
    useEffect( () => {
        console .log( 'Component ProjectList has loaded!' );
        getApiProjects();
    }, [] );

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