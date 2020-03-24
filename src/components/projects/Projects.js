import React from 'react';

/** Components */
import SideBar from '../layout/SideBar';
import Header from '../layout/Header';
 
const Projects = () => {
    return(
        <div className="app-container">
            <SideBar />
            
            <main>
                <Header />
                <div className="tasks-container">

                </div>
            </main>
            
        </div>
    );
}

export default Projects;