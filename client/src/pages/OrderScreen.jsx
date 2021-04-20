import React from 'react';

import Shipping from '../components/Shipping';
import DataClient from '../components/DataClient';
import ProductDetails from '../components/ProductDetails';
import ButtonMP from '../components/ButtonMP';

class OrderScreen extends React.Component {
  render() {
    return (
      <section>
        <ProductDetails />
        <Shipping />
        <form>
          <DataClient />
          <ButtonMP />
        </form>
      </section>
    );
  }
}

export default OrderScreen;
