import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate
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
          <Route path="/estrenos" element={<section className="section animate__animated animate__fadeIn">Estrenos</section>} />
          <Route path="/movies/:movieId" element={<MoviesMovieDetails />} />
          <Route path="/" element={<Movies />} />
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;