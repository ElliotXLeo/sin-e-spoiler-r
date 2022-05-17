import { Link } from 'react-router-dom';
import '../styles/css/Error404.css';

const Error404 = () => {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <figure className="not-found__image-container">
          <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" className="not-found__image" />
          <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" className="not-found__image" />
        </figure>
        <div className="not-found__text">
          <h1 className="not-found__text-title">404</h1>
          <h2 className="not-found__text-subtitle">PAGE NOT FOUND</h2>
          <h3 className="not-found__text-options">BACK TO HOME?</h3>
          <div className="not-found__text-option-container">
            <Link to="/" className="not-found__text-option not-found__text-option--active">YES</Link>
            <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo" className="not-found__text-option">NO</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error404;