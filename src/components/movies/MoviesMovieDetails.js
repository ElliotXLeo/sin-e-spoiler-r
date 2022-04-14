import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import Spinner from "../sections/Spinner";

const MoviesMovieDetails = () => {

  const { movieId } = useParams();
  const recurso = `/movie/${movieId}`;

  const movie = useApi(recurso);
  const { poster_path, title, overview, genres } = movie;
  const imageEndpoint = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <>
      {
        Object.keys(movie).length === 0 ?
          (
            <Spinner />
          )
          :
          (
            <section className="movie-details">
              <div className="movie-details__container">
                <h1 className="movie-details__title">{title}</h1>
                <div className="movie-details__card">
                  <figure className="movie-details__card-poster-container">
                    <img
                      src={imageEndpoint}
                      alt={title}
                      className="movie-details__card-poster"
                    />
                  </figure>
                  <div className="movie-details__card-information">
                    <div className="movie-details__card-overview">
                      <h3 className="movie-details__card-overview-title">Synopsis</h3>
                      <p className="movie-details__card-overview-data">{overview}</p>
                    </div>
                    <div className="movie-details__card-genders">
                      <h3 className="movie-details__card-genders-title">Genders</h3>
                      <p className="movie-details__card-genders-data">
                        {
                          genres.map((element) => {
                            return (
                              element.name
                            )
                          }).join(', ')
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
      }
    </>
  );
}

export default MoviesMovieDetails;