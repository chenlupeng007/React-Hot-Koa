import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root'

import Home from '@components/Home';

import store from '@client/store'

export default hot(() => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>
))



