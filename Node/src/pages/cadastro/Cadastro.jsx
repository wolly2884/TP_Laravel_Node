import React from 'react';
import Topo from '../../components/topo/Topo';
import Rodape from '../../components/rodape/Rodape';
import Formulario from '../../components/forms/Formulario';
import CadastroCliente from '../../components/clientes/CadastroCliente';

import './Cadastro.css';
import { useParams} from 'react-router-dom';

function Cadastro() {
  const { id } = useParams();
  return (
    <div className='cadastro-container'>
      <Topo />
      <div className='formulario-container'>
        {id == 1 && <Formulario />}
        {id == 2 && <CadastroCliente />}
      </div>
      <Rodape />
    </div>
  );
}

export default Cadastro;
