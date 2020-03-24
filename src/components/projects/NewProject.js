import React, { Fragment } from 'react';

const NewProject = () => {
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