import React from 'react';
import { number } from 'prop-types';
import { connect } from 'react-redux';

import './css/ProductDetails.css';

class ProductDetails extends React.Component {
  render() {
    const { width, height, price, shippingPrice } = this.props;
    return (
      <section>
        <p>Tela grade de proteção sob medida</p>
        <p>dimensoes { width } x { height }</p>
        <p>R$ { price.toFixed(2) }</p>
        <p>Frete: { shippingPrice.toFixed(2) }</p>
        <p>Total: { (price + shippingPrice).toFixed(2) } </p>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  width: state.product.width,
  height: state.product.height,
  price: state.product.price,
  shippingPrice: state.shipping.shippingPrice,
});

ProductDetails.propTypes = {
  width: number,
  height: number,
  price: number,
  shippingPrice: number,
};

export default connect(mapStateToProps)(ProductDetails);