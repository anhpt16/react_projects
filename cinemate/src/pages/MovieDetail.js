import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchDetail } from '../hooks/useFetch';
import { useTitle } from '../hooks';
import { Link } from 'react-router-dom';

import { BASE_URL_IMAGE } from '../constants';
import Backup from "../assets/backup.png";

export const MovieDetail = () => {
  const params = useParams();

  const {data: movie} = useFetchDetail(`/movie/${params.id}`);
  useTitle(movie.title);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  if (!movie || Object.keys(movie).length === 0) {
    return (
      <main>
        <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
      </main>
    );
  }

  const image = movie.poster_path ? `${BASE_URL_IMAGE}/w500/${movie.poster_path}` : Backup;


  return (
    <main>
      {/* <button className="mt-4 p-2 w-20 border-2 border-slate-500 rounded-lg dark:border-white dark:text-white">Back</button> */}
      <section className="pt-10 pb-16 flex justify-start flex-row flex-wrap other:justify-center">
        <div className="mr-16 other:mr-0 other:px-6 flex-initial">
          <img className="rounded-lg" src={image} alt="movie_poster" />
        </div>
        <div className="py-6 flex-1 other:px-6 other:mt-3">
          <h2 className="text-3xl font-semibold dark:text-white">{movie.original_title}</h2>
          <div className="flex items-center pt-3">
            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{movie.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <Link to="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{`${movie.vote_count} reviews`}</Link>
          </div>
          <p className="py-6 dark:text-white">{movie.overview}</p>
          <div className="flex flex-wrap items-center">
            <p className="font-semibold mr-3 dark:text-white">Genres: </p>
            {movie.genres?.map((genre) => (
              <div key={genre.id} className="p-2.5 mr-2 border-2 border-slate-500 dark:border-white dark:text-white rounded">{genre.name}</div>
            ))}
          </div>

          <div className="pt-6">
            <span className="font-semibold dark:text-white mr-3">Runtime: </span>
            <span className="dark:text-white">{`${movie.runtime} min`}</span>
          </div>
          <div className="pt-3">
            <span className="font-semibold dark:text-white mr-3">Budget: </span>
            <span className="dark:text-white">{`${movie.budget}$`}</span>
          </div>
          <div className="pt-3">
            <span className="font-semibold dark:text-white mr-3">Revenue: </span>
            <span className="dark:text-white">{`${movie.revenue}$`}</span>
          </div>
          <div className="pt-3">
            <span className="font-semibold dark:text-white mr-3">Release: </span>
            <span className="dark:text-white">{`${movie.release_date}`}</span>
          </div>
          <div className="pt-3">
            <span className="font-semibold dark:text-white mr-3">IMDB code: </span>
            <span className="dark:text-white">{`${movie.imdb_id}`}</span>
          </div>
        </div>
      </section>
    </main>
  )
}
