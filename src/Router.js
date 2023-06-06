import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
//  Component
const Homepage = lazy(() => import('./Container/Homepage'));
const Projects = lazy(() => import('./Container/Projects'));
const Skills = lazy(() => import('./Container/Skills'));

function AppRouter() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/skills' component={Skills} />
      </Switch>
    </div>
  );
}

export default AppRouter;
