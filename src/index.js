import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import {Provider} from 'react-redux'
import store from "./redux/store";
import {BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Provider store={store}>
              <App/>
          </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
