import { useContext } from "react";
import "./Pokedex.css";
import { UserNameContex } from "../../context/UserNameContex";
import PokemonList from "../../components/pokedex/PokemonList/PokemonList";
import { useLoaderData } from "react-router-dom";
import FiltersForm from "../../components/pokedex/FiltersForm/FiltersForm";

const Pokedex = () => {
  const { pokemons, pokemonName, pokemonTypeId } = useLoaderData();
  const { userName } = useContext(UserNameContex);

          
  return (
    <section>
      <p className="welcome">
        <em>Biembenido {userName}</em>, agui podras encontrar tu pokemon favorito
      </p>

      <FiltersForm nameInitial={pokemonName} typeInitial={pokemonTypeId} />

      {!pokemons.length ? (
        <p>No hay pokemones</p>
      ) : (
          <PokemonList pokemons={pokemons} />
      )}
    </section>
  );
};

export default Pokedex;