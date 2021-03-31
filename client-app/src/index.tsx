import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './app/layout/App';
import { store, StoreContext } from './stores/store';

ReactDOM.render(
      <StoreContext.Provider value={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </StoreContext.Provider>,
  document.getElementById('root')
);
