import { PROJECT_FORM } from '../../types';     // No pongo nombre del archivo por que se llama 'index.js' y lo reconoce por defecto.

export default ( state, action ) => {
    switch( action .type ) {
        case PROJECT_FORM:
            return {
                ...state,
                toShow: true
            }
        default: 
            return state;
    }
}