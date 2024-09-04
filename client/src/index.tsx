import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DeviceProvider } from './components/contexts/DeviceContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DeviceProvider>
    <App />
  </DeviceProvider>  
);
