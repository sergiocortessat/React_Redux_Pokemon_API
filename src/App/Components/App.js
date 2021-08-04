/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import PokemonStat from '../Containers/PokemonStats';
import PokemonList from '../Containers/PokomenList';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/stats" component={PokemonStat} />
          <Route path="/" component={PokemonList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
