import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
// import Store from './store.js';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { AuthErrorEventBus } from './context/authContext';
import { AuthProvider } from './context/authContext';
import SnsService from './service/snsService';
import HttpClient from './network/httpClient';
import TokenStorage from './tokenStorage/tokenStorage';
import AuthService from './service/authService';
import Socket from './network/socket';

const baseURL = process.env.REACT_APP_BASE_URL;
const tokenStorage = new TokenStorage();
const httpClient = new HttpClient(baseURL);
const authErrorEventBus = new AuthErrorEventBus();
const authService = new AuthService(httpClient, tokenStorage);
const socketClient = new Socket(baseURL, () => tokenStorage.getToken());
const snsService = new SnsService(httpClient, tokenStorage, socketClient);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider
        authService={authService}
        authErrorEventBus={authErrorEventBus}
      >
        <App snsService={snsService} />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

