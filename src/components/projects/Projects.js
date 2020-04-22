import React, { useContext, useEffect } from 'react';

/** Components */
import SideBar from '../layout/SideBar';
import Header from '../layout/Header';
import NewAndEditTask from '../tasks/NewAndEditTask';
import TaskList from '../tasks/TaskList';

/** Context */
import AuthContext from '../../context/auth/auth-context';

const Projects = () => {

    /** Get State Alert Context */
    const 
        authContext = useContext( AuthContext ),           // Hace accesible los datos del State del Contexto
        { getAuthenticatedUser } = authContext;            // Destructuring Context Provider

    /** Tracking 'authenticated' 
         *  En caso que el usuario se haya autenticado o registrado
        */
    useEffect( () => {
        getAuthenticatedUser();
    }, []);

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