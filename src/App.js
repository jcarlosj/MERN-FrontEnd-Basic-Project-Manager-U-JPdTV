import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';      // Dependencies

/** Components */
import LogIn from './components/auth/LogIn';
import SignIn from './components/auth/SignIn';
import Projects from './components/projects/Projects';

/** Contexts */
import ProjectState from './context/projects/project-state';
import TaskState from './context/tasks/task-state';
import AlertState from './context/alerts/alert-state';

function App() {
  return (
    <ProjectState>  { /** Componente hace disponible el State (Datos) a los componentes hijos */ }
      <TaskState>   { /** Componente hace disponible el State (Datos) a los componentes hijos */ }
        <AlertState>{ /** Componente hace disponible el State (Datos) a los componentes hijos */ }
          <Router>
              <Switch>
                  <Route exact path="/" component={ LogIn } />
                  <Route exact path="/sign-in" component={ SignIn } />
                  <Route exact path="/projects" component={ Projects } />
              </Switch>
          </Router>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
