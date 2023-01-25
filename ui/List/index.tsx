"use client";

import { useState } from "react";
import { getPeople } from "../../services/swapi.service";
import ListItem from "./ListItem";

interface IListProps {
  items: any;
  listType:
    | "people"
    | "films"
    | "planets"
    | "species"
    | "starships"
    | "vehicles";
}

const List = ({ items, listType }: IListProps) => {
  const [displayItems, setDisplayItems] = useState<any>(items);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async (type: "next" | "prev") => {
    let endpoint;
    if (type === "next") {
      endpoint = displayItems.next.split("/")[5];
    }
    if (type === "prev") {
      endpoint = displayItems.previous.split("/")[5];
    }
    if (listType === "people") {
      setLoading(true);
      const people = await getPeople(endpoint);
      setDisplayItems(people);
      setLoading(false);
    }
  };

  return (
    <div className={`flex flex-col gap-4 ${loading && "items-center"}`}>
      {loading && (
        <div className="flex bg-white rounded-lg w-1/2 h-20 justify-center items-center">
          Loading...
        </div>
      )}
      {!loading &&
        displayItems.results.map((item: any, index: number) => (
          <ListItem
            data={item}
            key={index}
            itemNumber={Number(item.url.split("/")[5])}
          />
        ))}
      <div className="flex flex-row justify-between w-full">
        <button
          className="w-20 bg-zinc-100/90 px-2 py-1 rounded-md border border-zinc-500/90 disabled:bg-zinc-100/20 disabled:border-zinc-500/20 disabled:text-black/20"
          onClick={() => handleButtonClick("prev")}
          disabled={!displayItems.previous}
        >
          Prev
        </button>
        <button
          className="w-20 bg-zinc-100/90 px-2 py-1 rounded-md border border-zinc-500/90 disabled:bg-zinc-100/20 disabled:border-zinc-500/20 disabled:text-black/20"
          onClick={() => handleButtonClick("next")}
          disabled={!displayItems.next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default List;
