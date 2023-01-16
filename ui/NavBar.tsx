import Image from "next/image";
import logo from "../public/starwars-logo.png";
import { BsFilm, BsPeopleFill } from "react-icons/bs";
import { BiPlanet, BiDna } from "react-icons/bi";
import { FaSpaceShuttle } from "react-icons/fa";
import { AiFillCar, AiFillHome } from "react-icons/ai";
import Link from "next/link";

const navItems = [
  {
    name: "Home",
    slug: "/",
    current: true,
    icon: AiFillHome,
  },
  {
    name: "Films",
    slug: "/films",
    current: false,
    icon: BsFilm,
  },
  {
    name: "People",
    slug: "/people",
    current: false,
    icon: BsPeopleFill,
  },
  {
    name: "Planets",
    slug: "/planets",
    current: false,
    icon: BiPlanet,
  },
  {
    name: "Species",
    slug: "/species",
    current: false,
    icon: BiDna,
  },
  {
    name: "Starships",
    slug: "/starships",
    current: false,
    icon: FaSpaceShuttle,
  },
  {
    name: "Vehicles",
    slug: "/vehicles",
    current: false,
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
        <Image className="h-8 w-20" src={logo} alt="Star Wars Wiki" />
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <nav className="mt-5 flex-1 space-y-1 px-2" aria-label="Sidebar">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.slug}
              className={classNames(
                item.current
                  ? "bg-light-blue text-white"
                  : "text-gray-300 hover:bg-light-blue hover:text-white",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-300"
                    : "text-gray-400 group-hover:text-gray-300",
                  "mr-4"
                )}
              />{" "}
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
