/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
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
  }, [pokemon]);
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
        <div className="stat-type">
          <h2>TYPE</h2>
          <h3 className="type0">
            {pokemon.type[0]}
          </h3>
          <h3 className="type1">
            {pokemon.type[1]}
          </h3>
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
        <div className="stat-ability">
          <h2>ABILITY</h2>
          <h3 className="ability1">
            {pokemon.ability[0] ? pokemon.ability[0][0] : '--'}
          </h3>
          <h3 className="ability2">
            {pokemon.ability[1] ? pokemon.ability[1][0] : '--'}
          </h3>
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
            <div
              key={stat.color}
            >
              <h2>{stat.name}</h2>
              <ProgressBar
                bgcolor={stat.color}
                completed={stat.stat}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

// PokemonStatCard.propTypes = {
//   pokemon: PropTypes.shapeOf({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     height: PropTypes.number.isRequired,
//     weight: PropTypes.number.isRequired,
//     type: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
//     evolution: PropTypes.shapeOf({
//       next: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
//     }).isRequired,
//     ability: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
//     description: PropTypes.string.isRequired,
//     hires: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default PokemonStatCard;
