import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './app/layout/App';
import { store, StoreContext } from './stores/store';
import {createBrowserHistory} from 'history';

import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datepicker/dist/react-datepicker.min.css';
import './app/layout/styles.css';

export const history = createBrowserHistory();

ReactDOM.render(
      <StoreContext.Provider value={store}>
          {/*<BrowserRouter>*/}
          {/*  <App />*/}
          {/*</BrowserRouter>*/}
          <Router history={history}>
            <App />
          </Router>
      </StoreContext.Provider>,
  document.getElementById('root')
);
