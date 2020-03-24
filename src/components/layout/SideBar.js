import React from 'react';

/** Components */
import NewProject from '../projects/NewProject';

const SideBar = () => {
    return (
        <aside>
            <h1>Tasks <span>MERN</span></h1>
            <NewProject />

            <div className="projects-container">
                <h2>Proyectos</h2>
            </div>
        </aside>
    );
}

export default SideBar;