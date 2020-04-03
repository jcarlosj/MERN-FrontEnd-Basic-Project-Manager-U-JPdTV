import React, { useContext, useEffect } from 'react';

/** Libraries */
import { CSSTransition, TransitionGroup } from 'react-transition-group';    

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
    if( projects .length === 0 ) return <p>No hay proyectos, comienza ahora creando uno.</p>;

    return(
        <ul className="project-list">
            <TransitionGroup>
                {/* TO FIX: Warning: findDOMNode is deprecated in StrictMode */}
                { projects .map( ( project ) => (
                    <CSSTransition
                        key={ project .id }
                        timeout={ 400 }
                        classNames="project"
                    >
                        <Project 
                            data={ project }
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ProjectList;