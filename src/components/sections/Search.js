const Search = () => {
  return (
    <form className="header-nav__form">
      <div className="header-nav__form-inputs">
        <input type="text" placeholder="Película" className="header-nav__form-input" required />
        <button className="header-nav__form-button">🔍</button>
      </div>
    </form>
  );
}

export default Search;