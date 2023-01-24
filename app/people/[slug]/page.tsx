import Image from "next/image";
import Link from "next/link";
import {
  getFilm,
  getFilms,
  getPerson,
  getPlanet,
  getSpecies,
  getStarship,
  getVehicle,
} from "../../../services/swapi.service";
import { Film } from "../../../types/film.type";
import { Person } from "../../../types/person.type";
import { Planet } from "../../../types/planet.type";
import { Species } from "../../../types/species.type";
import { Starship } from "../../../types/starship.type";
import { Vehicle } from "../../../types/vehicle.types";

export default async function PersonDetails({ params }: any) {
  const person = (await getPerson(params.slug)) as Person;

  const homeWorldIndex = person.homeworld.split("/")[5];
  const homeWorld = (await getPlanet(homeWorldIndex)) as Planet;

  const speciesIndex =
    person.species.length > 0 ? person.species[0]?.split("/")[5] : undefined;
  const species = speciesIndex
    ? ((await getSpecies(speciesIndex)) as Species)
    : ({ name: "Unknown" } as Species);

  const starshipIndex =
    person.starships.length > 0 ? person.starships[0].split("/")[5] : undefined;
  const starship = starshipIndex
    ? ((await getStarship(starshipIndex)) as Starship)
    : ({ name: "n/a" } as Starship);

  const vehicleIndex =
    person.vehicles.length > 0 ? person.vehicles[0].split("/")[5] : undefined;
  const vehicle = vehicleIndex
    ? ((await getVehicle(vehicleIndex)) as Vehicle)
    : ({ name: "n/a" } as Vehicle);

  const films = await getFilms();

  const characterFilms: Film[] = [];

  person.films.forEach((film) => {
    const filmIndex = film.split("/")[5];
    characterFilms.push(
      films.find((item) => item["episode_id"] === Number(filmIndex)) as Film
    );
  });

  return (
    <div className="bg-black/20 p-7 rounded-lg">
      <p className="text-3xl mb-5 text-amber-300">{person.name}</p>
      <div className="flex flex-row">
        <div className="border border-black/40 rounded-sm">
          <Image
            src={`/img/characters/${params.slug}.jpg`}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col items-start ml-10 gap-6 text-white">
          <p>
            <b className="text-amber-300">Species: </b>
            {species.name === "Unknown" ? (
              <>{species.name}</>
            ) : (
              <Link
                href={`/species/${speciesIndex}`}
                className={"text-blue-400 underline"}
              >
                {species.name}
              </Link>
            )}
          </p>
          <div>
            <b className="text-amber-300">Home World: </b>
            <Link
              href={`/planets/${homeWorldIndex}`}
              className="text-blue-400 underline"
            >
              {homeWorld.name}
            </Link>
          </div>
          <p>
            <b className="text-amber-300">Height: </b>
            {person.height}
          </p>
          <p>
            <b className="text-amber-300">Mass: </b>
            {person.mass}
          </p>
          <p>
            <b className="text-amber-300">Hair Color: </b>
            {person["hair_color"]}
          </p>
          <p>
            <b className="text-amber-300">Skin Color: </b>
            {person["skin_color"]}
          </p>
          <p>
            <b className="text-amber-300">Eye Color: </b>
            {person["eye_color"]}
          </p>
          <p>
            <b className="text-amber-300">Birth Year: </b>
            {person["birth_year"]}
          </p>
          <p>
            <b className="text-amber-300">Gender: </b>
            {person.gender}
          </p>
          <p>
            <b className="text-amber-300">Starship: </b>
            {starship.name === "n/a" ? (
              <>{starship.name}</>
            ) : (
              <Link
                href={`/starships/${starshipIndex}`}
                className="text-blue-400 underline"
              >
                {starship.name}
              </Link>
            )}
          </p>
          <p>
            <b className="text-amber-300">Vehicle: </b>
            {vehicle.name === "n/a" ? (
              <>{vehicle.name}</>
            ) : (
              <Link
                href={`/vehicles/${vehicleIndex}`}
                className="text-blue-400 underline"
              >
                {vehicle.name}
              </Link>
            )}
          </p>
          <div className="flex flex-col">
            <b className="text-amber-300">Films:</b>
            {characterFilms.map((episode: Film, index: number) => (
              <Link
                href={`films/${episode["episode_id"]}`}
                key={index}
                className="text-blue-400 underline"
              >
                {episode.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly mt-5 text-white">
        <p>
          <b className="text-amber-300">Created: </b>
          {person.created}
        </p>
        <p>
          <b className="text-amber-300">Last Updated: </b>
          {person.edited}
        </p>
      </div>
    </div>
  );
}
