import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './app/layout/App';
import { store, StoreContext } from './stores/store';

ReactDOM.render(
  <React.StrictMode>
      <StoreContext.Provider value={store}>
            <App />
      </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
