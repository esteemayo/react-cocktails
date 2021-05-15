import { useEffect, useRef } from "react";

import { useGlobalContext } from "./../utils/context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchvalue = useRef("");

  useEffect(() => {
    searchvalue.current.focus();
  }, []);

  const handleSearchCocktail = () => {
    setSearchTerm(searchvalue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input
            type="search"
            id="name"
            ref={searchvalue}
            onChange={handleSearchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
