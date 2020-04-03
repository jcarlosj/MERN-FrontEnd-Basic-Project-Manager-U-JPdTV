import React, { useReducer } from 'react';

/** ProjectProvider */
import TaskContext from './task-context';
import TaskReducer from './task-reducer';

/** Dependencies */
import { v4 as uuidv4 } from 'uuid';

/** TYPES */
import { 
    GET_PROJECT_TASKS,
    ERROR_NEW_AND_EDIT_TASK_FORM,
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK_STATUS,
    GET_SELECTED_TASK,
    UPDATE_TASK
} from '../../types';     // No pongo nombre del archivo por que se llama 'index.js' y lo reconoce por defecto.

/** Context Status */
const TaskState = props => {

    /** Static data must be changed for data obtained from the API */
    const tasks = [
        { id: uuidv4(), projectId: 1, name: 'Update inventory', state: false },
        { id: uuidv4(), projectId: 1, name: 'Add new products', state: true },
        { id: uuidv4(), projectId: 1, name: 'Review comments', state: false },
        { id: uuidv4(), projectId: 2, name: 'Define learning path', state: false },
        { id: uuidv4(), projectId: 3, name: 'Design site theme', state: false },
        { id: uuidv4(), projectId: 3, name: 'Choose site colors', state: false },
        { id: uuidv4(), projectId: 3, name: 'Lay out the site', state: false },
        { id: uuidv4(), projectId: 3, name: 'Define initial content', state: false },
        { id: uuidv4(), projectId: 4, name: 'Model Database (MER)', state: false },
        { id: uuidv4(), projectId: 4, name: 'Create modeled database', state: false },
        { id: uuidv4(), projectId: 4, name: 'Define the software architecture', state: false }
    ];

    /** Estado inicial de datos  que fluirá por los Componentes */
    const initialState = {
        tasks,
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
    const getTasksByProject = projectId => {
        dispatch({
            type: GET_PROJECT_TASKS,
            payload: projectId
        });
    }

    /** Add API project (simulation using static data) */
    const addTaskByProject = task => {
        task .id = uuidv4();
        
        /** Inserta tarea */
        dispatch({
            type: ADD_TASK,
            payload: task
        });
    }

    /** Delete Task */
    const deleteTaskByProject = taskId => {
        dispatch({
            type: DELETE_TASK,
            payload: taskId
        });
    }

    /** Update task status */
    const updateTaskStatusByProject = task => {
        dispatch({
            type: UPDATE_TASK_STATUS,
            payload: task
        });
    }

    /** Get selected task */
    const getSelectedTask = task => {
        dispatch({
            type: GET_SELECTED_TASK,
            payload: task
        });
    }

    /** Update task */
    const updateTaskByProject = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
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
                updateTaskByProject                  // Funcionalidad
            }} 
        >
            { props .children }         {/* Permite el paso de datos entre los componentes hijos anidados a este Provider */}
        </TaskContext .Provider>
    );
}

export default TaskState;