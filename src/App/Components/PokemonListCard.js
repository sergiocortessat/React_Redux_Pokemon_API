/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const CardListComponent = ({
  pokemon,
}) => {
  const x = 0;
  return (
    <div>
      <h2>{pokemon.id}</h2>
      <h2>{pokemon.japanese}</h2>
      <h2>{pokemon.english}</h2>
      <img src={pokemon.thumbnail} alt="" />
    </div>
  );
};

export default CardListComponent;
