import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

// redux store
import { Provider } from 'react-redux';
import { store } from './reudux/configStore';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
