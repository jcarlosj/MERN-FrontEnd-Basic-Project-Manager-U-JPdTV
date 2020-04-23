import React, { Fragment, useState, useContext } from 'react';

/** Contexts */
import ProjectContext from '../../context/projects/project-context';

const NewProject = () => {

    /** Get State Project Context */
    const 
        projectContext = useContext( ProjectContext ),           // Hace accesible los datos del State del Contexto
        { toShow, showForm, error, addProject, showErrorNewProjectForm } = projectContext;                   // Destructuring Context Provider

    /** Hook: Define State */
    const 
        [ projectForm, setProjectForm ] = useState({
            name: ''
        }),
    /** Destructuring State 'projectForm' */
        { name } = projectForm;

    /** Get form values when they change */
    const onChangeFormValues = event => {
        /** Update State 'projectForm' */
        setProjectForm({
            ...projectForm,
            [ event .target .name ]: event .target .value 
        });
    }

    /** Submit form data */
    const onSubmitFormValues = event => {
        event .preventDefault();

        /** Validate form values */
        if( name === '' ) {
            showErrorNewProjectForm();  // Show Error
            return;
        }

        addProject( projectForm );    // Add values to state
        setProjectForm({
            name: ''                     // Update State 'ProjectForm' & Reset form 
        });
    }

    return(
        <Fragment>
            <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={ () => showForm() }    /** Ejecuta funcion del State del Contexto */
            >Nuevo proyecto</button>

            { toShow
                ?   <form 
                        className="new-project-form"
                        onSubmit={ onSubmitFormValues }
                    >
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="name"
                            onChange={ onChangeFormValues }
                            value={ name }
                        />
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >Agregar</button>

                    </form>
                :   null
            }
            { error 
                ?   <p className="message error">Nombre del proyecto es obligatorio</p>
                :   null
            }
        </Fragment>
    );
}

export default NewProject;