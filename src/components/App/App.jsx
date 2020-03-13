// react libraries
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import HomePage from "../Home/HomePage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchResults from "../SearchResults/SearchResults";

// styles
import "./main.scss";

/**
 * @desc app entry
 */
const App = () => {
  return (
    <Router>
      <div className="main-app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/result" component={SearchResults} />
        </Switch>
        <Footer userLocation="Nigeria" />
      </div>
    </Router>
  );
};

export default App;
