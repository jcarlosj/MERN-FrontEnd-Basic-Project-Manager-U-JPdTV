import { 
    GET_PROJECT_TASKS,
    ERROR_NEW_AND_EDIT_TASK_FORM
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
                projectTasks: state .tasks .filter( task => {
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
        default:            // Acción por defecto
            return state;
    }
}

export default TaskReducer;