import React from 'react';

/** Components */
import NewProject from '../projects/NewProject';
import ProjectList from '../projects/ProjectList';

const SideBar = () => {
    return (
        <aside>
            <h1>Tasks <span>MERN</span></h1>
            <NewProject />

            <div className="projects-container">
                <h2>Proyectos</h2>
                <ProjectList />
            </div>
        </aside>
    );
}

export default SideBar;