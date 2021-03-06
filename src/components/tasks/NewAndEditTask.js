import React, { useContext, useState, useEffect } from 'react';

/** Contexts */
import ProjectContext from '../../context/projects/project-context';
import TaskContext from '../../context/tasks/task-context';

/** Component */
const NewAndEditTask = () => {

    /** Get State Project Context */
    const 
        projectContext = useContext( ProjectContext ),           // Hace accesible los datos del State de ProjectContext
        { project } = projectContext,                            // Destructuring Context Provider
        taskContext = useContext( TaskContext ),                 // Hace accesible los datos del State de TaskContext
        { task, error, showErrorNewAndEditTaskForm, addTaskByProject, getTasksByProject, updateTaskByProject, deleteSelectedTask } = taskContext;    // Destructuring Context Provider

    /** Hook: Define State */
    const 
        [ taskForm, setTaskForm ] = useState({
            name: ''
        }),
    /** Destructuring State 'taskForm' */
        { name } = taskForm;

    /** Hook: Tracking State 'task' */
    useEffect( () => {
    
        /** validate state changes / validates if you create or edit task */
        task !== null
            ?   setTaskForm( task )    // Update State 'taskForm'
            :   setTaskForm({          // Update State 'taskForm'
                    name: ''
                });    
    
    }, [ task ]);

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

    /** Submit form data */
    const onSubmitFormValues = event => {
        event .preventDefault();

        /** Validate form values */
        if( name .trim() === '' ) {
            showErrorNewAndEditTaskForm();  // Show Error
            return;
        }
        
        /** validates if you create or edit task */
        if( task === null ) {       
            // Create new task
            taskForm .project = actualProject ._id;     // Assign the current project ID to the task
            addTaskByProject( taskForm );               // Add values to state
        } else {
            // Update existing task
            updateTaskByProject( taskForm );            // Update values to state
            deleteSelectedTask();                       // Update task status to null
        }

        getTasksByProject( actualProject .id );         // Get tasks by project & Update task list in the frontend    

        /** Reset form */
        setTaskForm({
            name: ''                     // Update State 'taskForm'
        });
        
    }

    return(
        <div className="new-and-edit-task-container">
            <form 
                className="new-and-edit-task-form"
                onSubmit={ onSubmitFormValues }
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre Tarea"
                    name="name"
                    onChange={ handleChangeFormValues }
                    value={ name }
                    data-cy="new-edit-task-input-name"
                />

                <button
                    type="submit"
                    className="btn btn-secondary btn-block"
                    data-cy="new-edit-task-button-submit"
                >
                    { task 
                        ?   'Editar'
                        :   'Agregar'
                    }
                </button>
            </form>
            { error 
                ?   <p 
                        className="message error"
                        data-cy="new-edit-task-alert-error"
                    >Nombre para la tarea es obligatorio</p>
                :   null
            }
        </div>
    );
}

export default NewAndEditTask;