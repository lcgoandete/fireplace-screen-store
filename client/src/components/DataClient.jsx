import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import './css/ClientData.css';
import { handleZipMask, handlePhoneMask } from '../services/inputMasks';
import { setDataClient } from '../redux/actions/dataClient';
import verify from '../services/verifyInputs';

class DataClient extends React.Component {
  constructor(props) {
    super(props);

    this.handleChanges = this.handleChanges.bind(this);

    this.state = {
      fullName: '',
      email: '',
      cellPhone: '',
      street: '',
      number: '',
      district: '',
      zipCode: '',
      city: '',
      state: '',
      disableButton: true,
    };
  }

  handleChanges({ target }) {
    if (target.name === 'cellPhone') {
      handlePhoneMask(target);
    }
    if (target.name === 'zipCode') {
      handleZipMask(target);
    }
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validateContent(target));
  }

  validateContent(target) {
    const { addDataClient } = this.props;
    if (verify[target.name](target.value)) {
      target.classList.remove('invalid');
    }
    const isValid = Object.entries(this.state).reduce((acc, [name, value]) => {
      if (name !== 'disableButton') {
        const valid = verify[name](value);
        return acc && valid;
      }
      return acc;
    }, true);
    if (isValid) {
      this.setState({
        disableButton: false,
      }, () => addDataClient(this.state));
    } else {
      this.setState({
        disableButton: true,
      }, () => addDataClient(this.state));
    }
  }

  feedbackInput({ target }) {
    if (!verify[target.name](target.value)) {
      target.classList.add('invalid');
    }
  }

  render() {
    const { fullName, email, cellPhone, street, number,
      district, cep, city, state } = this.state;
    return (
      <section className="client-data">
        <label htmlFor="full-name">
          Nome Completo:
          <input className="input-client-data" onBlur={ this.feedbackInput } type="text" name="fullName" id="full-name" value={ fullName } onChange={ this.handleChanges } required />
        </label>
        <label htmlFor="email">
          E-mail:
          <input className="input-client-data" onBlur={ this.feedbackInput } type="email" name="email" id="email" value={ email } onChange={ this.handleChanges } required />
        </label>
        <label htmlFor="cellPhone">
          Telefone Celular:
          <input className="input-client-data" onBlur={ this.feedbackInput } type="text" name="cellPhone" id="cellPhone" value={ cellPhone } onChange={ this.handleChanges } placeholder="(99) 99999-9999" required />
        </label>
        <label htmlFor="street">
          Logradouro:
          <input className="input-client-data" onBlur={ this.feedbackInput } type="text" name="street" id="street" value={ street } onChange={ this.handleChanges } required />
        </label>
        <label htmlFor="number">
          Número:
          <input className="input-client-data" onBlur={ this.feedbackInput } type="text" name="number" id="number" value={ number } onChange={ this.handleChanges } required />
        </label>
        <label htmlFor="district">
          Bairro:
          <input className="input-client-data" onBlur={ this.feedbackInput } type="text" name="district" id="district" value={ district } onChange={ this.handleChanges } required />
        </label>
        <label htmlFor="zipCode">
          Cep:
          <input className="input-client-data" onBlur={ this.feedbackInput } type="text" name="zipCode" id="zipCode" value={ cep } onChange={ this.handleChanges } placeholder="99999-999" required />
        </label>
        <label htmlFor="city">
          Cidade:
          <input className="input-client-data" onBlur={ this.feedbackInput } type="text" name="city" id="city" value={ city } onChange={ this.handleChanges } required />
        </label>
        <label htmlFor="state">
          Estado:
          <input className="input-client-data" onBlur={ this.feedbackInput } type="text" name="state" id="state" value={ state } onChange={ this.handleChanges } required />
        </label>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDataClient: (dataClient) => dispatch(setDataClient(dataClient)),
});

const mapStateToProps = (state) => ({
  shipping: state.shipping.shipping,
  product: state.product,
  dataClient: state.dataClient.dataClient,
});

DataClient.propTypes = {
  addDataClient: func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(DataClient);
