import Header from './components/Header';
import ProductScreen from './pages/ProductScreen';
import './App.css';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route to="/" component={ ProductScreen } />
      </Switch>
    </div>
  );
}

export default App;
