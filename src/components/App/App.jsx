// react libraries
import React from "react";

// components
import HomePage from "../Home/HomePage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// styles
import "./main.scss";

/**
 * @desc app entry
 */
const App = () => {
  return (
    <div className="main-app">
      <Header />
      <HomePage />
      <Footer userLocation="Nigeria" />
    </div>
  );
};

export default App;
