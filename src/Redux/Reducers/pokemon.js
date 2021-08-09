const initialState = {
  pokemonSearchResults: [],
  filteredPokemonSearchResults: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_POKEMON':
      return {
        ...state,
        pokemonSearchResults: action.payload,
      };
    case 'FETCH_POKEMON':
      return {
        ...state,
        filteredPokemonSearchResults: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
