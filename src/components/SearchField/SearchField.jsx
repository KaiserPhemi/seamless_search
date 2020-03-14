// react libraries
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// styles
import "./_search-form.scss";
import Suggestions from "./Suggestions";

/**
 * @desc container holding the input field
 */
const SearchField = props => {
  const [searchQuery, setQuery] = useState("");
  const [countryList, setCountries] = useState([]);
  const [isVisible, setView] = useState(false);

  /**
   * @desc updates the state with user input
   */
  const handleChange = () => {
    event.preventDefault();
    setQuery(event.target.value);
    if (searchQuery && searchQuery.length > 1) {
      if (searchQuery.length % 2 === 0) {
        getResult();
      }
    }
  };

  /**
   * @desc makes API calls for result
   */
  const getResult = async () => {
    event.preventDefault();
    const data = await fetch(
      `https://restcountries.eu/rest/v2/name/${searchQuery}`
    );
    const countries = await data.json();
    if (countries && countries.length > 0) {
      setCountries([...countries]);
    }
    setView(true);
  };

  return (
    <form className="search-form" onSubmit={getResult}>
      <label className="input-wrapper">
        <div className="field-wrapper">
          <span>
            <i className="fa fa-search" aria-hidden="true" />
          </span>
          <input
            type="text"
            value={searchQuery}
            className="search-query"
            placeholder="Search for countries"
            onChange={handleChange}
          />
          <span>
            <i className="fa fa-microphone" aria-hidden="true" />
          </span>
        </div>
        {/* <Suggestions resultArr={countryList} /> */}
      </label>
      <div className="btn-wrapper">
        <Link to={{ pathname: "/result", state: { countryList, isVisible } }}>
          <input type="submit" value="Google Search" className="form-btn" />
        </Link>
        <input type="submit" value="I'm Feeling Lucky" className="form-btn" />
      </div>
    </form>
  );
};

export default SearchField;
