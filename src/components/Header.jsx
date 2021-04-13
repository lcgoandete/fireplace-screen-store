import React from 'react';

import logoPequeno from '../images/logo_pequeno.jpeg'
import './css/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={ logoPequeno } alt="logotipo" />
      </header>
    );
  }
}

export default Header;