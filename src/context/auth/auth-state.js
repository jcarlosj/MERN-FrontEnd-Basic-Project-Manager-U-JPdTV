import React, { useReducer } from 'react';

/** AuthProvider */
import AuthContext from './auth-context';
import AuthReducer from './auth-reducer';

/** Context Status */
const AuthState = props => {

    /** Estado inicial de datos que fluirá por los Componentes */
    const initialState = {
        authenticated: null,
        message: null,
        token: localStorage .getItem( 'token' ),    // Obtiene el token almacenado en el LocalStorage
        user: null
    }

    /** Dispatch: Envia acciones a ejecutar */
    const [ state, dispatch ] = useReducer(
        /** useReducer: Hook Adicional que se usa en React a cambio del Reducer que se encuentra en Redux */
        AuthReducer,       // Reducer: Definición de Acciones del Componente
        initialState        // InitialState: Estado inicial del Componente
    );

    return(
        /** AuthContext .Provider:
         *  Provee de datos al Contexto pasando un objeto.
         *      - value: Objeto con los Valores o Funciones que estarán disponibles globalmente
        */
        <AuthContext .Provider
            value={{
                authenticated: state .alert,    // Valor del State
                message: state .message,        // Valor del State
                token: state .token,            // Valor del State
                user: state .user               // Valor del State
            }}
        >
            { props .children }         {/* Permite el paso de datos entre los componentes hijos anidados a este Provider */}
        </AuthContext .Provider>
    );

}

export default AuthState;