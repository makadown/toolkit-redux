import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        page:0,
        pokemons: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
            console.log('new state value', { isLoading: state.isLoading, page: state.page, pokemons: state.pokemons});
        },
    },
});

export const {
    setLoading,
    setPokemons
} = pokemonSlice.actions;