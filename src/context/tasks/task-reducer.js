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

/** Define las acciones o eventos del Componente 
 *      - state: Estado del Componente antes de algún cambio.
 *      - action: Un Objeto JavaScrit con uno o dos parámetros
 *          + type: Nombre del Evento que cambiará nuestro estado
 *          + payload: Envia información extra a la actualización del estado (Opcional)
*/
const TaskReducer = ( state, action ) => {   
    switch( action .type ) {
        // Acciones a ejecutar
        case GET_PROJECT_TASKS:
            return {
                ...state,
                projectTasks: state .projectTasks .filter( task => {
                    if( task .projectId === action .payload ) {
                        return task;
                    }
                })
            }
        case ERROR_NEW_AND_EDIT_TASK_FORM: 
            // Asigna valores a la propiedad 'error' del State del Context
            return {
                ...state,
                error: true                 // Show error message
            }
        case ADD_TASK:
            return {
                ...state,
                projectTasks: [
                    ...state .projectTasks,
                    action .payload
                ],
                error: false                 // Hide error message
            }
        case DELETE_TASK:
            return {
                ...state,
                projectTasks: state .projectTasks .filter( task => {
                    return task .id !== action .payload;
                })
            }
        case UPDATE_TASK:
        case UPDATE_TASK_STATUS:
            return {
                ...state,
                projectTasks: state .projectTasks .map( task => {
                    return task .id === action .payload .id 
                        ?   action .payload
                        :   task;
                })
            }
        case GET_SELECTED_TASK:
            return {
                ...state,
                task: action .payload       // Update State 'task'
            }
        case DELETE_SELECTED_TASK:
            return {
                ...state,
                task: null                  // Delete selected task in the state
            }
        default:            // Acción por defecto
            return state;
    }
}

export default TaskReducer;