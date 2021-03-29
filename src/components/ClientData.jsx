import React from 'react';
import './ClientData.css'

class ClientData extends React.Component {
  render() {
    return (
      <section className="client-data">
       <form>
         <label htmlFor="nome">
           Nome Completo
           <input className="input-client-data" type="text" name="" id="nome"/> 
         </label>

         <label htmlFor="logradouro">
           Logradouro
           <input className="input-client-data" type="text" name="" id="logradouro"/> 
         </label>

         <label htmlFor="numero">
           Número
           <input className="input-client-data" type="text" name="" id="numero"/> 
         </label>

         <label htmlFor="bairro">
           Bairro
           <input className="input-client-data" type="text" name="" id="bairro"/> 
         </label>

         <label htmlFor="cep">
           Cep
           <input className="input-client-data" type="text" name="" id="cep"/> 
         </label>

         <label htmlFor="cidade">
           Cidade
           <input className="input-client-data" type="text" name="" id="cidade"/> 
         </label>

         <label htmlFor="estado">
           Estado
           <input className="input-client-data" type="text" name="" id="estado"/> 
         </label>
       </form>
      </section>
    );
  }
}

export default ClientData;