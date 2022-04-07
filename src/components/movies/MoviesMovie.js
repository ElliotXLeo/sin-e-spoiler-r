const MoviesMovie = ({ movie }) => {
  const { id, title, poster_path } = movie;
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
}

export default MoviesMovie;