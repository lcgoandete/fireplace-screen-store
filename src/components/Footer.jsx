import React from 'react';

import './css/Footer.css';

class Footer extends React.Component {
  render() {
    const footerText = 'Elo & Brasa - CNPJ: 14.756.628/0001-26 © Todos os direitos reservados. 2021';
    return (
      <span>{ footerText }</span>
    );
  }
}

export default Footer;
