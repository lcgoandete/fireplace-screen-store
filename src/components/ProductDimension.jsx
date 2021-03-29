import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import productImage from '../images/product_medio.jpg';
import { calculate } from '../redux/actions/calculatePrice';
import { handleDimension } from '../redux/actions/handleDimension';

class ProductDimension extends React.Component {
  constructor(props){
    super(props);
    this.validateInputs = this.validateInputs.bind(this);
  }

  validateInputs({ target: { value, name } }){
    const { handleDimension } = this.props;
    switch (true) {
      case ((value < 20 || value > 120) && name === 'width'):
        window.alert('Dimensão de largura deve ser entre 20 e 120 cm');
        break;
      case ((value < 20 || value > 80) && name === 'height'):
        window.alert('Dimensão de altura deve ser entre 20 e 80 cm');
        break;
      default:
        handleDimension(value, name);
    }
  }

  render() {
    const { price, calculatePrice } = this.props;
    return(
      <div>
        <h1>Tela grade de proteção para lareira (sob medida)</h1>
        <img src={ productImage } alt="Imagem de uma tela de proteção para lareira" />
        <form>
          <label htmlFor="height">
            Altura:
            <input
              min={20}
              max={80}
              type="number"
              name="height"
              placeholder="Digite a altura"
              onBlur={ this.validateInputs }
            />
          </label>
          <label htmlFor="width">
            Largura:
            <input
              min={20}
              max={120}
              type="number"
              name="width"
              placeholder="Digite a largura"
              onBlur={ this.validateInputs }
            />
          </label>
          <button
            type="button"
            onClick={ calculatePrice }
          >Calcular</button>
          <p>A partir de <span>{ price }</span></p>
        </form>
        <div>
          <Link to="/order">Fazer Pedido</Link>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleDimension: (value, name) => dispatch(handleDimension(name, value)),
  calculatePrice: () => dispatch(calculate())
});

const mapStateToProps = (state) => ({
  price: state.reduceProduct.price,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDimension)
