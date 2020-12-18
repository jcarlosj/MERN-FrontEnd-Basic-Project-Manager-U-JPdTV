import React, { useContext, useEffect } from 'react';

/** Libraries */
import { CSSTransition, TransitionGroup } from 'react-transition-group';    

/** Components */
import Project from './Project';

/** Contexts */
import ProjectContext from '../../context/projects/project-context';
import AlertContext from '../../context/alerts/alert-context';

const ProjectList = () => {

    /** Get State Project Context */
    const 
        projectContext = useContext( ProjectContext ),           // Hace accesible los datos del State del Contexto
        { projects, message, getProjects } = projectContext,     // Destructuring Context Provider
        alertContext = useContext( AlertContext ),               // Hace accesible los datos del State del Contexto
        { alert, showAlert } = alertContext;                     // Destructuring Context Provider

    /** Hook: Tracking State 
     * Get projects when the component load
    */
    useEffect( () => {
        console .log( 'Component ProjectList has loaded!' );

        // Si hay un mensaje de error
        if( message ) {
            showAlert( message .text, message .class );
        }

        getProjects();
    }, [ message ] );

    /** Validate if data exists */
    if( projects .length === 0 ) return <p>No hay proyectos, comienza ahora creando uno.</p>;

    return(
        <ul 
            className="project-list"
            data-cy="project-list"
        >
            { alert
                ?   <div className={`message ${ alert.category }`}>
                        { alert .message }
                    </div>
                :   null
            }
            <TransitionGroup>
                {/* TO FIX: Warning: findDOMNode is deprecated in StrictMode */}
                { projects .map( ( project ) => (
                    <CSSTransition
                        key={ project ._id }
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