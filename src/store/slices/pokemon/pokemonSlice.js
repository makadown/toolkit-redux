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
            console.log(action);
            state.pokemons = action.payload;
        },
    },
});

export const {
    setLoading,
    setPokemons
} = pokemonSlice.actions;