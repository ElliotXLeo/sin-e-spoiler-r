const MoviesMovieDetails = () => {

  const data = {
    "adult": false,
    "backdrop_path": "/mGJuQwMq1bEboaVTqQAK4p4zQvC.jpg",
    "belongs_to_collection": {
      "id": 535313,
      "name": "Godzilla Collection",
      "poster_path": "/inNN466SKHNjbGmpfhfsaPQNleS.jpg",
      "backdrop_path": "/oboBn4VYB79uDxnyIri0Nt3U3N2.jpg"
    },
    "budget": 200000000,
    "genres": [
      { "id": 28, "name": "Action" },
      { "id": 878, "name": "Science Fiction" }
    ],
    "homepage": "https://www.godzillavskong.com",
    "id": 399566,
    "imdb_id": "tt5034838",
    "original_language": "en",
    "original_title": "Godzilla vs. Kong",
    "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
    "popularity": 1365.035,
    "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
    "production_companies": [
      {
        "id": 174,
        "logo_path": "/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png",
        "name": "Warner Bros. Pictures",
        "origin_country": "US"
      },
      {
        "id": 923,
        "logo_path": "/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png",
        "name": "Legendary Pictures",
        "origin_country": "US"
      }
    ],
    "production_countries": [
      { "iso_3166_1": "US", "name": "United States of America" }
    ],
    "release_date": "2021-03-24",
    "revenue": 0,
    "runtime": 113,
    "spoken_languages": [
      { "english_name": "English", "iso_639_1": "en", "name": "English" }
    ],
    "status": "Released",
    "tagline": "One Will Fall",
    "title": "Godzilla vs. Kong",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 20
  };

  const { poster_path, title, overview, genres } = data;
  const imageEndpoint = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <section className="movie-details">
      <div class="movie-details__container">
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
  );
}

export default MoviesMovieDetails;