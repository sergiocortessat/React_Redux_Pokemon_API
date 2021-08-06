import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import '../../Styles/PokemonListCard.scss';

const CardListComponent = ({
  pokemon,
}) => (
  <Link to={`/stats/${pokemon.id}`} className="pokemon-list-link" data-testid="list">
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
// default props
CardListComponent.defaultProps = {
  pokemon: {
    id: 0,
    japanese: '',
    english: '',
    type: ['', ''],
    species: '',
    thumbnail: '',
  },
};
CardListComponent.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    japanese: PropTypes.string,
    english: PropTypes.string,
    type: PropTypes.arrayOf(PropTypes.string),
    species: PropTypes.string,
    thumbnail: PropTypes.string,
  }),
};

export default CardListComponent;
