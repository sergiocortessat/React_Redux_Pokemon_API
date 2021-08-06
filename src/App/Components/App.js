import {
  BrowserRouter, Switch, Route, Router,
} from 'react-router-dom';
import PokemonStat from '../Containers/PokemonStats';
import PokemonList from '../Containers/PokomenList';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/stats/:id" component={PokemonStat} />
            <Route path="/" component={PokemonList} />
          </Switch>
        </div>
      </Router>
    </BrowserRouter>
  );
}

export default App;
