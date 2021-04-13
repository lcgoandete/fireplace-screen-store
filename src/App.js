import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import ProductScreen from './pages/ProductScreen';
import OrderScreen from './pages/OrderScreen';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ ProductScreen } />
        <Route path="/order" component={ OrderScreen } />
      </Switch>
    </div>
  );
}

export default App;
