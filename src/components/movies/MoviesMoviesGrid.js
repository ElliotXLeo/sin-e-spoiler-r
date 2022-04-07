import data from '../../assets/json/db.json';
import '../../styles/css/Movies.css';
import MoviesMovie from './MoviesMovie';

const MoviesMoviesGrid = () => {

  return (
    <section className="movies movies--pt-4">
      <div className="movies__container">
        <h1 className="movies__title">🎥 Movies 🎥</h1>
        <ul className="movies__movie-list">
          {data.map((movie) => {
            return (
              <MoviesMovie
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