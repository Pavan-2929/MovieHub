import Image from "next/image";
import React from "react";

const SingleMovie = async ({ params }) => {
  const movieId = params.id;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  console.log(movie);
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex justify-center">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          className="w-[20vw] h-auto rounded-lg"
        ></Image>
      </div>
      <div className="mt-6">
        <p className="text-2xl font-semibold text-gray-800">
          {movie.original_title}
        </p>
        <p className="mt-2 text-gray-700">{movie.overview}</p>
      </div>
      <div className="mt-4 flex gap-8">
        <div>
          <span className="font-semibold text-gray-800">Release Date:</span>
          <p className="text-gray-700">{movie.release_date}</p>
        </div>
        <div>
          <span className="font-semibold text-gray-800">Rating:</span>
          <p className="text-gray-700">{movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
