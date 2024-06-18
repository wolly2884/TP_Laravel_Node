import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Topo from '../../components/topo/Topo';
import Rodape from '../../components/rodape/Rodape';
import '../../components/css/Relatorio.css';

import { useNavigate } from 'react-router-dom';

function Relatorio() {
  const [compras, setCompras] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const handleAlt = (id) => {
    navigate(`/EditDelCliente/${id}`, { state: { action: 'edit' } });
  };

  const handleDel = (id) => {
    navigate(`/EditDelCliente/${id}`, { state: { action: 'delete' } });
  };

  const getinfo = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/cliente/');
      setCompras(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getinfo();
  }, []);

  return (
    <div>
      <Topo />
      <section className='pedidos'>
        <div className='loader-container'>
          {isLoading && <div className="loader"></div>}
          {isLoading && <p className="carrega">Carregando os Dados...</p>}
        </div>
        {!isLoading && (
          compras.length > 0 && (
            <>
              <div className='table-container'>
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Nascimento</th>
                      <th>CPF</th>
                      <th>RG</th>
                      <th>Emissor</th>
                      <th>Endereço</th>
                      <th>CEP</th>
                      <th>Numero</th>
                      <th>Telefone</th>
                      <th>Email</th>
                      <th>Compemento</th>
                      <th>Editar/Deletar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compras.map((compra, index) => (
                      <tr key={index}>
                        <td>{compra.nm_cliente}</td>
                        <td>{new Date(compra.dt_nascimento).toLocaleDateString()}</td>
                        <td>{compra.cd_cpf}</td>
                        <td>{compra.cd_registro_geral}</td>
                        <td>{compra.ds_orgao_emissor}</td>
                        <td>{compra.ds_lougradouro_cliente}</td>
                        <td>{compra.cd_cep_cliente}</td>
                        <td>{compra.cd_numero_lougradouro_cliente}</td>
                        <td>{compra.ds_telefone_cliente}</td>
                        <td>{compra.ds_email_cliente}</td>
                        <td>{compra.ds_complemento_lougradouro_cliente}</td>
                        <td className='confirmation'>
                          <button title='Alterar' onClick={() => handleAlt(compra.id)} className='edit-button'>Alterar</button> 
                          <button title='Deletar' onClick={() => handleDel(compra.id)} className='delete-button'>Deletar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default Relatorio;
