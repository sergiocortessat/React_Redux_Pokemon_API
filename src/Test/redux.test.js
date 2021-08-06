/* eslint-disable no-unused-vars */
import pokemonReducer, { updatePokemonSearchResults, updateFilteredPokemonSearchResults } from '../Redux/Slices/homeFetchSlice';

it('returns the initial home state', () => {
  expect(pokemonReducer(undefined, {})).toEqual({
    pokemonSearchResults: [],
    filteredPokemonSearchResults: [],
  });
});

it('updates the searchResults', () => {
  expect(pokemonReducer({}, updatePokemonSearchResults('pokemon-data'))).toEqual({
    pokemonSearchResults: 'pokemon-data',
  });
});

it('updates the filtered pokemon', () => {
  expect(pokemonReducer({}, updateFilteredPokemonSearchResults('pokemon-data'))).toEqual({
    filteredPokemonSearchResults: 'pokemon-data',
  });
});
