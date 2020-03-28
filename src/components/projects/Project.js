import React, { useContext } from 'react';

/** Contexts */
import ProjectContext from '../../context/projects/project-context';

/** Component */
const Project = ({ data }) => {

    /** Get State Project Context */
    const 
        projectContext = useContext( ProjectContext ),           // Hace accesible los datos del State del Contexto
        { getSelectedProject } = projectContext;                 // Destructuring Context Provider

    return(
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => getSelectedProject( data .id ) }
            >{ data .name }</button>
        </li>
    );
}

export default Project;