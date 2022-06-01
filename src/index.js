import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';

const isLoading = false

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App isLoading={isLoading} />
  </React.StrictMode>
);