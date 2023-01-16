import CustomText from "../ui/CustomText";
import landingImage from "../public/starwars-landing.webp";
import Image from "next/image";
export default async function Home() {
  return (
    <main>
      <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-100">
        Welcome to the StarWars Wikipedia
      </h1>
      <Image className="mt-5" src={landingImage} alt={""} />
      <CustomText className="mt-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quasi
        optio voluptatum. Illum architecto accusantium tempora totam deleniti
        ratione officia eaque neque, nulla asperiores, quod, exercitationem
        magni officiis laborum aut?
      </CustomText>
    </main>
  );
}
