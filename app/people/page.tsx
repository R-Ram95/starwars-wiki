import { getPeople } from "../../services/swapi.service";
import { People } from "../../types/person.type";
import List from "../../ui/List";

export default async function Page() {
  const people = (await getPeople()) as People;

  return (
    <main>
      <h1 className="text-3xl font-bold underline text-cyan-100 mb-5">
        People
      </h1>
      <List items={people} listType="people" />
    </main>
  );
}
