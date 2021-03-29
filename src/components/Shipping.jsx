import React from 'react';
import { connect } from 'react-redux';
import { getShippingAPI } from '../redux/actions/shippingAPI';
import './Shipping.css'

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getState = this.getState.bind(this);
    this.state = {
      cepDestino: '',
    };
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ cepDestino: value });
  }

  getState() {
    const { getShipping, width, height } = this.props;
    const { cepDestino } = this.state;
    getShipping(cepDestino, width, height);
  }

  render() {
    const { cepDestino } = this.state;
    const { shipping } = this.props;
    console.log(shipping);
    return (
      <section>
        <label htmlFor="cep-shipping">
          Calcular Frete
          <input className="input-shipping" type="text" name="cepDestino"
            id="cep-shipping" value={ cepDestino } onChange={ this.handleChange } />
          <button type="button" onClick={ this.getState }>OK</button>
        </label>
        <div>R$ 150,00 - Correios PAC    - 10 Dias</div>
        <div>R$ 180,99 - Correios SEDEX  - 07 Dias</div>
        <div>R$ 100,50 - JadLog .Package - 20 Dias</div>
        <div>R$ 120,00 - JadLog .Com     - 15 Dias</div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  width: state.reduceProduct.width,
  height: state.reduceProduct.height,
  shipping: state.reducerShipping.shipping,
});

const mapDispatchToProps = (dispatch) => ({
  getShipping: (cepDestino, width, height) => dispatch(getShippingAPI(cepDestino, width, height)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);