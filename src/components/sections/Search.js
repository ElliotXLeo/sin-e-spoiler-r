import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

const Search = () => {
  const query = useQuery();
  const search = query.get('search');

  const navigate = useNavigate();

  const [movie, setMovie] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?search=${e.target.value}`);
  };

  const handleChange = (e) => {
    setMovie(e.target.value);
    navigate(`/?search=${e.target.value}`);
  };


  useEffect(() => {
    setMovie((search ? search : ''));
  }, [search]);

  return (
    <form
      onSubmit={handleSubmit}
      className="header-nav__form">
      <div className="header-nav__form-inputs">
        <input
          type="text"
          placeholder="Película"
          className="header-nav__form-input"
          id="search"
          name="search"
          value={movie}
          onChange={handleChange}
          required
        />
        <button className="header-nav__form-button">🔍</button>
      </div>
    </form>
  );
}

export default Search;