/* eslint-disable react/prop-types */
import React from 'react';
import '../../Styles/PokemonStatCard.scss';

const PokemonStatCard = ({ pokemon }) => (
  <div className="wrapper">
    <div className="inner">
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
  </div>
);

export default PokemonStatCard;
