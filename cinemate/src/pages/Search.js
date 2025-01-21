import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetch, useTitle } from '../hooks';
import { Card } from '../components';

export const Search = ({api}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(api, queryTerm);
  useTitle(`Results for ${queryTerm}`)

  return (
    <main>
      <section>
        <p className="py-4 px-3 text-3xl text-gray-700 dark:text-white">
          {movies.length === 0 ? `No results '${queryTerm}'` : `Results for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-center">
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          )) }
        </div>
      </section>
    </main>
  )
}
