import data from '../../assets/json/db.json';
import '../../styles/css/Movies.css';
import MoviesMovieCard from './MoviesMovieCard';

const MoviesMoviesGrid = () => {

  return (
    <section className="movies movies--pt-4 animate__animated animate__fadeIn">
      <div className="movies__container">
        <h1 className="movies__title">🎥 Movies 🎥</h1>
        <ul className="movies__movie-list">
          {data.map((movie) => {
            return (
              <MoviesMovieCard
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