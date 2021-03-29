import React from 'react';
import { connect } from 'react-redux';
import './ProductDetails.css';

class ProductDetails extends React.Component {
  render() {
    const { width, height, price } = this.props;
    return (
      <section>
        <p>Tela grade de proteção sob medida</p>
        <p>dimensoes { width } x { height }</p>
        <p>R$ { price }</p>
        <p>100,00</p>
        <p>{ +(price) + 100 } </p>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  width: state.reduceProduct.width,
  height: state.reduceProduct.height,
  price: state.reduceProduct.price,
});

export default connect(mapStateToProps)(ProductDetails);