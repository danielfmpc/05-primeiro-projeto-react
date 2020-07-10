import React from 'react';
import { Switch, Route } from "react-router-dom";

import Dashboard from '../dashboard';
import Repository from '../repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} />
  </Switch>
)

export default Routes;

