  import { useEffect, useState } from "react";
  import "./PokemonCard.css";
  import { getPokemonById } from "../../../services/getPokemonById";

const PokemonCard = ({ pokemonid }) => {
  const [pokemon, setPokemon] = useState(null);

  const statsTarget = ["hp", "attack", "defense", "speed"];
  const stats = pokemon?.stats.filter((stat) =>
    statsTarget.includes(stat.name.toLowerCase())
  );

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonData = await getPokemonById(pokemonid);
      setPokemon(pokemonData);
    };

    loadPokemon();
  }, []);

  return (
    <article className="pokemon-card">
      {!pokemon && (
          <img className="img_carga" src="./src/assets/loading_img.png"/>
      )}

      {pokemon && (
        <>
          <div className="card-img">
            <img src={pokemon.image} alt=""  />
          </div>

          <h2 className="card-title">{pokemon.name}</h2>

          <section className="card_data">
            <h3>Tipo</h3>
            <ul className="data-list">
              {pokemon.types.map((type) => (
                <li className="data-item" key={type}>
                  {type}
                </li>
              ))}
            </ul>
          </section>

          <section className="card-power">
            <h3>Stas</h3>
            <ul className="power-list">
              {stats.map((stat) => (
                <li className="power-item" key={stat.name}>
                  <article>
                    <h4>{stat.name.toUpperCase()}:</h4>
                    <p>{stat.value}</p>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </article>
  );
};

export default PokemonCard