import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Formulario.css';
import Topo from '../topo/Topo';
import Rodape from '../rodape/Rodape';
import Loader from '../loader/loader';

const Formulario = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { action } = location.state || {};

  const [formData, setFormData] = useState({
    ds_produto: '',
    dt_compra: '',
    cd_produto: '',
    qt_quantidade: '',
    vl_unitario: '',
    vl_total: '',
    ds_observacao: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id && action === 'edit') {
      setIsLoading(true);
      axios.get(`http://127.0.0.1:8000/api/produto/${id}`)
        .then(response => {
          setFormData(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching product data:', error);
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
        await axios.put(`http://127.0.0.1:8000/api/produto/${id}`, formData);
        alert('Product updated successfully!');
        navigate(-1);
      } 
    } catch (error) {
      console.error('Error submitting form:', error);
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

  const handleDelete = async () => {
    setIsLoading(true);

    try {
      await axios.delete(`http://127.0.0.1:8000/api/produto/${id}`);
      alert('Product deleted successfully!');
      navigate(-1);
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div>
        <div className='success-message'>
          {isLoading ? (
            <div className='main-NovoCad'>
                <Loader />
            </div>
          ) : (
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
          )}
        </div>
      </div>
    );
  }

  if (action === 'delete') {
    return (
      <div className='main-container'>
        <Topo />
          <div className='confirmation-container'>
            <h3>Realmente deseja excluir o produto?</h3>
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
            <label htmlFor="ds_produto">Produto:</label>
            <input type="text" id="ds_produto" name="ds_produto" value={formData.ds_produto} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="dt_compra">Data da compra:</label>
            <input type="date" id="dt_compra" name="dt_compra" value={formData.dt_compra} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="cd_produto">Código do produto:</label>
            <input type="number" id="cd_produto" name="cd_produto" value={formData.cd_produto} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="qt_quantidade">Quantidade:</label>
            <input type="number" id="qt_quantidade" name="qt_quantidade" value={formData.qt_quantidade} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="vl_unitario">Valor unitário:</label>
            <input type="number" id="vl_unitario" name="vl_unitario" step="0.01" value={formData.vl_unitario} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="vl_total">Valor total:</label>
            <input type="number" id="vl_total" name="vl_total" step="0.01" value={formData.vl_total} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="ds_observacao">Mensagem:</label>
            <textarea id="ds_observacao" name="ds_observacao" value={formData.ds_observacao} onChange={handleChange}></textarea>
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

export default Formulario;
