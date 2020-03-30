import React, { useContext } from 'react';

/** Contexts */
import ProjectContext from '../../context/projects/project-context';
import TaskContext from '../../context/tasks/task-context';

/** Component */
const Project = ({ data }) => {

    /** Get State Project Context */
    const 
        projectContext = useContext( ProjectContext ),           // Hace accesible los datos del State del Contexto
        { getSelectedProject } = projectContext,                 // Destructuring Context Provider
        taskContext = useContext( TaskContext ),                 // Hace accesible los datos del State del Contexto
        { getTasksByProject } = taskContext;                     // Destructuring Context Provider

    const getCurrentProject = projectId => {
        getSelectedProject( projectId );
        getTasksByProject( projectId );
    }

    return(
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => getCurrentProject( data .id ) }
            >{ data .name }</button>
        </li>
    );
}

export default Project;