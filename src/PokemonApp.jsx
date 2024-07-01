import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/pokeThunks';

export const PokemonApp = () => {

  const myDispatch = useDispatch()

  const { pokemons =[], page, isLoading } = useSelector(state => state.pokemons);

  useEffect(() => {
    myDispatch(getPokemons());
    return () => {
      console.log('cleanup');
    }
  }, [])

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <p>Loading: {isLoading ? 'True' : 'False'}</p>
        <ul>
            {
              pokemons && pokemons.map(({ name }) => <li key={name}>{name}</li>)
            }
        </ul>
        <hr />
        <h4>Page: {page}</h4>
        {
            // page > 0 && <button onClick={() => myDispatch(getPokemons(page-1))}>Prev</button>
        }
        <button disabled={isLoading}
               onClick={() => 
                      myDispatch(getPokemons(page))
                      }>Next</button>
    </>
  )
}
