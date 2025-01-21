import { useEffect } from "react";
import { Card } from "../components";
import { useFetch, useTitle } from '../hooks';

export const MovieList = ({api, title}) => {
  const { data: movies } = useFetch(api);
  useTitle(`${title} / Cinemate`);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-center">
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }
        </div>
      </section>
    </main>
  )
}
