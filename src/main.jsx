import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Veiculo from './components/Veiculo';
import Venda from './components/Venda';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Veiculo />
    {/* <Venda /> */}
  </React.StrictMode>
);