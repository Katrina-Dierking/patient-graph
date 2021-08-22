import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
// import axios from 'axios';
import { reducer } from './redux/reducers/index';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/index'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'https://my-patient-api.herokuapp.com'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware) );
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
