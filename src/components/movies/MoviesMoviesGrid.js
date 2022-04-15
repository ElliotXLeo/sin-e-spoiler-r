import { useEffect, useRef, useState } from 'react';
import useApi from '../../hooks/useApi';
import { useDebounce } from '../../hooks/useDebounce';
import { useQuery } from '../../hooks/useQuery';
import '../../styles/css/Movies.css';
import Empty from '../sections/Empty';
import Spinner from '../sections/Spinner';
import MoviesMovieCard from './MoviesMovieCard';

const MoviesMoviesGrid = () => {


  const [page, setPage] = useState(1);
  const moviesButtonPrev = useRef();
  const moviesButtonNext = useRef();

  const query = useQuery();
  const search = query.get('search');
  const debouncedSearch = useDebounce(search, 300);

  let recurso = '';

  if (debouncedSearch) {
    recurso = `/search/movie?query=${debouncedSearch}&page=${page}`;
  } else {
    recurso = `/discover/movie?page=${page}`;
  }

  const [movies] = useApi(recurso);

  const previousMovies = () => {
    moviesButtonPrev.current.disabled = true;
    movies.page > 1 && setPage(page - 1);
    window.scroll(0, 0);
  };

  const nextMovies = () => {
    moviesButtonNext.current.disabled = true;
    movies.page < movies.total_pages && setPage(page + 1);
    window.scroll(0, 0);
  };

  useEffect(() => {
    if (moviesButtonPrev.current) {
      moviesButtonPrev.current.disabled = false;
    }
    if (moviesButtonNext.current) {
      moviesButtonNext.current.disabled = false;
    }
  }, [movies]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  return (
    <section className="movies animate__animated animate__fadeIn">
      <div className="movies__container">
        <h1 className="movies__title">🎥 Movies 🎥</h1>
        {
          Object.keys(movies).length === 0 ?
            (
              <Spinner />
            )
            :
            (
              movies.results.length === 0
                ?
                (
                  <Empty />
                )
                :
                (
                  <>
                    <ul className="movies__movie-list">
                      {movies.results.map((movie) => {
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
                        className={`movies__button ${movies.page <= 1 ? 'movies__button--hidden' : ''}`}
                        onClick={previousMovies}
                        ref={moviesButtonPrev}
                      >
                        Anterior
                      </button>
                      <button
                        className={`movies__button ${movies.page >= movies.total_pages ? 'movies__button--hidden' : ''}`}
                        onClick={nextMovies}
                        ref={moviesButtonNext}
                      >Siguiente</button>
                    </div>
                  </>
                )
            )
        }
      </div>
    </section >
  );
}

export default MoviesMoviesGrid;