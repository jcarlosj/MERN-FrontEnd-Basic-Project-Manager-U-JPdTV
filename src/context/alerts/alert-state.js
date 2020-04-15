import React, { useReducer } from 'react';

/** AlertProvider */
import AlertContext from './alert-context';
import AlertReducer from './alert-reducer';

/** Context Status */
const AlertState = props => {

    /** Estado inicial de datos que fluirá por los Componentes */
    const initialState = {
        alert: null
    }

    /** Dispatch: Envia acciones a ejecutar */
    const [ state, dispatch ] = useReducer(
        /** useReducer: Hook Adicional que se usa en React a cambio del Reducer que se encuentra en Redux */
        AlertReducer,       // Reducer: Definición de Acciones del Componente
        initialState        // InitialState: Estado inicial del Componente
    );

    return(
        /** AlertContext .Provider:
         *  Provee de datos al Contexto pasando un objeto.
         *      - value: Objeto con los Valores o Funciones que estarán disponibles globalmente
        */
        <AlertContext .Provider
            value={{}}
        >
            { props .children }         {/* Permite el paso de datos entre los componentes hijos anidados a este Provider */}
        </AlertContext .Provider>
    );

}

export default AlertState;