/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import '../../Styles/PokemonStatCard.scss';
import ProgressBar from './ProgressBar';

const PokemonStatCard = ({ pokemon }) => {
  const [completed, setCompleted] = useState([]);

  const pokemonStats = [
    pokemon.HP,
    pokemon.Attack,
    pokemon.Defense,
    pokemon.SpecialAttack,
    pokemon.SpecialDefense,
    pokemon.Speed,
  ];
  useEffect(() => {
    setCompleted(([...pokemonStats]));
    // setCompleted(String(pokemon.Attack));
  }, []);
  console.log(pokemonStats);
  return (
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
            {pokemon.description}
          </h3>
        </div>
      </div>
      <div className="stats-image">
        <img src={pokemon.hires} alt={pokemon.id} />
      </div>
      <div className="inner2 stats">
        <h2>POKEMON STATS</h2>
        <div>
          {completed.map((stat) => (
            <ProgressBar
              key="yes"
              bgcolor="black"
              completed={stat}
            />
          ))}
        </div>
      </div>
    </div>

  );
};

export default PokemonStatCard;
