import axios from "axios";

export const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 5 * 1000,
});