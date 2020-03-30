import React, { useContext } from 'react';

/** Contexts */
import ProjectContext from '../../context/projects/project-context';

/** Component */
const NewAndEditTask = () => {

    /** Get State Project Context */
    const 
        projectContext = useContext( ProjectContext ),           // Hace accesible los datos del State del Contexto
        { project } = projectContext;                            // Destructuring Context Provider


    /** Validates if there is no selected project */
    if( ! project ) return null;
    
    const [ actualProject ] = project;                            // Array Destructuring

    return(
        <div className="new-and-edit-task-container">
            <form 
                className="new-and-edit-task-form"
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre Tarea"
                    name="nameTask"
                />

                <button
                    type="button"
                    className="btn btn-secondary btn-block"
                >Agregar</button>
            </form>
        </div>
    );
}

export default NewAndEditTask;