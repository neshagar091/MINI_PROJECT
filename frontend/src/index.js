import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import Navbar from './Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Auth0Provider 
  domain="dev-c6e3hxzu5t2s1edx.us.auth0.com"
  clientId="BjpAwJRU3YraYCjYqvNs5sJfLVwVLYje"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
  <App/>
  </Auth0Provider>,
  </Provider>
);
reportWebVitals();