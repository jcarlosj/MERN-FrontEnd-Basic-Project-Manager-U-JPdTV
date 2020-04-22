import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';      // Dependencies

/** Components */
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import Projects from './components/projects/Projects';

/** Contexts */
import ProjectState from './context/projects/project-state';
import TaskState from './context/tasks/task-state';
import AlertState from './context/alerts/alert-state';
import AuthState from './context/auth/auth-state';

import authToken from './config/authToken';

/** Valida si hay un token en el localStorage */
const token = localStorage .getItem( 'token' );

if( token ) {
    authToken( token );
}

function App() {

    console .log( 'REACT_APP_BACKEND_URL', process .env .REACT_APP_BACKEND_URL );

  return (
    <ProjectState>  { /** Componente hace disponible el State (Datos) a los componentes hijos */ }
      <TaskState>   { /** Componente hace disponible el State (Datos) a los componentes hijos */ }
        <AlertState>{ /** Componente hace disponible el State (Datos) a los componentes hijos */ }
          <AuthState>{ /** Componente hace disponible el State (Datos) a los componentes hijos */ }
            <Router>
                <Switch>
                    <Route exact path="/" component={ LogIn } />
                    <Route exact path="/sign-up" component={ SignUp } />
                    <Route exact path="/projects" component={ Projects } />
                </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
