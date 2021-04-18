import React from 'react';
import { number, func } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import productImage from '../images/product_medio.jpg';
import { calculate } from '../redux/actions/calculatePrice';
import { handleDimension } from '../redux/actions/handleDimension';

class ProductDimension extends React.Component {
  constructor(props) {
    super(props);

    this.validateInputs = this.validateInputs.bind(this);
  }

  validateInputs({ target: { value, name } }) {
    const { addHandleDimension } = this.props;
    const widthMin = 20;
    const widthMax = 120;
    const heightMin = 20;
    const heightMax = 80;
    switch (true) {
    case ((value < widthMin || value > widthMax) && name === 'width'):
      window.alert('Dimensão de largura deve ser entre 20 e 120 cm');
      break;
    case ((value < heightMin || value > heightMax) && name === 'height'):
      window.alert('Dimensão de altura deve ser entre 20 e 80 cm');
      break;
    default:
      addHandleDimension(value, name);
    }
  }

  render() {
    const { price, calculatePrice } = this.props;
    return (
      <div>
        <h1>Tela grade de proteção para lareira (sob medida)</h1>
        <img src={ productImage } alt="Imagem de uma tela de proteção para lareira" />
        <form>
          <label htmlFor="height">
            Altura:
            <input
              type="number"
              name="height"
              placeholder="Digite a altura"
              onBlur={ this.validateInputs }
            />
          </label>
          <label htmlFor="width">
            Largura:
            <input
              type="number"
              name="width"
              placeholder="Digite a largura"
              onBlur={ this.validateInputs }
            />
          </label>
          <button
            type="button"
            onClick={ calculatePrice }
          >
            Calcular
          </button>
          <p>
            A partir de
            <span>
              { price }
            </span>
          </p>
        </form>
        <div>
          <Link to="/order">Fazer Pedido</Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addHandleDimension: (value, name) => dispatch(handleDimension(name, value)),
  calculatePrice: () => dispatch(calculate()),
});

const mapStateToProps = (state) => ({
  price: state.product.price,
});

ProductDimension.propTypes = {
  price: number,
  calculatePrice: func,
  handleDimension: func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ProductDimension);
