/* eslint-disable react/prop-types */
import React from 'react';

const PokemonStatCard = ({ pokemon }) => (
  <div>
    <h1>id</h1>
    <p>
      {pokemon.id}
    </p>
    <p>
      {pokemon.english}
    </p>
    <p>
      {pokemon.japanese}
    </p>
    <p>
      {pokemon.thumbnail}
    </p>
    <img src={pokemon.hires} alt={pokemon.id} />
  </div>
);

export default PokemonStatCard;
