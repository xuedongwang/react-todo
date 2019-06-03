import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from '@/reducers';
import App from './App';
import '@/assets/scss/index.scss';

const logger = createLogger({
  collapsed: true,
  duration: true,
  level: 'warn',
  diff: true
});

let store = DEVELOPMENT ? createStore(
  rootReducers,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  )
) : createStore(
  rootReducers
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.querySelector('#app')
);
