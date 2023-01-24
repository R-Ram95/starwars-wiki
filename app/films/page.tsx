import { getFilms } from "../../services/swapi.service";
import { Film } from "../../types/film.type";
import CustomText from "../../ui/CustomText";
import ItemCard from "../../ui/ItemCard";

export default async function Page() {
  const films: Film[] = await getFilms();
  return (
    <main>
      <>
        <CustomText className="text-3xl font-bold">Films</CustomText>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {films.map((item) => {
            return <ItemCard key={item.title} item={item} />;
          })}
        </ul>
      </>
    </main>
  );
}
