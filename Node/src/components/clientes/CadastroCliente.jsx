import React, { useState } from 'react';
import axios from 'axios';
import '../forms/Formulario.css';

const CadastroCliente = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setIsSubmitted(true);
    setIsLoading(true); // Update isLoading to true before making the request

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/cliente/', {
        nm_cliente:                         formData.get('nm_cliente'),
        dt_nascimento:                      formData.get('dt_nascimento'),
        cd_cpf:                             formData.get('cd_cpf'),
        cd_registro_geral:                  formData.get('cd_registro_geral'),
        ds_orgao_emissor:                   formData.get('ds_orgao_emissor'),
        ds_lougradouro_cliente:             formData.get('ds_lougradouro_cliente'),
        cd_cep_cliente:                     formData.get('cd_cep_cliente'),
        cd_numero_lougradouro_cliente:      formData.get('cd_numero_lougradouro_cliente'),
        ds_telefone_cliente:                formData.get('ds_telefone_cliente'),
        ds_email_cliente:                   formData.get('ds_email_cliente'),
        ds_complemento_lougradouro_cliente: formData.get('ds_complemento_lougradouro_cliente'),
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
            <label htmlFor="nm_cliente">Nome:</label>
            <input type="text" id="nm_cliente" name="nm_cliente" required />
          </div>
          <div>
            <label htmlFor="dt_nascimento">Data de Nascimento:</label>
            <input type="Datetime-local" id="dt_nascimento" name="dt_nascimento" required />
          </div>
          <div>
            <label htmlFor="cd_cpf">Cpf:</label>
            <input type="number" id="cd_cpf" name="cd_cpf" required />
          </div>
          <div>
            <label htmlFor="cd_registro_geral">RG:</label>
            <input type="text" id="cd_registro_geral" name="cd_registro_geral" required />
          </div>
          <div>
            <label htmlFor="ds_orgao_emissor">Orgão Emissor:</label>
            <input type="text" id="ds_orgao_emissor" name="ds_orgao_emissor" required />
          </div>
          <div>
            <label htmlFor="ds_email_cliente">Email:</label>
            <input type="text" id="ds_email_cliente" name="ds_email_cliente" required />
          </div>
          <div>
            <label htmlFor="ds_telefone_cliente">Telefone:</label>
            <input type="text" id="ds_telefone_cliente" name="ds_telefone_cliente"  required />
          </div>
          <div>
            <label htmlFor="ds_lougradouro_cliente">Endereço:</label>
            <input id="ds_lougradouro_cliente" name="ds_lougradouro_cliente"></input>
          </div> 
          <div>
            <label htmlFor="cd_numero_lougradouro_cliente">Numero Endereço:</label>
            <input id="cd_numero_lougradouro_cliente" name="cd_numero_lougradouro_cliente"></input>
          </div> 
          <div>
            <label htmlFor="cd_cep_cliente">CEP:</label>
            <input id="cd_cep_cliente" name="cd_cep_cliente"></input>
          </div>
          <div>
            <label htmlFor="ds_complemento_lougradouro_cliente">Complemento endereço:</label>
            <input id="ds_complemento_lougradouro_cliente" name="ds_complemento_lougradouro_cliente"></input>
          </div>
          <div className='button-container'>
            <button className='custom-button green' type='submit'>Enviar</button>
          </div>    
        </form>
      </section>       
    </div>
  );
}

export default CadastroCliente;

