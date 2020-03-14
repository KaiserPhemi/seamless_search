// react libraries
import React from "react";
import { Link } from "react-router-dom";

// style
import "./_header.scss";

/**
 * @desc header component
 */
const Header = props => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar-doodle" />
      </Link>
      <div className="nav-menu">
        <nav className="navbar-item">
          <a href="#" className="nav-link">
            <span>Gmail</span>
          </a>
          <a href="#" className="nav-link">
            <span>Images</span>
          </a>
        </nav>
        <button className="login-btn">Sign In</button>
      </div>
    </div>
  );
};

export default Header;
