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
        <div>
          <h2>{`ID: ${pokemon.id}`}</h2>
          <h3>{`NAME(JP): ${pokemon.japanese}`}</h3>
          <h3>{`NAME(EN): ${pokemon.english}`}</h3>
          <div className="pokemon-list-card-image-container">
            <img src={pokemon.thumbnail} alt={pokemon.english} />
          </div>
          <h4>{`TYPE: ${pokemon.type[0]} - ${pokemon.type[1]}`}</h4>
          <h4>{`SPECIES: ${pokemon.species}`}</h4>
        </div>
      </div>
    </Link>
  );
};

export default CardListComponent;
