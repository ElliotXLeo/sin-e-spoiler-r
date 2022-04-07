import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import MoviesMoviesGrid from './components/movies/MoviesMoviesGrid';
import Header from './components/sections/Header';

function App() {
  return (
    <Router>
      <Header />
      <main className='main'>
        <Routes>
          <Route exact path="/estrenos" element={<section className="section animate__animated animate__fadeIn">Estrenos</section>} />
          <Route exact path="/" element={<MoviesMoviesGrid />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;