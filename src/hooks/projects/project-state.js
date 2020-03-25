import React, { useReducer } from 'react';
import ProjectContext from './project-context';
import ProjectReducer from './project-reducer';

const ProjectState = props => {
    /** Define inicial state */
    const initialState = {
        projectForm: false
    }

    /** Dispatch: Envia acciones a ejecutar */
    const [ state, dispatch ] = useReducer( ProjectReducer, initialState );

    return(
        <ProjectContext .Provider
            value={{ projectForm: state .projectForm }}
        >
            { props .children }
        </ProjectContext .Provider>
    );

}

export default ProjectState;