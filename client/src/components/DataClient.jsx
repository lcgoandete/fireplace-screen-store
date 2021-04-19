import React from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';

import './css/ClientData.css';
import { handleZipMask, handlePhoneMask } from '../services/inputMasks';
import { setDataClient } from '../redux/actions/dataClient';
import { verifyName, verifyEmail, verifyPhone, verifyAddress, verifyNumber,
  verifyDistrict, verifyCep, verifyCity, verifyState } from '../services/verifyInputs';

class DataClient extends React.Component {
  constructor(props) {
    super(props);

    this.handleChanges = this.handleChanges.bind(this);
    this.getDataClient = this.getDataClient.bind(this);
    this.createOrder = this.createOrder.bind(this);

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
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.getDataClient());
  }

  getDataClient() {
    const { addDataClient } = this.props;
    addDataClient(this.state);
    this.validateContent();
  }

  createOrder() {
    const { product, shipping, dataClient } = this.props;
    const orderData = {};
    orderData.product = product;
    orderData.shipping = shipping;
    orderData.dataClient = dataClient;
  }

  validateContent() {
    const { fullName, email, cellPhone, street, number,
      district, cep, city, state } = this.state;
    const validName = verifyName(fullName);
    const validEmail = verifyEmail(email);
    const validPhone = verifyPhone(cellPhone);
    const validAddress = verifyAddress(street);
    const validNumber = verifyNumber(number);
    const validDistrict = verifyDistrict(district);
    const validCep = verifyCep(cep);
    const validCity = verifyCity(city);
    const validState = verifyState(state);
    const isValid = (validName && validEmail && validPhone && validAddress && validNumber
      && validDistrict && validCep && validCity && validState);
    if (isValid) {
      this.setState({
        disableButton: false,
      });
    } else {
      this.setState({
        disableButton: true,
      });
    }
  }

  render() {
    const { fullName, email, cellPhone, street, number,
      district, cep, city, state, disableButton } = this.state;
    return (
      <section className="client-data">
        <label htmlFor="full-name">
          Nome Completo:
          <input className="input-client-data" type="text" name="fullName" id="full-name" value={ fullName } onChange={ this.handleChanges } required />
        </label>
        <label htmlFor="email">
          E-mail:
          <input className="input-client-data" type="email" name="email" id="email" value={ email } onChange={ this.handleChanges } required />
        </label>
        <label htmlFor="cellPhone">
          Telefone Celular:
          <input className="input-client-data" type="text" name="cellPhone" id="cellPhone" value={ cellPhone } onChange={ this.handleChanges } onKeyUp={ handlePhoneMask } placeholder="(99) 99999-9999" required />
        </label>
        <label htmlFor="street">
          Logradouro:
          <input className="input-client-data" type="text" name="street" id="street" value={ street } onChange={ this.handleChanges } required />
        </label>
        <label htmlFor="number">
          Número:
          <input className="input-client-data" type="text" name="number" id="number" value={ number } onChange={ this.handleChanges } required />
        </label>
        <label htmlFor="district">
          Bairro:
          <input className="input-client-data" type="text" name="district" id="district" value={ district } onChange={ this.handleChanges } required />
        </label>
        <label htmlFor="zipCode">
          Cep:
          <input className="input-client-data" type="text" name="zipCode" id="zipCode" value={ cep } onChange={ this.handleChanges } onKeyUp={ handleZipMask } placeholder="99999-999" required />
        </label>
        <label htmlFor="city">
          Cidade:
          <input className="input-client-data" type="text" name="city" id="city" value={ city } onChange={ this.handleChanges } required />
        </label>
        <label htmlFor="state">
          Estado:
          <input className="input-client-data" type="text" name="state" id="state" value={ state } onChange={ this.handleChanges } required />
        </label>
        <button type="button" onClick={ this.createOrder() } disabled={ disableButton }>Gerar Pedido</button>
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
  product: object,
  shipping: object,
  dataClient: object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(DataClient);
