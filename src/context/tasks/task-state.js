import React, { useReducer } from 'react';

/** ProjectProvider */
import TaskContext from './task-context';
import TaskReducer from './task-reducer';

/** Context Status */
const TaskState = props => {

    /** Static data must be changed for data obtained from the API */
    const tasks = [
        { id: 1, projectId: 1, name: 'Update inventory', state: false },
        { id: 2, projectId: 1, name: 'Add new products', state: true },
        { id: 3, projectId: 1, name: 'Review comments', state: false },
        { id: 4, projectId: 2, name: 'Define learning path', state: false },
        { id: 5, projectId: 3, name: 'Design site theme', state: false },
        { id: 6, projectId: 3, name: 'Choose site colors', state: false },
        { id: 7, projectId: 3, name: 'Lay out the site', state: false },
        { id: 8, projectId: 3, name: 'Define initial content', state: false },
        { id: 9, projectId: 4, name: 'Model Database (MER)', state: false },
        { id: 10, projectId: 4, name: 'Create modeled database', state: false },
        { id: 11, projectId: 4, name: 'Define the software architecture', state: false }
    ];

    /** Estado inicial de datos  que fluirá por los Componentes */
    const initialState = {
        tasks
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
            value={{
                tasks: state .tasks
            }} 
        >
            { props .children }         {/* Permite el paso de datos entre los componentes hijos anidados a este Provider */}
        </TaskContext .Provider>
    );
}

export default TaskState;