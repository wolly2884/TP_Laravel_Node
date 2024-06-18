import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';
import Relatorio from './pages/relatorio/Relatorio';
import ListaCliente from './pages/ListaCliente/ListaCliente';
import Cliente from './pages/cliente/Cliente';
import EditDelCliente from './components/clientes/EditDelCliente'
import EditDelFormulario from './components/forms/EditDelFormulario'
import Loader from './components/loader/loader'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"         element={<Home />} />
        <Route path="/cliente"        element={<Cliente />} />
        <Route path="/cadastro/:id"   element={<Cadastro />} />
        <Route path="/relatorio"      element={<Relatorio />} />
        <Route path="/relatoriocli"   element={<ListaCliente />} />
        <Route path="/EditDelCliente/:id"   element={<EditDelCliente />} />
        <Route path="/EditDelFormulario/:id"   element={<EditDelFormulario />} />
        <Route path="/Loader"   element={<Loader />} />

      </Routes>
    </Router>
  );
}

export default App;
