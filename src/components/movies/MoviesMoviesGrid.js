import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../styles/css/Movies.css';
import MoviesMovieCard from './MoviesMovieCard';

const MoviesMoviesGrid = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://api.themoviedb.org/3/discover/movie`;
        const options = {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjlmNzA1YjQ3ODRmNTQ3Mzc2ZjJjZDg4Mzg5MTY4NiIsInN1YiI6IjYyNTA1MjFlYTA1NWVmMDA2NTU3NTEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYHK5Rt55pBTHvGjrEGTjAXRVlGOdnDBpqBxhnhrCL4',
            'Content-Type': 'application/json;charset=utf-8'
          },
          url,
        };
        const response = await axios(options);
        const data = response.data;
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <section className="movies movies--pt-4 animate__animated animate__fadeIn">
      <div className="movies__container">
        <h1 className="movies__title">🎥 Movies 🎥</h1>
        <ul className="movies__movie-list">
          {movies.map((movie) => {
            return (
              <MoviesMovieCard
                key={movie.id}
                movie={movie}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default MoviesMoviesGrid;