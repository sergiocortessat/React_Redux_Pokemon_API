/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePokemonSearchResults, updateFilteredPokemonSearchResults } from '../../Redux/Slices/homeFetchSlice';
import fetchPokemon from '../../API/ApiFetch';

const PokemonStat = () => {
  const { id } = useParams();
  const [reset, setReset] = useState(false);
  const [singlePokemon, setSinglePokemon] = useState({});
  // const { pokemonSearchResults, filteredPokemonSearchResults } = useSelector((state) => state.pokemon);
  // setSinglePokemon(pokemonSearchResults.filter((pokemon) => pokemon.id === Number(id)));
  const dispatch = useDispatch();
  const { pokemonSearchResults, filteredPokemonSearchResults } = useSelector((state) => state.pokemon);

  useEffect(() => {
    if (id !== singlePokemon.id || filteredPokemonSearchResults.length === 0) {
      fetchPokemon().then((data) => {
        dispatch(updateFilteredPokemonSearchResults(data.filter((pokemon) => pokemon.id === Number(id))[0]));
        // dispatch(updateFilteredPokemonSearchResults(data));
        // setSinglePokemon(data.filter((pokemon) => pokemon.id === Number(id))[0]);
        setReset(true);
      });
    }
    setSinglePokemon(filteredPokemonSearchResults);
  }, [reset]);
  if (singlePokemon.length < 1) {
    return (
      <div>
        Loading....
      </div>
    );
  }
  return (
    singlePokemon
    && (
      <div>

        <h1>{id}</h1>
        <p>
          {singlePokemon.id}
        </p>
        <p>
          {singlePokemon.english}
        </p>
        <p>
          {singlePokemon.japanese}
        </p>
        <p>
          {singlePokemon.thumbnail}
        </p>
        <img src={singlePokemon.hires} alt={singlePokemon.id} />
      </div>
    )
  );
};

export default PokemonStat;
