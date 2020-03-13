// react libraries
import React from "react";

// components
import Doodle from "../Doodle/Doodle";
import SearchField from "../SearchField/SearchField";

/**
 * @desc home page
 */
const HomePage = () => {
  return (
    <div>
      <Doodle />
      <SearchField />
      {/* search buttons */}
      {/* language options */}
    </div>
  );
};

export default HomePage;
