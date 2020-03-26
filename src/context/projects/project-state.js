import React, { useReducer } from 'react';
import ProjectContext from './project-context';
import ProjectReducer from './project-reducer';
import { PROJECT_FORM } from '../../types';     // No pongo nombre del archivo por que se llama 'index.js' y lo reconoce por defecto.

const ProjectState = props => {
    /** Estado inicial de datos  que fluirá por los Componentes */
    const initialState = {
        toShow: false
    }

    /** Dispatch: Envia acciones a ejecutar */
    const [ state, dispatch ] = useReducer( 
        /** useReducer: Hook Adicional que se usa en React a cambio del Reducer que se encuenta en Redux */
        ProjectReducer,     // Reducer: Definición de Acciones del Componente
        initialState        // Inicial State: Estado inicial del Componente
    );     

    /** CRUD Functions */
    const showForm = () => {
        /** Dispatch envia al reducer la acción que se va a ejecutar */
        dispatch({  
            type: PROJECT_FORM
        });
    }

    return(
        /** ProjectContext .Provider:
         *  Provee de datos al Contexto pasando un objeto.
         *      - value: Objeto con Valores o Funciones que estarán disponibles globalmente */
        <ProjectContext .Provider       
            value={{ 
                toShow: state .toShow,  // Valor del State
                showForm                // Funcionalidad
            }}
        >
            { props .children }         {/* Permite el paso de datos entre los componentes hijos anidados a este Provider */}
        </ProjectContext .Provider>
    );

}

export default ProjectState;