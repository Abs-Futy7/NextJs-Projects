import Image from "next/image";
import { FaStar } from "react-icons/fa";

const businesses = [
  {
    id: 1,
    name: "Cafe Mocha",
    address: "123 Main St",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
  {
    id: 2,
    name: "Java Jive",
    address: "456 Elm St",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
  },
  {
    id: 3,
    name: "Latte Love",
    address: "789 Oak St",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  },
  {
    id: 4,
    name: "Brew Haven",
    address: "101 Maple St",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
  },
  {
    id: 5,
    name: "Espresso Express",
    address: "202 Birch Ave",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
];

const BusinessGrid = ({ startIndex, itemsPerPage }) => {

  const displayedBusinesses = businesses.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {displayedBusinesses.map((business) => (
        <div
          key={business.id}
          className="border border-purple-800 rounded-2xl p-4 shadow-lg hover:scale-105 transition-transform"
        >
          <Image
            src={business.image}
            alt={business.name}
            width={100}
            height={100}
            className="rounded-xl object-cover w-full h-[150px]"
            unoptimized
          />

          <div className="mt-3">
            <h2 className="text-lg font-semibold">{business.name}</h2>
            <p className="text-gray-500">{business.address}</p>
            <div className="flex items-center gap-1 mt-2">
              <FaStar className="text-yellow-400" />
              <span>{business.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessGrid;
