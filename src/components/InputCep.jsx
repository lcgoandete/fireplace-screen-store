// TALVES NAO SEJA USADO

import React from 'react';

class InputCep extends React.Component {
  constructor(props) {
    super(props);

    this.handleChanges = this.handleChanges.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    this.state = {
      cep: '',
    };
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleKeyUp({ target }) {
    target.maxLength = 9;
    let valor = target.value;
    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/^(\d{5})(\d)/, '$1-$2');
    target.value = valor;
  }

  render() {
    const { cep } = this.state;
    return (
      <div>
        <label htmlFor="cep">
          Cep:
          <input className="input-client-data" type="text" name="cep" id="cep" value={ cep } onChange={ this.handleChanges } onKeyUp={ this.handleKeyUp } placeholder="99999-999" required />
        </label>
      </div>
    );
  }
}

export default InputCep;
