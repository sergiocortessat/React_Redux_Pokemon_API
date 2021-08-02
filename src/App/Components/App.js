/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PokemonStat from '../Containers/PokemonStats';
import fetchPokemon from '../../API/ApiFetch';

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetchPokemon().then((data) => {
      setPokemon(data);
    });
  }, []);
  return (
    <div className="App">
      {pokemon.map((pokemon) => (
        <div key={pokemon.name} className="App-Pokemon">
          <h2>{pokemon.name}</h2>
          <h3>{pokemon.url}</h3>
          <PokemonStat id={pokemon.url} name={pokemon.name} />
        </div>
      ))}
    </div>
  );
}

export default App;
