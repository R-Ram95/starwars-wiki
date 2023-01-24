import { FunctionComponent } from "react";
import { Film } from "../types/film.type";
import { Person } from "../types/person.type";
import { Planet } from "../types/planet.type";
import { Species } from "../types/species.type";
import { Starship } from "../types/starship.type";
import { Vehicle } from "../types/vehicle.types";
import Image from "next/image";

const ItemCard: FunctionComponent<any> = (
  item: Film | Person | Planet | Species | Starship | Vehicle
) => {
  console.log(item);
  return (
    <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
      <div className="flex flex-1 flex-col ">
        <div>
          <Image
            className="flex-shrink-0 object-fit"
            src="/img/films/1.jpg"
            alt=""
            fill
          />
        </div>
        <h3 className="mt-6 text-sm font-medium text-gray-900">
          {item.created}
        </h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-sm text-gray-500">{item.created}</dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
              {item.created}
            </span>
          </dd>
        </dl>
      </div>
    </li>
  );
};

export default ItemCard;
