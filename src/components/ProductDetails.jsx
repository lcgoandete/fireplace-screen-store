import React from 'react';
import './ProductDetails.css';

class ProductDetails extends React.Component {
  render() {
    const { width, height, price, shipping } = this.props;
    return (
      <section>
        <span>nome do produto fixo</span>
        <span>dimensoes do produto store</span>
        <span>preco store</span>
        <span>frete store</span>
        <span>total calculo</span>
      </section>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   action: state => dispatch(action(state))});

export default ProductDetails;