import { setLoading, setPokemons } from './pokemonSlice';
import { pokemonApi } from '../../../api/pokemonApi';

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(setLoading(true));
        try {
            // using Axios
            const response = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
            const payload = {
                page : page + 1,
                pokemons : response.data.results
            };
            dispatch(setPokemons(payload));
            /*const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=' + page * 10);
            const data = await response.json();
            const payload = {
                page : page + 1,
                pokemons : data.results
            };
            dispatch(setPokemons(payload));*/
        } catch (error) {
            dispatch(setLoading(false));
            console.log(error);
        }
    }    
}
