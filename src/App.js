import Header from './components/Header';
import { Switch, Route } from 'react-router';
import ProductScreen from './pages/ProductScreen';
import ScreenOrder from './pages/ScreenOrder';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ ProductScreen } />
        <Route path="/order" component={ ScreenOrder } />
      </Switch>
    </div>
  );
}

export default App;
