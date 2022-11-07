import './App.css';
import Destino from './pages/Destino/Destino';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import CadastrarForm from './pages/Cadastrar/CadastrarForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Promocoes } from './pages/Promocoes/Promocoes';
import { themeContext } from './context';
import React, { useContext } from 'react';


function App() {
  const theme = useContext(themeContext);
  const logado = theme.state.darkMode;

  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/promocoes' element={<Promocoes />} />
        <Route path='/destino' element={<Destino />} />
        <Route path='/user' element={<User />} />
        <Route path='/Cadastro' element={<CadastrarForm />} />
      </Routes>
    </Router>
  );
}

export default App;
