// react libraries
import React from "react";

// components
import ResultItem from "./ResultItem";

// styles
import "./_result-container.scss";

/**
 * @desc result page
 */
const SearchResults = props => {
  const data = props.location.state;
  console.log(data);
  const { countryList, isVisible } = data;
  return (
    <div className="result-list-container">
      {countryList.length > 0 ? (
        countryList.map((country, index) => (
          <ResultItem country={country} index={index} />
        ))
      ) : (
        <p className="def-text">No country was found.</p>
      )}
    </div>
  );
};

export default SearchResults;
