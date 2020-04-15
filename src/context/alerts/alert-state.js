import React, { useReducer } from 'react';

/** AlertProvider */
import AlertContext from './alert-context';
import AlertReducer from './alert-reducer';

/** Types */
import { SHOW_ALERT, HIDE_ALERT } from '../../types';       // No pongo nombre del archivo por que se llama 'index.js' y lo reconoce por defecto.

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

    /** Show Alert */
    const showAlert = ( message, category ) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                message,
                category
            }
        });

        /** Hide Alert */
        setTimeout( () => {
            dispatch({
                type: HIDE_ALERT
            });
        }, 5000 );
    }

    return(
        /** AlertContext .Provider:
         *  Provee de datos al Contexto pasando un objeto.
         *      - value: Objeto con los Valores o Funciones que estarán disponibles globalmente
        */
        <AlertContext .Provider
            value={{
                alert: state .alert,      // Valor del State
                showAlert                 // Funcionalidad
            }}
        >
            { props .children }         {/* Permite el paso de datos entre los componentes hijos anidados a este Provider */}
        </AlertContext .Provider>
    );

}

export default AlertState;