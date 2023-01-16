"use client";
import { BsFilm, BsPeopleFill } from "react-icons/bs";
import { BiPlanet, BiDna } from "react-icons/bi";
import { FaSpaceShuttle } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const navItems = [
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function NavBar() {
  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-blue-100 bg-dark-blue md:bottom-0 md:z-auto md:w-52 md:border-r md:border-blue-100">
      <div className="flex h-16 flex-shrink-0 items-center bg-yellow px-4">
        <Link className="flex flex-row space-x-5 items-center pt-5" href={"/"}>
          <h1 className="font-extrabold font-mono text-transparent text-2xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-500 ">
            StarWars <br /> Wikipedia
          </h1>
        </Link>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <nav className="mt-5 flex-1 space-y-1 px-2" aria-label="Sidebar">
          {navItems.map((item) => NavItem(item))}
        </nav>
      </div>
    </div>
  );
}

function NavItem(item: any): any {
  const segement = useSelectedLayoutSegment();
  let isActive: boolean = segement === item.slug;
  return (
    <Link
      key={item.name}
      href={`/${item.slug}`}
      className={classNames(
        isActive
          ? "bg-light-blue text-white"
          : "text-gray-300 hover:bg-blue-600 hover:text-white",
        "group flex items-center px-2 py-2 text-md font-medium rounded-md"
      )}
    >
      <item.icon
        className={classNames(
          isActive
            ? "text-gray-300"
            : "text-gray-400 group-hover:text-gray-300",
          "mr-4"
        )}
      />
      {item.name}
    </Link>
  );
}
