// react libraries
import React from "react";

// styles
import "./_search-form.scss";

/**
 * @desc container holding the input field
 */
const SearchField = () => {
  return (
    <form className="search-form">
      <label className="input-wrapper">
        <span>
          <i className="fa fa-search" aria-hidden="true" />
        </span>
        <input type="text" className="search-query" />
        <span>
          <i className="fa fa-microphone" aria-hidden="true" />
        </span>
        <span />
      </label>
      <div className="btn-wrapper">
        <input type="submit" value="Google Search" className="form-btn" />
        <input type="submit" value="I'm Feeling Lucky" className="form-btn" />
      </div>
    </form>
  );
};

export default SearchField;
