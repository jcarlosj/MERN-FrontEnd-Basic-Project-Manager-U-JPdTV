import React, { Fragment } from 'react';

/** Components */
import Task from './Task';

const TaskList = () => {

    // TO DO: Change static data for dynamic data
    const tasks = [
        { id: 1, name: 'Choose platform', state: false },
        { id: 2, name: 'Buy Hosting and Domain', state: true },
        { id: 3, name: 'Add Products', state: false },
        { id: 4, name: 'Choose payment methods', state: false }
    ];

    return(
        <Fragment>
            <h2>Proyecto <span>Virtual Shopping</span></h2>
            <ul className="task-list">
                { tasks .length === 0 
                    ?   <li className="task">No hay tareas</li>
                    :   tasks .map( task => (
                            <Task
                                key={ task .id }
                                data={ task }
                            />
                        ))
                }
            </ul>
            <div className="button-container">
                <button
                    type="button"
                    className="btn btn-secondary"
                >Eliminar Proyecto &times;</button> 
            </div>
        </Fragment>
    );
}

export default TaskList;