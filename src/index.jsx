import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';

import App from '@client/App'
import store from '@client/store'

const Root =
  <Provider store={store}>
    <App />
  </Provider>

render(Root, document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}