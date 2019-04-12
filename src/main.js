import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from '@/reducers';
import App from './App';
import '@/assets/scss/index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger)
);

let store = createStore(
  rootReducers,
  enhancer
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.querySelector('#app')
);
