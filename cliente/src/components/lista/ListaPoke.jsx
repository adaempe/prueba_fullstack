import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import {useForm} from "react-hook-form";
import { usePoke } from '../../context/pokesContext'; 
import { Card, Message, Button, Input, Label } from "../ui";



const PokemonList = () => {
  const [pokemon, setPokemon] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const { createPoke } = usePoke();
  const { register, handleSubmit} = useForm();



  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        setPokemon(response.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);



  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
      setSearchedPokemon(response.data);
    } catch (err) {
      setError('Pokémon no encontrado');
      setSearchedPokemon(null);
    } finally {
      setLoading(false);
    }
  };


  const onSubmit =handleSubmit((data) =>{
    createPoke (data);

})



  return (
    <div className='bg-zinc-800 max-w-md p-10 items-center justify-center'>
      <h1 className="text-2xl font-bold">Lista de Pokémon</h1>
      <form onSubmit={handleSearch}>
        <input
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          type="text"
          placeholder="Buscar Pokemon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit" className='text-sky-500 my-2'>Buscar</Button>
      </form>


    

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      {searchedPokemon && (
        <div  className='items-center justify-center'  > 
          <h1 >{searchedPokemon.name}</h1>
          <img src={searchedPokemon.sprites.front_default} alt={searchedPokemon.name} />
          <p>Altura: {searchedPokemon.height}</p>
          <p>Peso: {searchedPokemon.weight}</p>
        </div>
      )}


<form onSubmit={onSubmit}>
        <input
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          type="hidden"
          placeholder="Pokemon"
          value={searchTerm}
          {...register("atributo")}
        />
        <Button type="submit" className='text-sky-500 my-2'>Guardar</Button>
      </form>

      <ul>
       
      </ul>
    </div>
  );
};
export default PokemonList;
