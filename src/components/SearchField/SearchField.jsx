// react libraries
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

// styles
import "./_search-form.scss";
import Suggestions from "./Suggestions";

/**
 * @desc container holding the input field
 */
const SearchField = () => {
  const [searchQuery, setQuery] = useState("");
  const [countryList, setCountries] = useState([]);

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
    setCountries([...countries]);
  };

  return (
    <form className="search-form" onSubmit={getResult}>
      <label className="input-wrapper">
        <span>
          <i className="fa fa-search" aria-hidden="true" />
        </span>
        <input type="text" className="search-query" onChange={handleChange} />
        <span>
          <i className="fa fa-microphone" aria-hidden="true" />
        </span>
        <span />
      </label>
      <Suggestions resultArr={} />
      <div className="btn-wrapper">
        <input type="submit" value="Google Search" className="form-btn" />
        <input type="submit" value="I'm Feeling Lucky" className="form-btn" />
      </div>
    </form>
  );
};

export default SearchField;
