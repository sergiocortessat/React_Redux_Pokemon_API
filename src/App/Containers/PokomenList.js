import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchPokemon from '../../API/ApiFetch';
import CardList from '../Components/PokemonListCard';
import Filter from '../Components/Filter';
import { updatePokemonSearchResults } from '../../Redux/Actions/index';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [reset, setReset] = useState(false);
  const [typePokemon, setTypePokemon] = useState([]);
  const [inputFilter, setInputFilter] = React.useState('');
  const { pokemonSearchResults } = useSelector((state) => state.Pokemon);
  const dispatch = useDispatch();

  const handleClick = (type) => {
    if (type !== 'Reset' && typePokemon.length < 2) {
      const filtered = pokemon.filter((item) => item.type[0] === type || item.type[1] === type);
      setPokemon(filtered);
      setTypePokemon((previous) => [type, ...previous]);
    } else {
      setTypePokemon([]);
      setReset(true);
    }
  };

  const handleInput = (e) => {
    setInputFilter(e.target.value);
    const filter = pokemonSearchResults
      .filter((item) => item.english.toLowerCase().includes(e.target.value.toLowerCase()));
    setPokemon(filter);
  };

  useEffect(() => {
    if (pokemonSearchResults.length < 1) {
      fetchPokemon().then((data) => {
        dispatch(updatePokemonSearchResults(data));
        setReset(true);
      });
    }
    setPokemon(pokemonSearchResults);
    setReset(false);
  }, [reset]);

  return (
    <div>
      {/* Filter component */}
      <Filter
        handleInput={handleInput}
        handleClick={handleClick}
        setInputFilter={setInputFilter}
        inputFilter={inputFilter}
      />
      {/* Pokemon List component */}
      <div className="pokemon-list-items">
        {pokemon && pokemon.map((pokemon) => (
          <CardList key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
