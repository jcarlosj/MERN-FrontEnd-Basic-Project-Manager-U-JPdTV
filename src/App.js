import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';      // Dependencies

/** Components */
import LogIn from './components/auth/LogIn';
import SignIn from './components/auth/SignIn';
import Projects from './components/projects/Projects';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={ LogIn } />
            <Route exact path="/sign-in" component={ SignIn } />
            <Route exact path="/projects" component={ Projects } />
        </Switch>
    </Router>
  );
}

export default App;
