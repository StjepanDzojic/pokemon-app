import React, {useState} from 'react';
import PokemonList from './PokemonList';
import PokemList from './PokemonList'
function App() {
  const [pokemon, setPokemon] = useState(["bulbasaur","charmander"])

  return (
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;
