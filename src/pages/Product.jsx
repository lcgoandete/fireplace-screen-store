import React from 'react';
import './Product.css'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.renderSectionCmSquare = this.renderSectionCmSquare.bind(this);
    this.renderSectionCalculateShipping = this.renderSectionCalculateShipping.bind(this);
    this.state = {
      width: 60,
      height: 60,
      cep: 22470050,
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  renderSectionCmSquare( width, height) {
    return (
      <section>
        <input type="text" className="form-control" placeholder="Digite a Largura em Cm" value={ width } name="width" onChange={ this.handleChange }/>
        <input type="text" className="form-control" placeholder="Digite a Altura em Cm" value={ height } name="height" onChange={ this.handleChange }/>
        <button type="button" className="btn btn-primary">Calcular Preço</button>
        <h2 id="resultado">R$ 0.00</h2>
      </section>
    );
  }

  renderSectionCalculateShipping(cep) {
    return (
      <section>
        <input type="text" className="form-control" placeholder="Digite o Cep " value={ cep } name="cep" onChange={ this.handleChange }/> 
        <button type="button" className="btn btn-primary">Calcular Frete</button>
      </section>
    );
  }

  render() {
    const { width, height, cep } = this.state;
    return (
      <div id="content">
        <h1>Dimensões</h1>
        <div className="form-group">
          <div className="col-sm-12">
            { this.renderSectionCmSquare(width, height) }
            { this.renderSectionCalculateShipping(cep) }
            
            <div id="frete">  
              <div id="empresas">
                <div className="radio">
                  <label>
                    <input type="radio" name="fretes" id="vlrPac"/>
                    Correios PAC
                  </label>
                  {/* <label id="lblPac"></label> */}
                </div>
              
                <div className="radio">
                  <label>
                    <input type="radio" name="fretes" id="vlrSedex"/>
                    Correios SEDEX
                  </label>
                  <label id="lblSedex"></label>
                </div>
              
                <div className="radio">
                  <label>
                    <input type="radio" name="fretes" id="vlrJadLogPac"/>
                    Jadlog .Package
                  </label>
                  {/* <label id="lblJadLogPac"></label> */}
                </div>
              
                <div className="radio">
                  <label>
                    <input type="radio" name="fretes" id="vlrJadLogCom"/>
                    Jadlog .Com
                  </label>
                  {/* <label id="lblJadLogCom"></label> */}
                </div>
              </div>
              <button type="button" id="btnGerarPedido" className="btn btn-primary">Gerar Pedido</button>
              <button type="button" id="btnTeste" className="btn btn-danger">Teste</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
