import React, { useReducer } from 'react';
import ProjectContext from './project-context';
import ProjectReducer from './project-reducer';
import { PROJECT_FORM } from '../../types';     // No pongo nombre del archivo por que se llama 'index.js' y lo reconoce por defecto.

const ProjectState = props => {
    /** Define inicial state */
    const initialState = {
        toShow: false
    }

    /** Dispatch: Envia acciones a ejecutar */
    const [ state, dispatch ] = useReducer( ProjectReducer, initialState );

    /** CRUD Functions */
    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        });
    }

    return(
        <ProjectContext .Provider
            value={{ 
                toShow: state .toShow,
                showForm 
            }}
        >
            { props .children }
        </ProjectContext .Provider>
    );

}

export default ProjectState;