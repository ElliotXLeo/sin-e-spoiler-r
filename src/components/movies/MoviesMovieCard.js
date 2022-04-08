import { Link } from "react-router-dom";

const MoviesMovie = ({ movie }) => {
  const { id, title, poster_path } = movie;
  const imageEndpoint = `https://image.tmdb.org/t/p/w300${poster_path}`;

  return (
    <li className="movies__movie">
      <Link to={`/movies/${id}`} className="movies__movie-link">
        <figure className="movies__movie-poster-container">
          <img
            src={imageEndpoint}
            alt={title}
            className="movies__movie-poster"
          />
        </figure>
        <h2 className="movies__movie-title">{title}</h2>
      </Link>
    </li>
  );
}

export default MoviesMovie;