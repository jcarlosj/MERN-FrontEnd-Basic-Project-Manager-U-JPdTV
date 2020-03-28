import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT } from '../../types';     // No pongo nombre del archivo por que se llama 'index.js' y lo reconoce por defecto.

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
            // Asigna valores a la propiedad 'toShow' del State del Context
            return {
                ...state,
                toShow: true                // Open new project form
            }
        case GET_PROJECTS: 
            // Asigna valores a la propiedad 'projects' del State del Context
            return {
                ...state,
                projects: action .payload   // Asigna valores a la propiedad 'projects' del State del Context
            }
        case ADD_PROJECT: 
            // Asigna valores a la propiedad 'projects', 'toShow' del State del Context
            return {
                ...state,                   // Lo que tenemos
                projects: [                 // Lo que agregamos
                    ...state .projects,     // Lo que tenemos
                    action .payload         // Lo que agregamos
                ],
                toShow: false               // Close new project form
            }
        default:            // Acción por defecto
            return state;
    }
}

export default ProjectReducer;