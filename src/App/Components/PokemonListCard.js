/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Link,
} from 'react-router-dom';
import PokemonStats from '../Containers/PokemonStats';
import '../../Styles/PokemonListCard.scss';

const CardListComponent = ({
  pokemon,
}) => {
  const x = 0;
  return (
    <Link to={`/stats/${pokemon.id}`} className="pokemon-list-link">
      <div className="pokemon-list-card">
        <h2>{pokemon.SpecialDefense}</h2>
        <h2>{pokemon.japanese}</h2>
        <h2>{pokemon.english}</h2>
        <h2>{`${pokemon.type[0]} - ${pokemon.type[1]}`}</h2>
        <img src={pokemon.thumbnail} alt="" />
      </div>
    </Link>
  );
};

export default CardListComponent;
