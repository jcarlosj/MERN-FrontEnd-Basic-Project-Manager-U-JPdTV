import { SHOW_ALERT, HIDE_ALERT } from '../../types';     // No pongo nombre del archivo por que se llama 'index.js' y lo reconoce por defecto.
/** Define las acciones o eventos del Componente 
 *      - state: Estado del Componente antes de algún cambio.
 *      - action: Un Objeto JavaScrit con uno o dos parámetros
 *          + type: Nombre del Evento que cambiará nuestro estado
 *          + payload: Envia información extra a la actualización del estado (Opcional)
*/
const AlertReducer = ( state, action ) => {   
    switch( action .type ) {
        // Acciones a ejecutar
        case SHOW_ALERT:  
            return {
                alert: action .payload  // Show Alert
            }
        case HIDE_ALERT:  
            return {
                alert: null             // Hide Alert
            }
        default:            // Acción por defecto
            return state;
    }
}

export default AlertReducer;