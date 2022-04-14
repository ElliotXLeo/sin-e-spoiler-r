import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

const Search = () => {

  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    headerNavFormName: ''
  });
  
  const { headerNavFormName } = movie;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?search=${headerNavFormName}`);
  };

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.id]: e.target.value
    });
  };

  const query = useQuery();
  const search = query.get('search');

  useEffect(() => {
    setMovie((search ? { headerNavFormName: search } : { headerNavFormName: '' }));
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
          id="headerNavFormName"
          name="header-nav__form-name"
          value={headerNavFormName}
          onChange={handleChange}
          required
        />
        <button className="header-nav__form-button">🔍</button>
      </div>
    </form>
  );
}

export default Search;