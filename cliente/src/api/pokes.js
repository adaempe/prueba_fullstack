import axios from "./axios";

export const getPokesRequest = async () => axios.get("/listaBD");

export const createPokeRequest = async (poke) => axios.post("/lista", poke);

export const getPokeRequest = async (id) => axios.get(`/lista/${id}`);
