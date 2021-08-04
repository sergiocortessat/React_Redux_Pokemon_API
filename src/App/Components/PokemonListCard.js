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
    <div>
      <h2>{pokemon.id}</h2>
      <h2>{pokemon.japanese}</h2>
      <h2>{pokemon.english}</h2>
      <h2>{`${pokemon.type[0]} - ${pokemon.type[1]}`}</h2>
      <Link to="/stats">
        <img src={pokemon.thumbnail} alt="" />
      </Link>
    </div>
  );
};

export default CardListComponent;
