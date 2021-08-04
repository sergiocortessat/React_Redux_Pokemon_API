/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Link,
} from 'react-router-dom';
import PokemonStats from '../Containers/PokemonStats';

const CardListComponent = ({
  pokemon,
}) => {
  const x = 0;
  return (
    <Link to={`/stats/${pokemon.id}`}>
      <div>
        <h2>{pokemon.id}</h2>
        <h2>{pokemon.japanese}</h2>
        <h2>{pokemon.english}</h2>
        <h2>{`${pokemon.type[0]} - ${pokemon.type[1]}`}</h2>
        <img src={pokemon.thumbnail} alt="" />
      </div>
    </Link>
  );
};

export default CardListComponent;
