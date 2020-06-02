import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App.js';
import UserPhotos from './UserPhotos.js';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/photos">
            <UserPhotos />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Routes;
