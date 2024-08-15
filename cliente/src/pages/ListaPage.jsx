import React from 'react';
import PokemonList from '../components/lista/ListaPoke';
import { useAuth } from '../context/authContext';
const App = () => {


  const {user} = useAuth()
  console.log(user);
  
  return (
    <div>
      <PokemonList />
    </div>
  );
};

export default App;