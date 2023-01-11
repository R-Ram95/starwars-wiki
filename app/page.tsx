import Image from "next/image";
import { Inter } from "@next/font/google";
import { getFilm, getFilms } from "../services/swapi.service";
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const film = await getFilm("1");
  console.log("🚀 ~ file: page.tsx:9 ~ Home ~ film", film);

  return (
    <main>
      <h1>hello</h1>
    </main>
  );
}
