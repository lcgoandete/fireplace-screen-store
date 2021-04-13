import React from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import Shipping from '../components/Shipping';
import DataClient from '../components/DataClient';
import ProductDetails from '../components/ProductDetails';

class OrderScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.createOrder = this.createOrder.bind(this); 
  }
  
  createOrder() {
    const { product, shipping, dataClient } = this.props;
    const orderData = {};
    orderData.product = product;
    orderData.shipping = shipping;
    orderData.dataClient = dataClient;
    console.log(orderData);
  }

  render() {
    return (
      <section>
        <ProductDetails />
        <Shipping />
        <form>
          <DataClient />
          <button type="button" onClick={ this.createOrder }>Finalizar Pedido</button>
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
};

export default connect(mapStateToProps)(OrderScreen);