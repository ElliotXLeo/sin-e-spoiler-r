import { useEffect, useRef, useState } from 'react';
import useApi from '../../hooks/useApi';
import { useQuery } from '../../hooks/useQuery';
import '../../styles/css/Movies.css';
import Spinner from '../sections/Spinner';
import MoviesMovieCard from './MoviesMovieCard';

const MoviesMoviesGrid = () => {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const moviesButtonPrev = useRef();
  const moviesButtonNext = useRef();

  const query = useQuery();
  const search = query.get('search');

  let recurso = '';

  if (search) {
    recurso = `/search/movie?query=${search}&page=${page}`;
  } else {
    recurso = `/discover/movie?page=${page}`;
  }

  const [data] = useApi(recurso);

  const previousMovies = () => {
    moviesButtonPrev.current.disabled = true;
    data.page > 1 && setPage(page - 1);
    window.scroll(0, 0);
  };

  const nextMovies = () => {
    moviesButtonNext.current.disabled = true;
    data.page < data.total_pages && setPage(page + 1);
    window.scroll(0, 0);
  };

  useEffect(() => {
    Object.keys(data).length > 0 && setMovies(data.results);
    if (moviesButtonPrev.current) {
      moviesButtonPrev.current.disabled = false;
    }
    if (moviesButtonNext.current) {
      moviesButtonNext.current.disabled = false;
    }
  }, [data]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <section className="movies animate__animated animate__fadeIn">
      <div className="movies__container">
        <h1 className="movies__title">🎥 Movies 🎥</h1>
        {
          Object.keys(data).length === 0 ?
            (
              <Spinner />
            )
            :
            (
              <>
                <ul className="movies__movie-list">
                  {movies.map((movie) => {
                    return (
                      <MoviesMovieCard
                        key={movie.id}
                        movie={movie}
                      />
                    )
                  })}
                </ul>
                <div className="movies__button-container">
                  <button
                    className={`movies__button ${data.page <= 1 ? 'movies__button--hidden' : ''}`}
                    onClick={previousMovies}
                    ref={moviesButtonPrev}
                  >
                    Anterior
                  </button>
                  <button
                    className={`movies__button ${data.page >= data.total_pages ? 'movies__button--hidden' : ''}`}
                    onClick={nextMovies}
                    ref={moviesButtonNext}
                  >Siguiente</button>
                </div>
              </>
            )
        }
      </div>
    </section >
  );
}

export default MoviesMoviesGrid;