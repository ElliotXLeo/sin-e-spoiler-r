import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviesMovieDetails = () => {

  const [movie, setMovie] = useState({});

  const { movieId } = useParams();


  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}`;
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
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  const { poster_path, title, overview, genres } = movie;
  const imageEndpoint = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <>
      {
        Object.keys(movie).length === 0 ?
          (
            null
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