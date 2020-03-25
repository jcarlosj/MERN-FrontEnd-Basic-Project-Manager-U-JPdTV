import React from 'react';

/** Components */
import SideBar from '../layout/SideBar';
import Header from '../layout/Header';
import NewAndEditTask from '../tasks/NewAndEditTask';
import TaskList from '../tasks/TaskList';
 
const Projects = () => {
    return(
        <div className="app-container">
            <SideBar />
            
            <main>
                <Header />
                <NewAndEditTask />
                
                <div className="tasks-container">
                    <TaskList />
                </div>
            </main>
            
        </div>
    );
}

export default Projects;