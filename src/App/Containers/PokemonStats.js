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
  const pokemon = {};
  const [singlePokemon, setSinglePokemon] = useState({});
  // const { pokemonSearchResults, filteredPokemonSearchResults } = useSelector((state) => state.pokemon);
  // setSinglePokemon(pokemonSearchResults.filter((pokemon) => pokemon.id === Number(id)));

  useEffect(() => {
    fetchPokemon().then((data) => {
      setSinglePokemon(data.filter((pokemon) => pokemon.id === Number(id))[0]);
    });
  }, []);
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
          {singlePokemon.HP}
        </p>
      </div>
      )
  );
};

export default PokemonStat;
