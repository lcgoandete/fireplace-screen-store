import React from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';

import Shipping from '../components/Shipping';
import DataClient from '../components/DataClient';
import ProductDetails from '../components/ProductDetails';

class OrderScreen extends React.Component {
  constructor(props) {
    super(props);

    this.createOrder = this.createOrder.bind(this);
    this.test = this.test.bind(this);

    this.state = {
      mercadoId: '',
    };
  }

  createOrder() {
    const { product, shipping, dataClient } = this.props;
    const orderData = {};
    orderData.product = product;
    orderData.shipping = shipping;
    orderData.dataClient = dataClient;
    console.log(orderData);
  }

  async test() {
    // const method = {
    //   method: 'POST',
    //   headers: {
    //     ContentType: 'application/json',
    //   },
    // };

    // const preference = {
    //   description: 'Torinari no Totoro',
    //   price: 100,
    //   quantity: 1,
    // };

    // const response = await fetch('/mercadopago/create_preference', method, preference);
    // const obj = await response.json();
    // console.log(obj);
    // // this.setState({
    // //   mercadoId: obj.checkout,
    // // });
  }

  render() {
    const { mercadoId } = this.state;
    console.log(mercadoId);
    return (
      <section>
        <ProductDetails />
        <Shipping />
        <form>
          <DataClient />
          {/* <a href={ mercadoId }> */}
          <button type="button" onClick={ this.createOrder() }>Gerar Pedido</button>
          {/* </a> */}
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  shipping: state.shipping.shipping,
  product: state.product,
  dataClient: state.dataClient.dataClient,
});

OrderScreen.propTypes = {
  product: object,
  shipping: object,
  dataClient: object,
}.isRequired;

export default connect(mapStateToProps)(OrderScreen);
