import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import axios from 'axios';

class ButtonMP extends Component {
  constructor(props) {
    super(props);
    this.createOrder = this.createOrder.bind(this);
    this.requestLink = this.requestLink.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  createOrder() {
    const { product, shipping, dataClient } = this.props;
    product.description = `Grade de lareira ${product.height}X${product.width}`;
    product.quantity = 1;
    product.price = +(product.price);
    const orderData = {
      product,
      shipping,
      dataClient,
    };
    return orderData;
  }

  isValid() {
    const { shipping } = this.props;
    return Object.keys(shipping).length < 1;
  }

  async requestLink() {
    if (this.isValid()) {
      alert('Preencha o campo do frete');
      return;
    }
    const order = this.createOrder();
    console.log('oi');
    try {
      const response = await axios.post('http://localhost:5000/mercadopago/create_preference', { order });
      const obj = await response.json();
      console.log(obj);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { disableButton } = this.props;
    return (
      <>
        <button type="button" disabled={ disableButton } onClick={ this.requestLink }>Gerar Pedido</button>
        <h1>Clica</h1>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  shipping: state.shipping.shipping,
  product: state.product,
  dataClient: state.dataClient,
  disableButton: state.dataClient.disableButton,
});

ButtonMP.propTypes = {
  product: object,
  shipping: object,
  dataClient: object,
}.isRequired;

export default connect(mapStateToProps)(ButtonMP);
