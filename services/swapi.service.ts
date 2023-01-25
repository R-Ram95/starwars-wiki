import axios from "axios";
import { Film } from "../types/film.type";
import { People, Person } from "../types/person.type";
import { Planet } from "../types/planet.type";
import { Species } from "../types/species.type";
import { Starship } from "../types/starship.type";
import { Vehicle } from "../types/vehicle.types";

const BASE_URL = "https://swapi.dev/api";

const swapiClient = axios.create({
  baseURL: BASE_URL,
});

export async function getFilm(index: string) {
  try {
    const response = await swapiClient.get<Film>(`/films/${index}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return `Error: ${error}`;
  }
}

export async function getFilms(): Promise<Film[]> {
  try {
    const response = await swapiClient.get("/films");
    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getPerson(index: string) {
  try {
    const response = await swapiClient.get<Person>(`/people/${index}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return `Error: ${error}`;
  }
}

export async function getPeople(pageNum?: string) {
  try {
    const response = await swapiClient.get<People>(
      pageNum ? `/people/${pageNum}` : "/people"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return `Error: ${error}`;
  }
}

export async function getPlanet(index: string) {
  try {
    const response = await swapiClient.get<Planet>(`/planets/${index}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return `Error: ${error}`;
  }
}

export async function getPlanets() {
  try {
    const response = await swapiClient.get<[Planet]>("/planets");
    return response.data;
  } catch (error) {
    console.log(error);
    return `Error: ${error}`;
  }
}

export async function getSpecies(index: string) {
  try {
    const response = await swapiClient.get<Species>(`/species/${index}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return `Error: ${error}`;
  }
}

export async function getAllSpecies() {
  try {
    const response = await swapiClient.get<[Species]>("/species");
    return response.data;
  } catch (error) {
    console.log(error);
    return `Error: ${error}`;
  }
}

export async function getStarship(index: string) {
  try {
    const response = await swapiClient.get<Starship>(`/starships/${index}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return `Error: ${error}`;
  }
}

export async function getStarships() {
  try {
    const response = await swapiClient.get<[Starship]>("/starships");
    return response.data;
  } catch (error) {
    console.log(error);
    return `Error: ${error}`;
  }
}

export async function getVehicle(index: string) {
  try {
    const response = await swapiClient.get<Vehicle>(`/vehicles/${index}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return `Error: ${error}`;
  }
}

export async function getVehicles() {
  try {
    const response = await swapiClient.get<[Vehicle]>("/vehicles");
    return response.data;
  } catch (error) {
    console.log(error);
    return `Error: ${error}`;
  }
}
