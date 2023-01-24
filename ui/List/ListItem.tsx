import Image from "next/image";
import Link from "next/link";

interface IListItemProps {
  data: any;
  itemNumber: number;
}

const ListItem = ({ data, itemNumber }: IListItemProps) => {
  return (
    <Link href={`/people/${itemNumber}`}>
      <div className="bg-black/50 h-max-content p-5 rounded-lg flex items-center text-white">
        <div className="mr-10 rounded-md">
          <Image
            src={`/img/characters/${itemNumber}.jpg`}
            alt={data.name}
            height={100}
            width={50}
          />
        </div>
        <h1>{data.name}</h1>
      </div>
    </Link>
  );
};

export default ListItem;
