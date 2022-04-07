import data from '../../assets/json/db.json';
import '../../styles/css/Movies.css';

const MoviesMoviesGrid = () => {

  return (
    <section className="movies movies--pt-4">
      <div className="movies__container">
        <h1 className="movies__title">🎥 Movies 🎥</h1>
        <ul className="movies__movie-list">
          {data.map((element) => {
            const { id, title, poster_path } = element;
            const imageEndpoint = `https://image.tmdb.org/t/p/w300${poster_path}`;
            return (
              <li
                key={id}
                className="movies__movie"
              >
                <figure className="movies__movie-poster-container">
                  <img
                    src={imageEndpoint}
                    alt={title}
                    className="movies__movie-poster"
                  />
                </figure>
                <h2 className="movies__movie-title">{title}</h2>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default MoviesMoviesGrid;