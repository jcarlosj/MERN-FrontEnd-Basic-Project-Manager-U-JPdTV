import React, { Fragment, useContext } from 'react';

/** Components */
import Task from './Task';

/** Contexts */
import ProjectContext from '../../context/projects/project-context';

/** Component */
const TaskList = () => {

    /** Get State Project Context */
    const 
        projectContext = useContext( ProjectContext ),           // Hace accesible los datos del State del Contexto
        { project, deleteProject } = projectContext;                            // Destructuring Context Provider


    /** Validates if there is no selected project */
    if( ! project ) return <h2>Selecciona un proyecto</h2>;
    
    const [ actualProject ] = project;                            // Array Destructuring

    // TO DO: Change static data for dynamic data
    const tasks = [
        { id: 1, name: 'Choose platform', state: false },
        { id: 2, name: 'Buy Hosting and Domain', state: true },
        { id: 3, name: 'Add Products', state: false },
        { id: 4, name: 'Choose payment methods', state: false }
    ];

    /** Delete a proyect */
    const deleteAProject = () => {
        deleteProject( actualProject .id );
    }

    return(
        <Fragment>
            <h2>Proyecto <span>{ actualProject .name }</span></h2>
            <ul className="task-list">
                { tasks .length === 0 
                    ?   <li className="task">No hay tareas</li>
                    :   tasks .map( task => (
                            <Task
                                key={ task .id }
                                data={ task }
                            />
                        ))
                }
            </ul>
            <div className="button-container">
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={ deleteAProject }
                >Eliminar Proyecto &times;</button> 
            </div>
        </Fragment>
    );
}

export default TaskList;