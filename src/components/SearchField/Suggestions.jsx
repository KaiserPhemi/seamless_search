// react liraries
import React from "react";

// styles
import "./_suggestions.scss";

/**
 * @desc
 */
const Suggestions = ({ resultArr }) => {
  return (
    <div className="list-wrapper">
      {resultArr.map((country, index) => (
        <div key={index}>{country.name}</div>
      ))}
    </div>
  );
};

export default Suggestions;
