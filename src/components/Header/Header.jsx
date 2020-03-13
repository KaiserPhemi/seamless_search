// react libraries
import React from "react";

// style
import "./_header.scss";

/**
 * @desc header component
 */
const Header = () => {
  return (
    <div className="navbar">
      <nav className="navbar-item">
        <a href="#" className="nav-link">
          <span>Gmail</span>
        </a>
        <a href="#" className="nav-link">
          <span>Images</span>
        </a>
      </nav>
      <button>Sign In</button>
    </div>
  );
};

export default Header;
