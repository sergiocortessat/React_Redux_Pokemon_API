/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchPokemon from '../../API/ApiFetch';
import CardList from '../Components/PokemonListCard';
import Filter from '../Components/Filter';
import { updatePokemonSearchResults, updateFilteredPokemonSearchResults } from '../../Redux/Slices/homeFetchSlice';

const PokemonList = () => {
  // const [pokemon, setPokemon] = useState([]);
  const [reset, setReset] = useState(false);
  const [typePokemon, setTypePokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = React.useState([]);
  const [inputFilter, setInputFilter] = React.useState('');
  const { pokemonSearchResults, filteredPokemonSearchResults } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const handleClick = (type) => {
    if (type !== 'Reset' && typePokemon.length < 2) {
      dispatch(updateFilteredPokemonSearchResults(updatePokemonSearchResults.filter((item) => item.type[0] === type || item.type[1] === type)));
      // setFilteredPokemon(filteredPokemon.filter((item) => item.type[0] === type || item.type[1] === type));
      setTypePokemon((previous) => [type, ...previous]);
      console.log(typePokemon.length);
      console.log(filteredPokemonSearchResults);
    } else {
      setTypePokemon([]);
      setReset(true);
    }
  };
  const handleInput = (e) => {
    setInputFilter(e.target.value);
    dispatch(updateFilteredPokemonSearchResults(pokemonSearchResults.filter((item) => item.english.toLowerCase().includes(e.target.value.toLowerCase()))));
    // setFilteredPokemon(pokemonSearchResults.filter((item) => item.english.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  useEffect(() => {
    fetchPokemon().then((data) => {
      dispatch(updatePokemonSearchResults(data));
      // setPokemon(data);
      dispatch(updateFilteredPokemonSearchResults(data));
      setFilteredPokemon(data);
    });
    setReset(false);
  }, [reset]);
  return (
    <div>
      <Filter handleInput={handleInput} handleClick={handleClick} setInputFilter={setInputFilter} inputFilter={inputFilter} />
      {filteredPokemonSearchResults && filteredPokemonSearchResults.map((pokemon) => (
        <div key={pokemon.id} className="App-Pokemon">
          <CardList pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
