import React, { useState } from 'react';
import axios from 'axios';
import './Formulario.css';

const Formulario = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setIsSubmitted(true);
    setIsLoading(true); // Update isLoading to true before making the request

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/produto/', {
        ds_produto: formData.get('ds_produto'),
        dt_compra: formData.get('dt_compra'),
        cd_produto: formData.get('cd_produto'),
        qt_quantidade: formData.get('qt_quantidade'),
        vl_unitario: formData.get('vl_unitario'),
        vl_total: formData.get('vl_total'),
        ds_observacao: formData.get('ds_observacao'),
      });
      console.log('Response:', response);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false); // Update isLoading to false after the request is completed
    }
  };

  if (isSubmitted) {
    return (
      <div className='container'>
        <div className='success-message'>
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <>
            <div className='main-NovoCad'>
              <div className='confirmation-container'>
                <h3>Cadastro realizado com sucesso!</h3>
                <button onClick={() => setIsSubmitted(false)} className='custom-button green'>Novo Cadastro</button>
              </div>
            </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
      <section className='frame2'>
        <form className='frame3' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="ds_produto">Produto:</label>
            <input type="text" id="ds_produto" name="ds_produto" required />
          </div>
          <div>
            <label htmlFor="dt_compra">Data da compra:</label>
            <input type="datetime-local" id="dt_compra" name="dt_compra" required />
          </div>
          <div>
            <label htmlFor="cd_produto">Código do produto:</label>
            <input type="number" id="cd_produto" name="cd_produto" required />
          </div>
          <div>
            <label htmlFor="qt_quantidade">Quantidade:</label>
            <input type="number" id="qt_quantidade" name="qt_quantidade" required />
          </div>
          <div>
            <label htmlFor="vl_unitario">Valor unitário:</label>
            <input type="number" id="vl_unitario" name="vl_unitario" step="0.01" required />
          </div>
          <div>
            <label htmlFor="vl_total">Valor total:</label>
            <input type="number" id="vl_total" name="vl_total" step="0.01" required />
          </div>
          <div>
            <label htmlFor="ds_observacao">Mensagem:</label>
            <textarea id="ds_observacao" name="ds_observacao"></textarea>
          </div> 
          <div className='button-container'>
            <button className='custom-button green' type='submit'>Enviar</button>
          </div>    
        </form>
      </section>       
    </div>
  );
}

export default Formulario;
