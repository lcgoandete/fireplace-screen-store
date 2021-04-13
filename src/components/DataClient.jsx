import React from 'react';
import { connect } from 'react-redux';

import { setDataClient } from '../redux/actions/dataClient'
import './css/ClientData.css'

class DataClient extends React.Component {
  constructor(props) {
    super(props);

    this.handleChanges = this.handleChanges.bind(this);
    this.getDataClient = this.getDataClient.bind(this);

    this.state = {
      fullName: '',
      street: '',
      number: '',
      district: '',
      zipCode: '',
      city: '',
      state: '',
    };
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value
    }, () => this.getDataClient());
  }

  getDataClient() {
    const { addDataClient } = this.props;
    addDataClient(this.state);
  }

  render() {
    const { fullName, street, number, district, zipCode, city, state} = this.state;
    return (
      <section className="client-data">
         <label htmlFor="full-name">
           Nome Completo
           <input className="input-client-data" type="text" name="fullName" id="full-name"
             value={ fullName } onChange={ this.handleChanges } required />
         </label>

         <label htmlFor="street">
           Logradouro
           <input className="input-client-data" type="text" name="street" id="street"
             value={ street } onChange={ this.handleChanges } required />
         </label>

         <label htmlFor="number">
           Número
           <input className="input-client-data" type="text" name="number" id="number"
              value={ number } onChange={ this.handleChanges } required />
         </label>

         <label htmlFor="district">
           Bairro
           <input className="input-client-data" type="text" name="district" id="district"
             value={ district } onChange={ this.handleChanges } required />
         </label>

         <label htmlFor="zipCode">
           Cep
           <input className="input-client-data" type="text" name="zipCode" id="zipCode"
             value={ zipCode } onChange={ this.handleChanges } required />
         </label>

         <label htmlFor="city">
           Cidade
           <input className="input-client-data" type="text" name="city" id="city"
             value={ city } onChange={ this.handleChanges } required />
         </label>

         <label htmlFor="state">
           Estado
           <input className="input-client-data" type="text" name="state" id="state"
             value={ state } onChange={ this.handleChanges } required />
         </label>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDataClient: (dataClient) => dispatch(setDataClient(dataClient)),
});

export default connect(null, mapDispatchToProps)(DataClient);
