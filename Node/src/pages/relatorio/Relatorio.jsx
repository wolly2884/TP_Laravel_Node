import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Topo from '../../components/topo/Topo';
import Rodape from '../../components/rodape/Rodape';
import '../../components/css/Relatorio.css';

function Relatorio() {
  const [compras, setCompras] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initially set to true
  const navigate = useNavigate();

  const handleAlt = (id) => {
    navigate(`/EditDelFormulario/${id}`, { state: { action: 'edit' } });
  };

  const handleDel = (id) => {
    navigate(`/EditDelFormulario/${id}`, { state: { action: 'delete' } });
  };

  const getinfo = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/produto/');
      console.log(response.data);
      setCompras(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false); // Set to false after fetching data
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
          {isLoading && <p className="carrega" >Carregando os Dados...</p>}
        </div>
        {!isLoading && (
          compras.length > 0 && (
            <>
              <div className='table-container'>
                <table>
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th>Data da Compra</th>
                      <th>Código do Produto</th>
                      <th>Quantidade</th>
                      <th>Preço Unitário</th>
                      <th>Preço Total</th>
                      <th>Mensagem do Cliente</th>
                      <th>Editar/Deletar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compras.map((compra, index) => (
                      <tr key={index}>
                        <td>{compra.ds_produto}</td>
                        <td>{new Date(compra.dt_compra).toLocaleDateString()}</td>
                        <td>{compra.cd_produto}</td>
                        <td>{compra.qt_quantidade}</td>
                        <td>{compra.vl_unitario}</td>
                        <td>{compra.vl_total}</td>
                        <td>{compra.ds_observacao}</td>
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
