const ALL_POKEMON = 'ALL_POKEMON';
const FETCH_POKEMON = 'FETCH_POKEMON';

export const updatePokemonSearchResults = (pokemon) => ({
  type: ALL_POKEMON,
  payload: pokemon,
});

export const updateFilteredPokemonSearchResults = (pokemon) => ({
  type: FETCH_POKEMON,
  payload: pokemon,
});
