import React, { Fragment, useContext } from 'react';

/** Libraries */
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/** Components */
import Task from './Task';

/** Contexts */
import ProjectContext from '../../context/projects/project-context';
import TaskContext from '../../context/tasks/task-context';

/** Component */
const TaskList = () => {

    /** Get State Project Context */
    const 
        projectContext = useContext( ProjectContext ),           // Hace accesible los datos del State de ProjectContext
        { project, deleteProject } = projectContext,             // Destructuring Context Provider
        taskContext = useContext( TaskContext ),                 // Hace accesible los datos del State de TaskContext
        { projectTasks } = taskContext;                          // Destructuring Context Provider

    /** Validates if there is no selected project */
    if( ! project ) return <h2>Selecciona un proyecto</h2>;
    console.log( 'Hey youuu!', projectTasks);
    const [ actualProject ] = project;                            // Array Destructuring

    /** Delete a proyect */
    const deleteAProject = () => {
        deleteProject( actualProject .id );
    }

    return(
        <Fragment>
            <h2>Proyecto <span>{ actualProject .name }</span></h2>
            <ul className="task-list">
                { projectTasks .length === 0 
                    ?   <li className="task"><p>No hay tareas</p></li>
                    :   <TransitionGroup>   
                        {/* TO FIX: Warning: findDOMNode is deprecated in StrictMode */}
                            { projectTasks .map( task => (
                                <CSSTransition
                                    key={ task .id }
                                    timeout={ 400 }
                                    classNames="task"
                                >
                                    <Task 
                                        data={ task }
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
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