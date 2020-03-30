import { 
    GET_PROJECT_TASKS
} from '../../types';     // No pongo nombre del archivo por que se llama 'index.js' y lo reconoce por defecto.

/** Define las acciones o eventos del Componente 
 *      - state: Estado del Componente antes de algún cambio.
 *      - action: Un Objeto JavaScrit con uno o dos parámetros
 *          + type: Nombre del Evento que cambiará nuestro estado
 *          + payload: Envia información extra a la actualización del estado (Opcional)
*/
const TaskReducer = ( state, action ) => {   
    switch( action .type ) {
        // Acciónes a ejecutar
        case GET_PROJECT_TASKS:
            return {
                ...state,
                projectTask: state .tasks .filter( task => {
                    if( task .projectId === action .payload ) {
                        return task;
                    }
                })
            }
        default:            // Acción por defecto
            return state;
    }
}

export default TaskReducer;