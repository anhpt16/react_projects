import { useState, useEffect } from 'react';
import { BASE_URL, TOKEN } from '../constants';

export const useFetch = (api, queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `${BASE_URL}${api}?query=${queryTerm}`;
    useEffect(() => {
        async function fetchMovies() {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: TOKEN,
            }
          });
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url])
  return {data};
}

export const useFetchDetail= (api) => {
    const [data, setData] = useState([]);
    const url = `${BASE_URL}${api}`;
    useEffect(() => {
        async function fetchDetailMovie() {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: TOKEN,
                }
            });
            const json = await response.json();
            setData(json);
        }
        fetchDetailMovie();
    }, [url])
    return {data};
}
