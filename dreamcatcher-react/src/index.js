import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-lalamaster.eu.auth0.com"
    clientId="WkPY0andi3uY1CntN2Wqo1s2550hKz0X"
    redirectUri={window.location.origin}
  >
    <App/>
  </Auth0Provider>
);
