import { createContext, useContext, useState } from "react";
import {
  createPokeRequest,
  getPokesRequest,
  getPokeRequest,
} from "../api/pokes";

const PokeContext = createContext();

export const usePoke = () => {
  const context = useContext(PokeContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};

export function PokeProvider({ children }) {
  const [pokes, setPokes] = useState([]);

  const getPokes = async () => {
    const res = await getPokesRequest();
    setPokes(res.data);
  };


  const createPoke= async (poke) => {
    try {
      const res = await createPokeRequest(poke);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPoke = async (id) => {
    try {
      const res = await getPokeRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <PokeContext.Provider
      value={{
        pokes,
        getPokes,
        createPoke,
        getPoke,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
}
