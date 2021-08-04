import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemonSearchResults: [],
  filteredPokemonSearchResults: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    updatePokemonSearchResults: (state, action) => ({
      ...state,
      pokemonSearchResults: action.payload,
    }),
    updateFilteredPokemonSearchResults: (state, action) => ({
      ...state,
      filteredPokemonSearchResults: action.payload,
    }),
  },
});

export const { updatePokemonSearchResults, updateFilteredPokemonSearchResults } = homeSlice.actions;

export default homeSlice.reducer;
