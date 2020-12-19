import React, { useReducer } from 'react';

/** ProjectProvider */
import TaskContext from './task-context';
import TaskReducer from './task-reducer';

/** Dependencies */
import clientAxios from '../../config/axios';

/** TYPES */
import { 
    GET_PROJECT_TASKS,
    ERROR_NEW_AND_EDIT_TASK_FORM,
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK_STATUS,
    GET_SELECTED_TASK,
    UPDATE_TASK,
    DELETE_SELECTED_TASK
} from '../../types';     // No pongo nombre del archivo por que se llama 'index.js' y lo reconoce por defecto.

/** Context Status */
const TaskState = props => {

    /** Estado inicial de datos  que fluirá por los Componentes */
    const initialState = {
        projectTasks: [],
        error: false,
        task: null
    }

    /** Dispatch: Envia acciones a ejecutar */
    const [ state, dispatch ] = useReducer( 
        /** useReducer: Hook Adicional que se usa en React a cambio del Reducer que se encuenta en Redux */
        TaskReducer,        // Reducer: Definición de Acciones del Componente
        initialState        // Inicial State: Estado inicial del Componente
    );  

    /** Get tasks by project */
    const getTasksByProject = async projectId => {
        
        try {
            const response = await clientAxios .get( '/api/tasks', { params: { project: projectId } } );   // Cuando enviamos un valor por params, debemos obtenerlo en el Backend como: request .query
            console .log( 'getTasksByProject', response );

            dispatch({
                type: GET_PROJECT_TASKS,
                payload: response .data .tasks
            });

        } catch ( error ) {
            console .log( error .response );
        }

    }

    /** Add API project (simulation using static data) */
    const addTaskByProject = async task => {
        
        try {
            const response = await clientAxios .post( '/api/tasks', task );
            console .log( 'addTaskByProject', response );

            /** Inserta tarea */
            dispatch({
                type: ADD_TASK,
                payload: response .data .task
            });

        } catch ( error ) {
            console .log( error );
        }
        
    }

    /** Delete Task */
    const deleteTaskByProject = async ( taskId, project ) => {
        
        try {
            const response = await clientAxios .delete( `/api/tasks/${ taskId }`, { params: { project } } )
            console .log( 'deleteTaskByProject', response );

            dispatch({
                type: DELETE_TASK,
                payload: taskId
            });

        } catch ( error ) {
            console .log( error );
        }

    }

    /** Update task status */
    const updateTaskStatusByProject = async task => {

        try {
            const response = await clientAxios .put( `/api/tasks/${ task ._id }`, task );
            console .log( 'updateTaskByProject', response );

            dispatch({
                type: UPDATE_TASK_STATUS,
                payload: task
            });

        } catch ( error ) {
            console .log( error );    
        }

    }

    /** Get selected task */
    const getSelectedTask = task => {
        dispatch({
            type: GET_SELECTED_TASK,
            payload: task
        });
    }

    /** Update task */
    const updateTaskByProject = async task => {
        
        try {
            const response = await clientAxios .put( `/api/tasks/${ task ._id }`, task );
            console .log( 'updateTaskByProject', response );
            
            dispatch({
                type: UPDATE_TASK,
                payload: response .data .task
            });

        } catch ( error ) {
            console .log( error );    
        }

    }

    /** Delete Selected Task in the State */
    const deleteSelectedTask = _ => {
        dispatch({
            type: DELETE_SELECTED_TASK
        });
    }

    /** Show error new and edit task form */
    const showErrorNewAndEditTaskForm = () => {
        dispatch({
            type: ERROR_NEW_AND_EDIT_TASK_FORM
        });
    }

    return(
        /** TaskContext .Provider:
         *  Provee de datos al Contexto pasando un objeto.
         *      - value: Objeto con Valores o Funciones que estarán disponibles globalmente */
        <TaskContext .Provider       
            value={{
                tasks: state .tasks,                 // Valor del State
                projectTasks: state .projectTasks,   // Valor del State
                error: state .error,                 // Valor del State
                task: state. task,                   // Valor del State
                getTasksByProject,                   // Funcionalidad
                showErrorNewAndEditTaskForm,         // Funcionalidad
                addTaskByProject,                    // Funcionalidad
                deleteTaskByProject,                 // Funcionalidad
                updateTaskStatusByProject,           // Funcionalidad
                getSelectedTask,                     // Funcionalidad
                updateTaskByProject,                 // Funcionalidad
                deleteSelectedTask                   // Funcionalidad
            }} 
        >
            { props .children }         {/* Permite el paso de datos entre los componentes hijos anidados a este Provider */}
        </TaskContext .Provider>
    );
}

export default TaskState;