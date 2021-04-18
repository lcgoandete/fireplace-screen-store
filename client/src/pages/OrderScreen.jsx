import React from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';

// import mercadopago from 'mercadopago';
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

  componentDidMount() {
    // this.test();
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
    const response = await fetch('/api/mensagem');
    const obj = await response.json();
    this.setState({
      mercadoId: obj.express,
    });
  }

  render() {
    const { mercadoId } = this.state;
    return (
      <section>
        <ProductDetails />
        <Shipping />
        <form>
          <DataClient />
          <a href={ mercadoId }>
            <button type="button" onClick={ this.test() }>Gerar Pedido</button>
          </a>
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
