import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="col-md-6 mb-4">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control"
          type="search"
          role="searchbox"
          name="search"
          id="search"
          placeholder="Search Student"
          value={search.toLowerCase()}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
