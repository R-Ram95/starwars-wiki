import {
  getFilms,
  getPlanet,
  getSpecies,
  getStarship,
  getVehicle,
} from "../../services/swapi.service";
import { Film } from "../../types/film.type";
import { Planet } from "../../types/planet.type";
import { Species } from "../../types/species.type";
import { Starship } from "../../types/starship.type";
import { Vehicle } from "../../types/vehicle.types";

export const getRelatedHomeWorld = async (homeWorldUrl: string) => {
  const homeWorldIndex = homeWorldUrl.split("/")[5];
  const homeWorld = (await getPlanet(homeWorldIndex)) as Planet;
  return { ...homeWorld, id: homeWorldIndex };
};

export const getRelatedSpecies = async (speciesArray: string[]) => {
  const speciesIndex =
    speciesArray.length > 0 ? speciesArray[0]?.split("/")[5] : undefined;
  const species = speciesIndex
    ? ((await getSpecies(speciesIndex)) as Species)
    : ({ name: "Unknown" } as Species);

  return { ...species, id: speciesIndex };
};

export const getRelatedStarship = async (starshipsArray: string[]) => {
  const starshipIndex =
    starshipsArray.length > 0 ? starshipsArray[0].split("/")[5] : undefined;
  const starship = starshipIndex
    ? ((await getStarship(starshipIndex)) as Starship)
    : ({ name: "n/a" } as Starship);

  return { ...starship, id: starshipIndex };
};

export const getRelatedVehicle = async (vehiclesArray: string[]) => {
  const vehicleIndex =
    vehiclesArray.length > 0 ? vehiclesArray[0].split("/")[5] : undefined;
  const vehicle = vehicleIndex
    ? ((await getVehicle(vehicleIndex)) as Vehicle)
    : ({ name: "n/a" } as Vehicle);

  return { ...vehicle, id: vehicleIndex };
};

export const getRelatedFilms = async (filmsArray: string[]) => {
  const films = await getFilms();

  const relatedFilms: Film[] = [];

  filmsArray.forEach((film) => {
    const filmIndex = film.split("/")[5];
    relatedFilms.push(
      films.find((item) => item["episode_id"] === Number(filmIndex)) as Film
    );
  });

  return relatedFilms;
};
