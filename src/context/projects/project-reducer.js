import { PROJECT_FORM } from '../../types';     // No pongo nombre del archivo por que se llama 'index.js' y lo reconoce por defecto.

/** Define las acciones o eventos del Componente 
 *      - state: Estado del Componente antes de algún cambio.
 *      - action: Un Objeto JavaScrit con uno o dos parámetros
 *          + type: Nombre del Evento que cambiará nuestro estado
 *          + payload: Envia información extra a la actualización del estado (Opcional)
*/
const ProjectReducer = ( state, action ) => {   
    switch( action .type ) {
        // Acciónes a ejecutar
        case PROJECT_FORM:  
            return {
                ...state,
                toShow: true
            }
        default:            // Acción por defecto
            return state;
    }
}

export default ProjectReducer;