/* eslint-disable react/prop-types */
import React from 'react';
import '../../Styles/PokemonStatCard.scss';
import LinearProgress from '@material-ui/core/LinearProgress';

const PokemonStatCard = ({ pokemon }) => (
  <div className="wrapper">
    <div className="inner info">
      <h2>
        ID
        {' '}
        #
        {pokemon.id}

      </h2>
      <h2>
        HEIGHT
        {' '}
        {pokemon.height}
      </h2>
      <h2>
        WEIGHT
        {' '}
        {pokemon.weight}
      </h2>
      {pokemon.type && (
        <div>
          <h2>TYPE</h2>
          <h2>
            {pokemon.type[0]}
          </h2>
          <h2>
            {pokemon.type[1]}
          </h2>
        </div>
      )}
      {pokemon.evolution && (
      <h2>
        NEXT-EVOLUTION
        {' '}
        {pokemon.evolution.next[0][1].toUpperCase()}
      </h2>
      )}
      {pokemon.ability && (
        <div>
          <h2>ABILITY</h2>
          <h2>
            {pokemon.ability[0][0]}
          </h2>
          <h2>
            {pokemon.ability[1][0]}
          </h2>
        </div>
      )}
      <div className="description">
        <h3>
          pokemon.description
        </h3>
      </div>
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
    <LinearProgress value={90} />
  </div>

);

export default PokemonStatCard;
