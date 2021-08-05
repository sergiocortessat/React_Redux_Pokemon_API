/* eslint-disable react/prop-types */
import React from 'react';
import '../../Styles/PokemonStatCard.scss';

const PokemonStatCard = ({ pokemon }) => (
  <div className="wrapper">
    <div className="inner info">
      <h2>id</h2>
      <h2>
        {pokemon.id}
      </h2>
      <h2>
        {pokemon.height}
      </h2>
      <h2>
        {pokemon.type[0]}
      </h2>
      <h2>
        {pokemon.type[0]}
      </h2>
      <h3>
        {pokemon.description}
      </h3>
    </div>
    <img src={pokemon.hires} alt={pokemon.id} />
    <div className="inner2 stats">
      <h1>Pokemon Stats</h1>
      <h2>
        {pokemon.HP}
      </h2>
      <h2>
        {pokemon.Attack}
      </h2>
      <h2>
        {pokemon.Defense}
      </h2>
      <h2>
        {pokemon.SpAttack}
      </h2>
      <h2>
        {pokemon.SpDefense}
      </h2>
      <h2>
        {pokemon.Speed}
      </h2>
    </div>
  </div>

);

export default PokemonStatCard;
