import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'

import Home from '@components/Home';

export default hot(() => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
))
