import React from 'react';
import './Shipping.css'

class Shipping extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="cep-shipping">
          Calcular Frete
          <input className="input-shipping" type="text" name="" id="cep-shipping"/>
          <button type="button">OK</button>
        </label>
        <div>R$ 150,00 - Correios PAC    - 10 Dias</div>
        <div>R$ 180,99 - Correios SEDEX  - 07 Dias</div>
        <div>R$ 100,50 - JadLog .Package - 20 Dias</div>
        <div>R$ 120,00 - JadLog .Com     - 15 Dias</div>
      </section>
    );
  }
}

export default Shipping;