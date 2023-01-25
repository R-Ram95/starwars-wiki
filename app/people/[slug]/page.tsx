import Image from "next/image";
import Link from "next/link";
import { getPerson } from "../../../services/swapi.service";
import { Film } from "../../../types/film.type";
import { Person } from "../../../types/person.type";
import {
  getRelatedFilms,
  getRelatedHomeWorld,
  getRelatedSpecies,
  getRelatedStarship,
  getRelatedVehicle,
} from "../../utils/helpers";

export default async function PersonDetails({ params }: any) {
  const person = (await getPerson(params.slug)) as Person;

  const homeWorld = await getRelatedHomeWorld(person.homeworld);

  const species = await getRelatedSpecies(person.species);

  const starship = await getRelatedStarship(person.starships);

  const vehicle = await getRelatedVehicle(person.vehicles);

  const films = await getRelatedFilms(person.films);

  return (
    <div className="bg-black/20 p-7 rounded-lg">
      <p className="text-3xl mb-5 text-amber-300">{person.name}</p>
      <div className="flex flex-row">
        <div className="rounded-md">
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
                href={`/species/${species.id}`}
                className={"text-blue-400 underline"}
              >
                {species.name}
              </Link>
            )}
          </p>
          <div>
            <b className="text-amber-300">Home World: </b>
            <Link
              href={`/planets/${homeWorld.id}`}
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
                href={`/starships/${starship.id}`}
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
                href={`/vehicles/${vehicle.id}`}
                className="text-blue-400 underline"
              >
                {vehicle.name}
              </Link>
            )}
          </p>
          <div className="flex flex-col">
            <b className="text-amber-300">Films:</b>
            {films.map((episode: Film, index: number) => (
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
