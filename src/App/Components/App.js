import React, { useState, useEffect } from 'react';

import fetchPokemon from '../../API/ApiFetch';

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetchPokemon().then((data) => {
      const { categories } = data;}
      setPokemon(data);
    });
  }, []);
  return (
    <div className="App">
      {pokemon.map((pokemon) => (
        <div key={pokemon.name} className="App-Pokemon">
          <h2>pokemon.name</h2>
          <h3>pokemon.url</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
