import React from 'react';
import { Route } from 'react-router';
import App from '../App';
import Home from '../App/views/Home';
import TrainerDetails from '../App/views/TrainerDetails';

var routes = (
  <Route handler={App} >
    <Route path="/" handler={Home} />
    <Route path="/trainers/:id" handler={TrainerDetails} />
  </Route>
);

export default routes;
