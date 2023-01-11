import axios, { AxiosResponse } from "axios";
import { Film, Films } from "../types/films.type";

const BASE_URL = "https://swapi.dev/api";

const swapiClient = axios.create({
  baseURL: BASE_URL,
});

export async function getFilms() {
  try {
    const response = await swapiClient.get<Films>("/films");
    return response.data;
  } catch (error) {
    console.log(error);
    return `Error: ${error}`;
  }
}

export async function getFilm(index: string) {
  try {
    const response = await swapiClient.get<Films>(`/films/${index}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return `Error: ${error}`;
  }
}
