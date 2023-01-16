import { AiFillCar } from "react-icons/ai";
import { BiDna, BiPlanet } from "react-icons/bi";
import { BsFilm, BsPeopleFill } from "react-icons/bs";
import { FaSpaceShuttle } from "react-icons/fa";

export const navItems = [
  {
    name: "Films",
    slug: "films",
    icon: BsFilm,
  },
  {
    name: "People",
    slug: "people",
    icon: BsPeopleFill,
  },
  {
    name: "Planets",
    slug: "planets",
    icon: BiPlanet,
  },
  {
    name: "Species",
    slug: "species",
    icon: BiDna,
  },
  {
    name: "Starships",
    slug: "starships",
    icon: FaSpaceShuttle,
  },
  {
    name: "Vehicles",
    slug: "vehicles",
    icon: AiFillCar,
  },
];
