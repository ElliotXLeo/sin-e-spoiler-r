import useApi from '../../hooks/useApi';
import { useQuery } from '../../hooks/useQuery';
import '../../styles/css/Movies.css';
import Spinner from '../sections/Spinner';
import MoviesMovieCard from './MoviesMovieCard';

const MoviesMoviesGrid = () => {

  const query = useQuery();
  const search = query.get('search');

  let recurso = '';

  if (search) {
    recurso = `/search/movie?query=${search}`;
  } else {
    recurso = '/discover/movie';
  }

  const movies = useApi(recurso);

  return (
    <section className="movies animate__animated animate__fadeIn">
      <div className="movies__container">
        <h1 className="movies__title">🎥 Movies 🎥</h1>
        <ul className="movies__movie-list">
          {
            Object.keys(movies).length === 0 ?
              (
                <Spinner />
              )
              :
              (
                movies.results.map((movie) => {
                  return (
                    <MoviesMovieCard
                      key={movie.id}
                      movie={movie}
                    />
                  )
                })
              )
          }
        </ul>
      </div>
    </section>
  );
}

export default MoviesMoviesGrid;