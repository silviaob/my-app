import React, { useEffect, useState } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState();
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=1")
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      });
  }, []);

  const listItems = pokemonList.map((item) => <li>{item.name}</li>);

  return (
    <>
      <input type="text" id="fname" name="fname" value="John" readonly></input>
      <ul>{listItems}</ul>
    </>
  );
}

export default App;
