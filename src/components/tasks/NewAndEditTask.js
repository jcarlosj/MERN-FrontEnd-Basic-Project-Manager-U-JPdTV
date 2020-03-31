import React, { useContext, useState } from 'react';

/** Contexts */
import ProjectContext from '../../context/projects/project-context';

/** Component */
const NewAndEditTask = () => {

    /** Get State Project Context */
    const 
        projectContext = useContext( ProjectContext ),           // Hace accesible los datos del State del Contexto
        { project } = projectContext;                            // Destructuring Context Provider

    /** Hook: Define State */
    const 
        [ taskForm, setTaskForm ] = useState({
            name: ''
        }),
    /** Destructuring State 'taskForm' */
        { name } = taskForm;

    /** Validates if there is no selected project */
    if( ! project ) return null;
    
    const [ actualProject ] = project;                            // Array Destructuring

    /** Get form values when they change */
    const handleChangeFormValues = event => {
        /** Update State 'taskForm' */
        setTaskForm({
            ...taskForm,
            [ event .target .name ]: event .target .value 
        });
    }

    return(
        <div className="new-and-edit-task-container">
            <form 
                className="new-and-edit-task-form"
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre Tarea"
                    name="name"
                    onChange={ handleChangeFormValues }
                    value={ name }
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