import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import PokemonStat from '../Containers/PokemonStats';
import PokemonList from '../Containers/PokomenList';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/stats/:id" component={PokemonStat} />
          <Route path="/" component={PokemonList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
