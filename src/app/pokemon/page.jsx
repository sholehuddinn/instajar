"use client";

import { useEffect, useState } from "react";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
        const data = await res.json();

        // data.results hanya berisi nama & URL, jika ingin detail:
        const detailPromises = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );

        const allDetails = await Promise.all(detailPromises);
        setPokemonList(allDetails);
      } catch (err) {
        console.error("Gagal mengambil data Pokémon:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {pokemonList.map((pokemon) => (
            <div
              key={pokemon.id}
              className="border rounded-lg p-2 flex flex-col items-center"
            >
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-20 h-20"
              />
              <p className="capitalize mt-2">{pokemon.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
