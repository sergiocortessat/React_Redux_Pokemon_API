/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import '../../Styles/PokemonStatCard.scss';
import ProgressBar from './ProgressBar';

const PokemonStatCard = ({ pokemon }) => {
  const [completed, setCompleted] = useState([]);

  const pokemonStats = [
    { name: 'HP', stat: pokemon.HP, color: '#00ff00' },
    { name: 'ATTACK', stat: pokemon.Attack, color: '#ff0000' },
    { name: 'DEFENSE', stat: pokemon.Defense, color: '#0000ff' },
    { name: 'SPECIAL ATTACK', stat: pokemon.SpecialAttack, color: '#ffff00' },
    { name: 'SPECIAL DEFENSE', stat: pokemon.SpecialDefense, color: '#00ffff' },
    { name: 'SPEED', stat: pokemon.Speed, color: '#ff00ff' },
  ];
  useEffect(() => {
    setCompleted(([...pokemonStats]));
    // setCompleted(String(pokemon.Attack));
  }, []);
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
          {pokemon.evolution.next ? pokemon.evolution.next[0][1].toUpperCase() : 'NO-EVOLUTION'}
        </h2>
        )}
        {pokemon.ability && (
        <div>
          <h2>ABILITY</h2>
          <h2>
            {pokemon.ability[0] ? pokemon.ability[0][0] : '--'}
          </h2>
          <h2>
            {pokemon.ability[1] ? pokemon.ability[1][0] : '--'}
          </h2>
        </div>
        )}
        <div className="description">
          <h2>DESCRIPTION</h2>
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
            <>
              <h2>{stat.name}</h2>
              <ProgressBar
                key={stat.name}
                bgcolor={stat.color}
                completed={stat.stat}
              />
            </>
          ))}
        </div>
      </div>
    </div>

  );
};

export default PokemonStatCard;
