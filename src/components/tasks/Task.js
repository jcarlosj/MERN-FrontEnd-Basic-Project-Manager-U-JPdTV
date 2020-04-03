import React, { useContext } from 'react';

/** Contexts */
import ProjectContext from '../../context/projects/project-context';
import TaskContext from '../../context/tasks/task-context';

const Task = ({ data }) => {

    /** Get State Project Context */
    const 
        projectContext = useContext( ProjectContext ),           // Hace accesible los datos del State de ProjectContext
        { project } = projectContext,                            // Destructuring Context Provider
        taskContext = useContext( TaskContext ),                 // Hace accesible los datos del State de TaskContext
        { deleteTaskByProject, getTasksByProject, updateTaskStatusByProject } = taskContext;    // Destructuring Context Provider


    /** Destructuring Array */
    const [ actualProject ] = project;

    /** Delete Task */
    const deleteTask = taskId => {
        deleteTaskByProject( taskId );              // Delete Task by ID
        getTasksByProject( actualProject .id );     // Get tasks by project & Update task list in the frontend
    }

    /** Change task status */
    const changeTaskStatus = task => {
        task .state = task .state ? false : true;   // Change status
        updateTaskStatusByProject( task );          // Update task status 
    }

    return(
        <li className="task shadow">
            <p>{ data .name }</p>
            <div className="state">
                { data .state 
                    ?   <button
                            type="button"
                            className="btn btn-completed"
                            onClick={ () => changeTaskStatus( data ) }
                        >Completada</button> 
                    :   <button
                            type="button"
                            className="btn btn-uncompleted"
                            onClick={ () => changeTaskStatus( data ) }
                        >Sin completar</button> 
                }
            </div>
            <div className="actions">
                <button
                    type="button"
                    className="btn btn-primary"
                >Editar</button> 
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={ () => deleteTask( data .id ) }
                >Eliminar</button> 
            </div>
        </li>
    );
}

export default Task;