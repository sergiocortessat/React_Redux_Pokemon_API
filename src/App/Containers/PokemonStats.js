import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilteredPokemonSearchResults } from '../../Redux/Actions';
import fetchPokemon from '../../API/ApiFetch';
import PokemonStatCard from '../Components/PokemonStatCard';

const PokemonStat = () => {
  const { id } = useParams();
  const [reset, setReset] = useState(false);
  const [singlePokemon, setSinglePokemon] = useState({});
  const dispatch = useDispatch();
  const { filteredPokemonSearchResults } = useSelector((state) => state.Pokemon);

  useEffect(() => {
    if (id !== singlePokemon.id || filteredPokemonSearchResults.length === 0) {
      fetchPokemon().then((data) => {
        dispatch(updateFilteredPokemonSearchResults(data
          .filter((pokemon) => pokemon.id === Number(id))[0]));
        setReset(true);
      });
    }
    setSinglePokemon(filteredPokemonSearchResults);
  }, [reset]);
  if (singlePokemon.length < 1) {
    return (
      <div className="loading">
        Loading....
      </div>
    );
  }
  return (
    singlePokemon
    && (
    <PokemonStatCard pokemon={singlePokemon} />
    )
  );
};

export default PokemonStat;
