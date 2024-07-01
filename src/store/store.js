import { configureStore } from '@reduxjs/toolkit';
import { counterSlice, todoSlice, pokemonSlice } from './slices';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todos: todoSlice.reducer,
    pokemons: pokemonSlice.reducer
  },
})