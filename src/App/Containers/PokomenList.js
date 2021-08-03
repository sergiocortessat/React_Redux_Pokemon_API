/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import fetchPokemon from '../../API/ApiFetch';
import CardList from '../Components/PokemonListCard';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetchPokemon().then((data) => {
      setPokemon(data);
    });
  }, []);
  return (
    <div>
      {pokemon.map((pokemon) => (
        <div key={pokemon.english} className="App-Pokemon">
          <CardList pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
