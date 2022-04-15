import hero from '../assets/img/hero.jpg'

const getMovieImg = (poster_path, width) => {
  return (poster_path ? `https://image.tmdb.org/t/p/w${width}${poster_path}` : hero);
}

export default getMovieImg;