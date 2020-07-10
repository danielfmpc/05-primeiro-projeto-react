import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Repository from '../pages/repository';

const App: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository" component={Repository} />
  </BrowserRouter>
);

export default App;
