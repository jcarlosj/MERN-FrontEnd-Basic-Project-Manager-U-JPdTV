import React, { Fragment, useState } from 'react';

const NewProject = () => {

    /** Hook: Define State */
    const 
        [ projectForm, setProjectForm ] = useState({
            nameProject: ''
        }),
    /** Destructuring State 'projectForm' */
        { nameProject } = projectForm;

    /** Get form values when they change */
    const onChangeFormValues = event => {
        /** Update State 'projectForm' */
        setProjectForm({
            ...projectForm,
            [ event .target .name ]: event .target .value 
        });
    }

    return(
        <Fragment>
            <button
                type="button"
                className="btn btn-primary btn-block"
            >Nuevo proyecto</button>

            <form 
                className="new-project-form"
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nameProject"
                    onChange={ onChangeFormValues }
                    value={ nameProject }
                />
                <button
                    type="button"
                    className="btn btn-primary btn-block"
                >Agregar</button>

            </form>
        </Fragment>
    );
}

export default NewProject;