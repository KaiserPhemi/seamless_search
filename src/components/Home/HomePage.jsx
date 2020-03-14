// react libraries
import React from "react";

// components
import Doodle from "../Doodle/Doodle";
import SearchField from "../SearchField/SearchField";
import LanguageOptions from "../LanguageOptions/LanguageOptions";

// styles
import "./_home-page.scss";

/**
 * @desc home page
 */
const HomePage = props => {
  return (
    <div className="main-page">
      <Doodle />
      <SearchField />
      <LanguageOptions />
    </div>
  );
};

export default HomePage;
