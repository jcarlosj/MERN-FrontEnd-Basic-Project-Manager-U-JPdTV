import React, { useReducer } from 'react';

/** ProjectProvider */
import TaskContext from './task-context';
import TaskReducer from './task-reducer';

/** Context Status */
const TaskState = props => {

    /** Estado inicial de datos  que fluirá por los Componentes */
    const initialState = {
        tasks: []
    }

    /** Dispatch: Envia acciones a ejecutar */
    const [ state, dispatch ] = useReducer( 
        /** useReducer: Hook Adicional que se usa en React a cambio del Reducer que se encuenta en Redux */
        TaskReducer,        // Reducer: Definición de Acciones del Componente
        initialState        // Inicial State: Estado inicial del Componente
    );  

    return(
        /** TaskContext .Provider:
         *  Provee de datos al Contexto pasando un objeto.
         *      - value: Objeto con Valores o Funciones que estarán disponibles globalmente */
        <TaskContext .Provider       
            value={{}} 
        >
            { props .children }         {/* Permite el paso de datos entre los componentes hijos anidados a este Provider */}
        </TaskContext .Provider>
    );
}

export default TaskState;