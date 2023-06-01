import { useState } from "react"
import { usePagination } from "../../../hooks/usePagination";
import PagesComponent from "../PagesComponent/PagesComponent";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Link } from "react-router-dom";
import './PokemonList.css';


const PokemonList = ({ pokemons }) => {
  const [pokemonsPerPage, setpokemonsPerPage] = useState(20);
  const [currentPage, totalPages, pokemonsSlice, changePageTo] = usePagination(
    pokemons, pokemonsPerPage
  );

  return ( 
    <section>

      <PagesComponent
        totalPages={totalPages}
        onChangePage={changePageTo}
        onNextPage={() => changePageTo(currentPage + 1)}
        onBackPage={() => changePageTo(currentPage - 1)}
      />


      <div className="caja">
      <ul className="data_list">
        {pokemonsSlice.map((pokemon) => (
          <li key={pokemon.url}>
                <PokemonCard pokemonid={pokemon.url.split("/").at(-2)} />
          </li>
        ))}
      </ul>
      </div>


      <PagesComponent
        totalPages={totalPages}
        onChangePage={changePageTo}
        onNextPage={() => changePageTo(currentPage + 1)}
        onBackPage={() => changePageTo(currentPage - 1)}
      />
    </section>
  );
};

export default PokemonList;