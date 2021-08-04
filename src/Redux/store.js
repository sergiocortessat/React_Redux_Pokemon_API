import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './Slices/homeFetchSlice';

export default configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
