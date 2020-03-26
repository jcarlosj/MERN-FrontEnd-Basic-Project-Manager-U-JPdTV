import React, { Fragment, useState, useContext } from 'react';

/** Contexts */
import ProjectContext from '../../context/projects/project-context';

const NewProject = () => {

    /** Get State Project Form */
    const 
        projectContext = useContext( ProjectContext ),
        { toShow, showForm } = projectContext;                   // Destructuring Context Provider

    /** Hook: Define State */
    const 
        [ dataForm, setDataForm ] = useState({
            nameProject: ''
        }),
    /** Destructuring State 'dataForm' */
        { nameProject } = dataForm;

    /** Get form values when they change */
    const onChangeFormValues = event => {
        /** Update State 'dataForm' */
        setDataForm({
            ...dataForm,
            [ event .target .name ]: event .target .value 
        });
    }

    return(
        <Fragment>
            <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={ () => showForm() }
            >Nuevo proyecto</button>

            { toShow
                ?   <form 
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
                :   null
            }
        </Fragment>
    );
}

export default NewProject;