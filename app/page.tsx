import Image from "next/image";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">hello</h1>
    </main>
  );
}
