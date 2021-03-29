import React from 'react';
import Shipping from '../components/Shipping';
import ClientData from '../components/ClientData';
import ProductDetails from '../components/ProductDetails';

class ScreenOrder extends React.Component {
  render() {
    return (
      <section>
        <ProductDetails />
        <Shipping />
        <ClientData />
        <button type="button">Finalizar Pedido</button>
      </section>
    );
  }
}

export default ScreenOrder;