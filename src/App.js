import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate
} from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import MoviesMovieDetails from './components/movies/MoviesMovieDetails';
import Error404 from './pages/Error404';
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="estrenos" element={<section className="section animate__animated animate__fadeIn">Estrenos</section>} />
          <Route path="movies/:movieId" element={<MoviesMovieDetails />} />
          <Route index element={<Movies />} />
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;