import React, { useReducer } from 'react';

/** ProjectProvider */
import ProjectContext from './project-context';
import ProjectReducer from './project-reducer';

/** Types */
import { 
    PROJECT_FORM, 
    GET_PROJECTS, 
    ADD_PROJECT,
    ERROR_NEW_PROJECT_FORM,
    GET_SELECTED_PROJECT,
    DELETE_PROJECT,
    ERROR_PROJECT_MESSAGE
} from '../../types';     // No pongo nombre del archivo por que se llama 'index.js' y lo reconoce por defecto.

/** Dependencies */
import clientAxios from '../../config/axios';

/** Context Status */
const ProjectState = props => {

    /** Estado inicial de datos  que fluirá por los Componentes */
    const initialState = {
        toShow: false,
        project: null,
        projects: [],
        error: false,
        message: null
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
    const getProjects = async () => {
    
        try {
            const response = await clientAxios .get( '/api/projects' );
            console .log( 'getProjects', response .data );

            dispatch({
                type: GET_PROJECTS,
                payload: response .data .projects          // Datos que envia al Reducer
            });

        } catch ( error ) {
            console .log( error .response );

            dispatch({
                type: ERROR_PROJECT_MESSAGE,
                payload: {
                    text: error .response .data .error .message,
                    class: 'alert-error'
                }
            });
        }

    }

    /** Add API project (simulation using static data) */
    const addProject = async project => {
        
        try {
            /** Inserta projecto en DB*/
            const response = await clientAxios .post( '/api/projects', project );
            console .log( 'addProject', response );

            /** Inserta projecto en el State */
            dispatch({
                type: ADD_PROJECT,
                payload: response .data .project
            });

        } catch ( error ) {
            console .log( error .response );

            dispatch({
                type: ERROR_PROJECT_MESSAGE,
                payload: {
                    text: error .response .data .error .message,
                    class: 'alert-error'
                }
            });
        }
   
    }

    /** Get selected project */
    const getSelectedProject = projectId => {
        dispatch({
            type: GET_SELECTED_PROJECT,
            payload: projectId
        });
    }

    /** Delete a Project */
    const deleteProject = async projectId => {
        
        try {
            const response = await clientAxios .delete( `/api/projects/${ projectId }` );
            console .log( 'deleteProject', response );

            dispatch({
                type: DELETE_PROJECT,
                payload: projectId
            });

        } catch ( error ) {
            console .log( error .response );

            dispatch({
                type: ERROR_PROJECT_MESSAGE,
                payload: {
                    text: error .response .data .error .message,
                    class: 'alert-error'
                }
            });
        }
        
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
                message: state .message,    // Valor del State
                showForm,                   // Funcionalidad
                getProjects,                // Funcionalidad
                addProject,                 // Funcionalidad
                showErrorNewProjectForm,    // Funcionalidad
                getSelectedProject,         // Funcionalidad
                deleteProject               // Funcionalidad
            }}
        >
            { props .children }         {/* Permite el paso de datos entre los componentes hijos anidados a este Provider */}
        </ProjectContext .Provider>
    );

}

export default ProjectState;