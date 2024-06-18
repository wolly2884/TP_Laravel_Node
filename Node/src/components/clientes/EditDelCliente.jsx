import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CadastroCliente.css';
import Topo from '../topo/Topo';
import Rodape from '../rodape/Rodape';
import Loader from '../loader/loader';

const CadastroCliente = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { action } = location.state || {};

  const [formData, setFormData] = useState({
    nm_cliente: '',
    dt_nascimento: '',
    cd_cpf: '',
    cd_registro_geral: '',
    ds_orgao_emissor: '',
    ds_lougradouro_cliente: '',
    cd_cep_cliente: '',
    cd_numero_lougradouro_cliente: '',
    ds_telefone_cliente: '',
    ds_email_cliente: '',
    ds_complemento_lougradouro_cliente: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id && action === 'edit') {
      setIsLoading(true);
      axios.get(`http://127.0.0.1:8000/api/cliente/${id}`)
        .then(response => {
          setFormData(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching client data:', error);
          setIsLoading(false);
        });
    }
  }, [id, action]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setIsLoading(true);

    try {
      if (action === 'edit') {
        await axios.put(`http://127.0.0.1:8000/api/cliente/${id}`, formData);
        alert('Client updated successfully!');
      } else if (action === 'delete') {
        await axios.delete(`http://127.0.0.1:8000/api/cliente/${id}`);
        alert('Client deleted successfully!');
      } else {
        await axios.post('http://127.0.0.1:8000/api/cliente/', formData);
        alert('Client created successfully!');
      }
      navigate(-1);
    } catch (error) {
      console.error('Error processing client:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className='main-NovoCad'>
        <Loader />
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div>
        <div className='success-message'>
          <>
            <div className='main-NovoCad'>
              <Topo />
              <div className='confirmation-container'>
                <h3>Operação realizada com sucesso!</h3>
                <button onClick={() => setIsSubmitted(false)} className='custom-button green'>Novo Cadastro</button>
              </div>
            </div>
            <div className='Rodape'>
              <Rodape />
            </div>
          </>
        </div>
      </div>
    );
  }

  const handleDelete = async () => {
    setIsLoading(true);

    try {
      await axios.delete(`http://127.0.0.1:8000/api/cliente/${id}`);
      alert('Client deleted successfully!');
      navigate(-1);
    } catch (error) {
      console.error('Error deleting client:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (action === 'delete') {
    return (
      <div className='main-container'>
        <Topo />
        <div className='confirmation-container'>
          <h3>Realmente deseja excluir o cliente?</h3>
          <button onClick={handleDelete} className='custom-button red'>Sim, Deletar</button> 
          <button onClick={() => navigate(-1)} className='custom-button green'>Cancelar</button>
        </div>
        <Rodape />
      </div>
    );
  }

  return (
    <div className='main-container'>
      <Topo />
      <div className='scrollable-container'>
        <section className='frame2'>
          <form className='frame3' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nm_cliente">Nome:</label>
              <input type="text" id="nm_cliente" name="nm_cliente" value={formData.nm_cliente} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="dt_nascimento">Data de Nascimento:</label>
              <input type="date" id="dt_nascimento" name="dt_nascimento" value={formData.dt_nascimento} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="cd_cpf">Cpf:</label>
              <input type="number" id="cd_cpf" name="cd_cpf" value={formData.cd_cpf} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="cd_registro_geral">RG:</label>
              <input type="text" id="cd_registro_geral" name="cd_registro_geral" value={formData.cd_registro_geral} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="ds_orgao_emissor">Orgão Emissor:</label>
              <input type="text" id="ds_orgao_emissor" name="ds_orgao_emissor" value={formData.ds_orgao_emissor} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="ds_email_cliente">Email:</label>
              <input type="email" id="ds_email_cliente" name="ds_email_cliente" value={formData.ds_email_cliente} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="ds_telefone_cliente">Telefone:</label>
              <input type="text" id="ds_telefone_cliente" name="ds_telefone_cliente" value={formData.ds_telefone_cliente} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="ds_lougradouro_cliente">Endereço:</label>
              <input type="text" id="ds_lougradouro_cliente" name="ds_lougradouro_cliente" value={formData.ds_lougradouro_cliente} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="cd_numero_lougradouro_cliente">Numero Endereço:</label>
              <input type="text" id="cd_numero_lougradouro_cliente" name="cd_numero_lougradouro_cliente" value={formData.cd_numero_lougradouro_cliente} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="cd_cep_cliente">CEP:</label>
              <input type="text" id="cd_cep_cliente" name="cd_cep_cliente" value={formData.cd_cep_cliente} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="ds_complemento_lougradouro_cliente">Complemento Endereço:</label>
              <input type="text" id="ds_complemento_lougradouro_cliente" name="ds_complemento_lougradouro_cliente" value={formData.ds_complemento_lougradouro_cliente} onChange={handleChange} required />
            </div>
            <div className='button-container'>
              <button className='custom-button green' type='submit'>Enviar</button>
              <button type='button' onClick={() => navigate(-1)} className='custom-button red'>Voltar</button>
            </div>
          </form>
        </section>
      </div>
      <Rodape />
    </div>
  );
}

export default CadastroCliente;
