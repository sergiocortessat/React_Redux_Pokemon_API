/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchPokemon from '../../API/ApiFetch';
import CardList from '../Components/PokemonListCard';
import Filter from '../Components/Filter';
import { updatePokemonSearchResults, updateFilteredPokemonSearchResults } from '../../Redux/Slices/homeFetchSlice';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [reset, setReset] = useState(false);
  const [typePokemon, setTypePokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = React.useState([]);
  const [inputFilter, setInputFilter] = React.useState('');
  const { pokemonSearchResults, filteredPokemonSearchResults } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const handleClick = (type) => {
    if (type !== 'Reset' && typePokemon.length < 2) {
      const filtered = filteredPokemon.filter((item) => item.type[0] === type || item.type[1] === type);
      // console.log(filteredPokemon);
      // dispatch(updateFilteredPokemonSearchResults(updatePokemonSearchResults.filter((item) => item.type[0] === type || item.type[1] === type)));
      // setFilteredPokemon(filteredPokemon.filter((item) => item.type[0] === type || item.type[1] === type));
      setFilteredPokemon(filtered);
      setTypePokemon((previous) => [type, ...previous]);
      // console.log(typePokemon.length);
    } else {
      setTypePokemon([]);
      setReset(true);
    }
  };
  const handleInput = (e) => {
    setInputFilter(e.target.value);
    // dispatch(updateFilteredPokemonSearchResults(pokemonSearchResults.filter((item) => item.english.toLowerCase().includes(e.target.value.toLowerCase()))));
    const filter = pokemonSearchResults.filter((item) => item.english.toLowerCase().includes(e.target.value.toLowerCase()));
    // setFilteredPokemon(pokemon.filter((item) => item.english.toLowerCase().includes(e.target.value.toLowerCase())));
    setFilteredPokemon(filter);
  };

  useEffect(() => {
    fetchPokemon().then((data) => {
      dispatch(updatePokemonSearchResults(data));
      // setPokemon(data);
      setFilteredPokemon(data);
      // dispatch(updateFilteredPokemonSearchResults(data));
    });
    setReset(false);
  }, [reset]);

  return (
    <div>
      <Filter handleInput={handleInput} handleClick={handleClick} setInputFilter={setInputFilter} inputFilter={inputFilter} />
      {filteredPokemon.map((pokemon) => (
        <div key={pokemon.id} className="App-Pokemon">
          <CardList pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
