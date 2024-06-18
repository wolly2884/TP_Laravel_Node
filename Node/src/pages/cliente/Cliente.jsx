import React from 'react';
import Topo from '../../components/topo/Topo';
import Rodape from '../../components/rodape/Rodape';
import CadastroCliente from '../../components/clientes/CadastroCliente';
import './Cliente.css';

function Cliente() {
  return (
    <div>
      <Topo />
        <div className='formulario-container'>
        <CadastroCliente />
        </div>
      <Rodape />
    </div>
  );
}

export default Cliente;
