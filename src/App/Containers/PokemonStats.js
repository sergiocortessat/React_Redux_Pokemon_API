/* eslint-disable react/prop-types */
import React from 'react';

const PokemonStat = ({ id, name }) => (
  <div>
    <h1>{id}</h1>
    <p>
      {name}
      {' '}
      again
    </p>
  </div>
);

export default PokemonStat;
