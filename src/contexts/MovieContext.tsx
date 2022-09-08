/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-empty-function */
import React, { createContext, ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Movie {
  id: string;
  title: string;
}
const movieDefault = {
  movies: [],
  addMovie: (): void => {},
  deleteMovie: (): void => {},
};
export const MovieContext = createContext<{
  movies: Movie[];
  addMovie: (title: string) => void;
  deleteMovie: (id: string) => void;
}>(movieDefault);

export const MovieContextProvider = ({ children }: { children: ReactNode }) => {
  //useState
  const [movies, setMovies] = useState<Movie[]>(movieDefault.movies);
  //add movie
  const addMovie = (title: string) => {
    // const _movies: Movie[] = movies;
    // _movies.push({ id: uuidv4(), title });
    // setMovies(_movies);
    setMovies([...movies, { id: uuidv4(), title }]);
  };
  //delete movie
  const deleteMovie = (id: string) =>
    setMovies(movies.filter((movie) => movie.id !== id));

  return (
    <MovieContext.Provider value={{ movies, addMovie, deleteMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContext;
