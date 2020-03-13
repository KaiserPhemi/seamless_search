// react libraries
import React from "react";

// components
import Doodle from "../Doodle/Doodle";
import SearchField from "../SearchField/SearchField";

// styles
import "./_home-page.scss";

/**
 * @desc home page
 */
const HomePage = () => {
  return (
    <div className="main-page">
      <Doodle />
      <SearchField />
      {/* search buttons */}
      {/* language options */}
    </div>
  );
};

export default HomePage;
