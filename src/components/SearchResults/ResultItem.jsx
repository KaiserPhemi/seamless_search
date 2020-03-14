// react libraries
import React from "react";

// styles
import "./_result.scss";

/**
 * @desc
 * @param {object} country
 * @param {number} index
 */
const ResultItem = ({ country, index }) => {
  return (
    <div key={index} className="result-item">
      <div className="source-url">{country.flag}</div>
      <div className="result-title">{country.name}</div>
      <div className="result-description">
        {`${country.name} is a country in ${country.region}. 
        It has a population of ${country.population} and it’s a member of ${country.regionalBlocs[0].name}. 
        Capital of ${country.name} is ${country.capital}`}
      </div>
    </div>
  );
};

export default ResultItem;
