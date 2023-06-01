import { axiosInstance } from "../api/axiosInstance"; 

const getPokmonImg = (sprites) => {
  const firstOption = sprites.other.dream_world.front_default;
  const secondOption = sprites.other["official-artwork"].front_default;
  const thirdOption = sprites.other.home.front_default;

  if (firstOption) return firstOption;
  if (secondOption) return secondOption;
  if (thirdOption) return thirdOption;

};

export const getPokemonById = async (id) => {
  try {
    const res = await axiosInstance.get(`pokemon/${id}`);
    const pokemonDate = res.data;

    const adaptedPokemon = {
      name: pokemonDate.name[0].toUpperCase() + pokemonDate.name.slice(1),
      types: pokemonDate.types.map((typeInfo) => typeInfo.type.name),
      stats: pokemonDate.stats.map((statInfo) => ({
        name: statInfo.stat.name,
        value: statInfo.base_stat,
      })),
      image: getPokmonImg(pokemonDate.sprites),
    };

    return adaptedPokemon;

  } catch (error) {
    console.error(error);
  }
};