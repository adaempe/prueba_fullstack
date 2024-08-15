import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        setPokemon(response.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='bg-zinc-800 max-w-md p-10 items-center justify-center'>
      <h1 className="text-2xl font-bold my-2" >Lista de Pokémon</h1>
      <ul>
        {pokemon.map((p, index) => (

          <li key={index}> {p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;