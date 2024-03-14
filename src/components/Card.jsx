import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ results }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {results.map((result) => (
        <Link
          href={`/movie/${result.id}`}
          key={result.id}
          className="bg-white p-4 rounded-lg shadow-md"
        >
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            alt={result.original_title}
            className="w-full h-72 rounded-md mb-4"
          ></Image>
          <h1 className="text-xl font-bold">{result.original_title}</h1>
          <p className="text-gray-700 line-clamp-3">{result.overview}</p>
        </Link>
      ))}
    </div>
  );
};

export default Card;
