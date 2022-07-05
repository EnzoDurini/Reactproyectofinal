import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

initializeApp({
  apiKey: "AIzaSyA4Jrq0iszy95Mf0HfV2vSN8-giwyW0vAM",
  authDomain: "proyectocoder-c74a5.firebaseapp.com",
  projectId: "proyectocoder-c74a5",
  storageBucket: "proyectocoder-c74a5.appspot.com",
  messagingSenderId: "477268030733",
  appId: "1:477268030733:web:332be8ef9d373dae7c6c44"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
