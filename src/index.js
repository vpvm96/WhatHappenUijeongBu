import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { AuthErrorEventBus } from './context/authContext';
import { AuthProvider } from './context/authContext';
import SnsService from './service/snsService';
import HttpClient from './network/httpClient';
import TokenStorage from './tokenStorage/tokenStorage';
import AuthService from './service/authService';
import Socket from './network/socket';
import HttpClientFetch from './network/httpClientFetch';

const baseURL = process.env.REACT_APP_BASE_URL;
const tokenStorage = new TokenStorage();
const httpClient = new HttpClient(baseURL);
const httpClientFetch = new HttpClientFetch(baseURL);
const authErrorEventBus = new AuthErrorEventBus();
const authService = new AuthService(httpClientFetch, tokenStorage);
const socketClient = new Socket(baseURL, () => tokenStorage.getToken());
const snsService = new SnsService(httpClientFetch, tokenStorage, socketClient);

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