import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useSearchParams();
  const search = query.get('search');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setQuery({search: e.target.value});
  };

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
          value={search ?? ""}
          onChange={handleChange}
          aria-label="Search Movies"
          required
        />
        <button className="header-nav__form-button">🔍</button>
      </div>
    </form>
  );
}

export default Search;