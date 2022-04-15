import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import MoviesMovieDetails from './components/movies/MoviesMovieDetails';
import Header from './components/sections/Header';
import Error404 from './pages/Error404';
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
      <Header />
      <main className='main'>
        <Routes>
          <Route exact path="/estrenos" element={<section className="section animate__animated animate__fadeIn">Estrenos</section>} />
          <Route exact path="/movies/:movieId" element={<MoviesMovieDetails />} />
          <Route exact path="/" element={<Movies />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;