/** TYPES */
import { SUCCESSFUL_SIGN_IN, FAILED_SIGN_IN } from '../../types';     // No pongo nombre del archivo por que se llama 'index.js' y lo reconoce por defecto.
/** Define las acciones o eventos del Componente 
 *      - state: Estado del Componente antes de algún cambio.
 *      - action: Un Objeto JavaScrit con uno o dos parámetros
 *          + type: Nombre del Evento que cambiará nuestro estado
 *          + payload: Envia información extra a la actualización del estado (Opcional)
*/
const AuthReducer = ( state, action ) => {   
    switch( action .type ) {
        case SUCCESSFUL_SIGN_IN:
            localStorage .setItem( 'token', action .payload. token );  // Pone el Token en el LocalStorage
            return {
                ...state,
                authenticated: true,
                message: null
            }
        case FAILED_SIGN_IN:
            return {
                ...state,
                message: action .payload,
                token: null
            }
        default:            // Acción por defecto
            return state;
    }
}

export default AuthReducer;