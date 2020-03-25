import React from 'react';

const NewAndEditTask = () => {
    return(
        <div className="new-and-edit-task-container">
            <form 
                className="new-and-edit-task-form"
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre Tarea"
                    name="nameTask"
                />

                <button
                    type="button"
                    className="btn btn-secondary btn-block"
                >Agregar</button>
            </form>
        </div>
    );
}

export default NewAndEditTask;