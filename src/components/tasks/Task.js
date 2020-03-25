import React from 'react';

const Task = ({ data }) => {
    return(
        <li className="task shadow">
            <p>{ data .name }</p>
            <div className="state">
                { data .state 
                    ?   <button
                            type="button"
                            className="btn btn-completed"
                        >Completada</button> 
                    :   <button
                            type="button"
                            className="btn btn-uncompleted"
                        >Sin completar</button> 
                }
            </div>
            <div className="actions">
                <button
                    type="button"
                    className="btn btn-primary"
                >Editar</button> 
                <button
                    type="button"
                    className="btn btn-secondary"
                >Eliminar</button> 
            </div>
        </li>
    );
}

export default Task;