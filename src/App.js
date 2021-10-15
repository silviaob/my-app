import React, { useEffect, useState } from "react";
import { api } from "./api";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [inputList, setInputList] = useState("");

  const fechPokemons = async () => {
    const listPokemons10 = await api.allPokemons();
    setPokemonList(listPokemons10.results);
  };

  const fechPokemonDetail = async (url) => {
    console.log(url);
    console.log(await api.pokemonDetail(url));
  };

  useEffect(() => {
    fechPokemons();

    pokemonList.map((pokemon) => fechPokemonDetail(pokemon.url));
  }, []);

  console.log(pokemonList);

  const filterPokemons = pokemonList
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(inputList.toLowerCase())
    )
    .map((item) => <li>{item.name}</li>);

  return (
    <>
      <input
        onChange={(event) => setInputList(event.target.value)}
        value={inputList}
      ></input>
      <ul>{filterPokemons}</ul>
    </>
  );
}

export default App;
