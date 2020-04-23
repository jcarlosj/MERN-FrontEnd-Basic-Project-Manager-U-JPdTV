import { 
    PROJECT_FORM, 
    GET_PROJECTS, 
    ADD_PROJECT,
    ERROR_NEW_PROJECT_FORM,
    GET_SELECTED_PROJECT,
    DELETE_PROJECT 
} from '../../types';     // No pongo nombre del archivo por que se llama 'index.js' y lo reconoce por defecto.

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
        case GET_SELECTED_PROJECT: 
            // Asigna valores a la propiedad 'projects' del State del Context
            return {
                ...state,
                project: state .projects .filter( project => {      // Itera todos los proyectos para encontrar el seleccionado y ... 
                    if( project ._id === action .payload ) {
                        return project;                             // ... Asigna el projecto encontrado a la propiedad 'project' del State del Context
                    } 
                })   
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
                toShow: false,              // Close new project form
                error: false                // Hide error message
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state .projects .filter( project => {      // Itera todos los proyectos para filtrar el seleccionado y ... 
                    if( project .id !== action .payload ) {
                        return project;                              // ... Asigna los projectos a la propiedad 'project' del State del Context, excepto el seleccionado
                    } 
                }),
                project: null                                        // Reset selected project to null
            }
        case ERROR_NEW_PROJECT_FORM: 
            // Asigna valores a la propiedad 'error' del State del Context
            return {
                ...state,
                error: true                 // Show error message
            }
        default:            // Acción por defecto
            return state;
    }
}

export default ProjectReducer;