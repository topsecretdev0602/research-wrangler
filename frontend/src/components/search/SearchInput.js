import React from "react";
import PropTypes from "prop-types";

/*
 * Simple search text input
 */
const SearchInput = ({ onInputChange, onSearchSubmit }) => {
  return (
    <div className="center">
      <h1 className="display-5 text-center">Search For Publications</h1>
      <br />
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control form-control-lg"
          id="searchQuery"
          placeholder="Search..."
          onChange={onInputChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-primary btn-lg btn-block my-5"
          onClick={onSearchSubmit}
        />
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  onInputChange: PropTypes.func,
  onSearchSubmit: PropTypes.func
};

export default SearchInput;
