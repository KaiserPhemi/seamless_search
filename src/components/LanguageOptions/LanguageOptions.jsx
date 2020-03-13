// react libraries
import React from "react";

// styles
import "./_language-options.scss";

/**
 * @desc
 */
const LanguageOptions = () => {
  return (
    <div className="lang-options">
      <span className="option-text">Google offered in:</span>
      <a className="option-text link-items" href="#">
        <span>Hausa</span>
      </a>
      <a className="option-text link-items" href="#">
        <span>Igbo</span>
      </a>
      <a className="option-text link-items" href="#">
        <span>Èdè Yorùbá</span>
      </a>
      <a className="option-text link-items" href="#">
        <span>Nigerian Pidgin</span>
      </a>
    </div>
  );
};

export default LanguageOptions;
