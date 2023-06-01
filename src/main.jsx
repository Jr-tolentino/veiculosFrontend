import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Veiculo from './components/Veiculo';
import NavBar from './components/NavBar';
import Venda from './components/Venda';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main-div'>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path='/veiculos' element={<Veiculo />}/>
        <Route path='/' element={<h1>Ola</h1>}/>
        </Routes>
    </BrowserRouter>
    {/* <Venda /> */}
    </div>
   
  </React.StrictMode>
);