import React from 'react';
import Topo from '../../components/topo/Topo';
import Rodape from '../../components/rodape/Rodape';
import CadastroCliente from '../../components/clientes/EditDelCliente';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './Cliente.css';

function Cliente() {
  const { id } = useParams();
  const location = useLocation();
  const { action } = location.state || {};

  return (
    <div>
      <Topo />
      <div className='formulario-container'>
        <CadastroCliente id={id} action={action} />
      </div>
      <Rodape />
    </div>
  );
}

export default Cliente;
