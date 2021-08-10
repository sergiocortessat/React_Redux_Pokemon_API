import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
    <>
      <div className="stat-name">
        <h1>
          {`#${pokemon.id}`}
          {' - '}
          {pokemon.english}
        </h1>
      </div>
      <div className="wrapper">
        <div className="inner">
          <div className="info">
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
          </div>
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
                  tag={stat.color}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  );
};

PokemonStatCard.defaultProps = {
  pokemon: {
    id: 0,
    name: '',
    english: '',
    height: '',
    weight: '',
    type: [],
    evolution: {},
    ability: [],
    description: '',
    hires: '',
  },
};

PokemonStatCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    english: PropTypes.string,
    height: PropTypes.string,
    weight: PropTypes.string,
    type: PropTypes.arrayOf(PropTypes.string),
    evolution: PropTypes.shape({
      next: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    }),
    ability: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    description: PropTypes.string,
    hires: PropTypes.string,
    HP: PropTypes.number,
    Attack: PropTypes.number,
    Defense: PropTypes.number,
    SpecialAttack: PropTypes.number,
    SpecialDefense: PropTypes.number,
    Speed: PropTypes.number,
  }),
};

export default PokemonStatCard;
