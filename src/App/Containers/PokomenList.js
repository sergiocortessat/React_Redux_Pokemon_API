/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import fetchPokemon from '../../API/ApiFetch';
import CardList from '../Components/PokemonListCard';
import Filter from '../Components/Filter';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [reset, setReset] = useState(false);
  const [filteredPokemon, setFilteredPokemon] = React.useState([]);
  const [inputFilter, setInputFilter] = React.useState('');
  const handleClick = (type) => {
    if (type !== 'Reset') {
      setFilteredPokemon(pokemon.filter((item) => item.type[0] === type || item.type[1] === type));
    } else {
      setReset(true);
    }
  };
  const handleInput = (e) => {
    setInputFilter(e.target.value);
    setFilteredPokemon(pokemon.filter((item) => item.english.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  useEffect(() => {
    fetchPokemon().then((data) => {
      setPokemon(data);
      setFilteredPokemon(data);
    });
    setReset(false);
  }, [reset]);
  return (
    <div>
      <Filter handleInput={handleInput} handleClick={handleClick} setInputFilter={setInputFilter} inputFilter={inputFilter} />
      {filteredPokemon.map((pokemon) => (
        <div key={pokemon.english} className="App-Pokemon">
          <CardList pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
