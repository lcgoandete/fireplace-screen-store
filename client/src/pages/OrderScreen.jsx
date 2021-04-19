import React from 'react';

import Shipping from '../components/Shipping';
import DataClient from '../components/DataClient';
import ProductDetails from '../components/ProductDetails';

class OrderScreen extends React.Component {
  render() {
    return (
      <section>
        <ProductDetails />
        <Shipping />
        <form>
          <DataClient />
        </form>
      </section>
    );
  }
}

export default OrderScreen;
