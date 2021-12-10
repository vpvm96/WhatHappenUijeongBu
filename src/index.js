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
import BoardService from './service/boardService';

const baseURL = process.env.REACT_APP_BASE_URL;
const tokenStorage = new TokenStorage();
const httpClient = new HttpClient(baseURL, tokenStorage);
const httpClientFetch = new HttpClientFetch(baseURL);
const authErrorEventBus = new AuthErrorEventBus();
const authService = new AuthService(httpClientFetch, tokenStorage);
const socketClient = new Socket(baseURL, () => tokenStorage.getToken());
const snsService = new SnsService(httpClientFetch, tokenStorage, socketClient);
const boardService = new BoardService(httpClient, baseURL, tokenStorage);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider
        authService={authService}
        authErrorEventBus={authErrorEventBus}
      >
        <App snsService={snsService} boardService={boardService} />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);