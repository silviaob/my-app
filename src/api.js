export const api = {
  allPokemons: async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=1"
    );
    return response.json();
  },

  pokemonDetail: async (url) => {
    const response = await fetch(url);
    return response.json();
  },
};
