import React from 'react';
import { number, object } from 'prop-types';
import { connect } from 'react-redux';

import './css/ProductDetails.css';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: 'Tela grade de proteção sob medida',
    };
  }

  render() {
    const { description,  } = this.state;
    const { shipping, width, height, price } = this.props;
    return (
      <section>
        <p>{ description }</p>
        <p>dimensoes { width } x { height }</p>
        <p>R$ { price.toFixed(2) }</p>
        <p>Frete: { parseFloat(shipping.price).toFixed(2) }</p>
        <p>Total: { (price + parseFloat(shipping.price)).toFixed(2) } </p>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  width: state.product.width,
  height: state.product.height,
  price: state.product.price,
  shipping: state.shipping.shipping,
});

ProductDetails.propTypes = {
  width: number,
  height: number,
  price: number,
  shipping: object,
};

export default connect(mapStateToProps)(ProductDetails);