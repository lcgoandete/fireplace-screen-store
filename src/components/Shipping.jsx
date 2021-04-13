import React from 'react';
import { connect } from 'react-redux';

import { getShippingList, setShippingPrice } from '../redux/actions/shipping';
import './css/Shipping.css'

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.getState = this.getState.bind(this);
    this.renderShippingList = this.renderShippingList.bind(this);
    this.selectedShippingPrice = this.selectedShippingPrice.bind(this);
    
    this.state = {
      cepDestino: '',
    };
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ cepDestino: value });
  }

  getState() {
    const { addShippingList, width, height } = this.props;
    const { cepDestino } = this.state;
    addShippingList(cepDestino, width, height);
  }

  selectedShippingPrice(shippingPrice) {
    const { addShippingPrice } = this.props;
    addShippingPrice(parseFloat(shippingPrice));
  }

  renderShippingList() {
    const { shippingList } = this.props;
    if(shippingList.length > 0) {
      return (shippingList
        .map((shipping) => (
          <div key={shipping.id} name="shipping">
            <input type="radio" name="shipping" onChange={ () => this.selectedShippingPrice(shipping.price) }/>
            <div>
              <span>{shipping.currency} {shipping.price}</span>
              <span>{shipping.company.name} {shipping.name}</span>
              <span>{shipping.delivery_time} Dias</span>
            </div>
          </div>
        ))
      );
    }
  }

  render() {
    const { cepDestino } = this.state;
    return (
      <section>
        <label htmlFor="cep-shipping">
          Calcular Frete
          <input className="input-shipping" type="text" name="cepDestino"
            id="cep-shipping" value={ cepDestino } onChange={ this.handleChange } />
          <button type="button" onClick={ this.getState }>OK</button>
        </label>
        { this.renderShippingList() }
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  width: state.product.width,
  height: state.product.height,
  shippingList: state.shipping.shippingList,
});

const mapDispatchToProps = (dispatch) => ({
  addShippingList: (cepDestino, width, height) => dispatch(getShippingList(cepDestino, width, height)),
  addShippingPrice: (shippingPrice) => dispatch(setShippingPrice(shippingPrice)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);