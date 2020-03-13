// react libraries
import React from "react";

// styles
import "./_doodle.scss";

/**
 * @desc artistic doodle on home page
 */
const Doodle = () => {
  return (
    <div className="doodle-container">
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google"
        width="270"
        height="90"
      />
    </div>
  );
};

export default Doodle;
