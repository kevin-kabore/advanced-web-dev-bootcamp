import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer, { getCurrentUser } from '../reducers';
import { authenticateUser } from '../actions';
import App from './App';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);

let user = getCurrentUser();
//
if (user) {
  store.dispatch(authenticateUser(user));
}

const Boiler = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

export default Boiler;
