import React, { useReducer } from 'react';
/** ProjectProvider */
import ProjectContext from './project-context';
import ProjectReducer from './project-reducer';
import { 
    PROJECT_FORM, 
    GET_PROJECTS, 
    ADD_PROJECT,
    ERROR_NEW_PROJECT_FORM,
    GET_SELECTED_PROJECT
} from '../../types';     // No pongo nombre del archivo por que se llama 'index.js' y lo reconoce por defecto.

/** Dependencies */
import { v4 as uuidv4 } from 'uuid';

/** Context Status */
const ProjectState = props => {

    /** Static data must be changed for data obtained from the API */
    const projects = [
        { id: 1, name: 'Virtual Shopping' },
        { id: 2, name: 'Learning Python & Django' },
        { id: 3, name: 'Personal Web Page' },
        { id: 4, name: 'Prototype business idea' }
    ];

    /** Estado inicial de datos  que fluirá por los Componentes */
    const initialState = {
        toShow: false,
        project: null,
        projects: [],
        error: false
    }

    /** Dispatch: Envia acciones a ejecutar */
    const [ state, dispatch ] = useReducer( 
        /** useReducer: Hook Adicional que se usa en React a cambio del Reducer que se encuenta en Redux */
        ProjectReducer,     // Reducer: Definición de Acciones del Componente
        initialState        // Inicial State: Estado inicial del Componente
    );     

    /** Show Project Form */
    const showForm = () => {
        /** Dispatch envia al reducer la acción que se va a ejecutar */
        dispatch({  
            type: PROJECT_FORM
        });
    }

    /** Get API projects (simulation using static data) */
    const getApiProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects           // Datos que envia al Reducer
        });
    }

    /** Add API project (simulation using static data) */
    const addApiProject = project => {
        project .id = uuidv4();

        /** Inserta projecto */
        dispatch({
            type: ADD_PROJECT,
            payload: project
        });
    }

    /** Get selected project */
    const getSelectedProject = projectId => {
        dispatch({
            type: GET_SELECTED_PROJECT,
            payload: projectId
        });
    }

    /** Show error new project form */
    const showErrorNewProjectForm = () => {
        dispatch({
            type: ERROR_NEW_PROJECT_FORM
        });
    }
 
    return(
        /** ProjectContext .Provider:
         *  Provee de datos al Contexto pasando un objeto.
         *      - value: Objeto con Valores o Funciones que estarán disponibles globalmente */
        <ProjectContext .Provider       
            value={{ 
                toShow: state .toShow,      // Valor del State
                projects: state .projects,  // Valor del State
                error: state .error,        // Valor del State
                project: state .project,    // Valor del State
                showForm,                   // Funcionalidad
                getApiProjects,             // Funcionalidad
                addApiProject,              // Funcionalidad
                showErrorNewProjectForm,    // Funcionalidad
                getSelectedProject          // Funcionalidad
            }}
        >
            { props .children }         {/* Permite el paso de datos entre los componentes hijos anidados a este Provider */}
        </ProjectContext .Provider>
    );

}

export default ProjectState;