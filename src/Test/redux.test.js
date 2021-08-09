/* eslint-disable no-unused-vars */
import { updatePokemonSearchResults, updateFilteredPokemonSearchResults } from '../Redux/Actions';
import homeReducer from '../Redux/Reducers/pokemon';

it('returns the initial home state', () => {
  expect(homeReducer(undefined, {})).toEqual({
    pokemonSearchResults: [],
    filteredPokemonSearchResults: [],
  });
});

it('updates the searchResults', () => {
  expect(homeReducer({}, updatePokemonSearchResults('pokemon-data'))).toEqual({
    pokemonSearchResults: 'pokemon-data',
  });
});

it('updates the filtered pokemon', () => {
  expect(homeReducer({}, updateFilteredPokemonSearchResults('pokemon-data'))).toEqual({
    filteredPokemonSearchResults: 'pokemon-data',
  });
});
