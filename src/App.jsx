import React, { Component }from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'

import About from './components/About';
import Home from './components/Home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
)

export default hot(App)