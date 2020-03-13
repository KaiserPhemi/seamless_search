// react libraries
import React from "react";

// styles
import "./_footer.scss";

/**
 * @desc footer of the page
 */
const Footer = ({ userLocation }) => {
  return (
    <div className="page-footer">
      <div className="def-layout user-location-container">{userLocation}</div>
      <div className="def-layout useful-link-container">
        <div className="about-links">
          <a href="#">
            <span>Advertising</span>
          </a>
          <a href="#">
            <span>Business</span>
          </a>
          <a href="#">
            <span>About</span>
          </a>
          <a href="#">
            <span>How Search Works</span>
          </a>
        </div>
        <div className="settings-link">
          <a href="#">
            <span>Privacy</span>
          </a>
          <a href="#">
            <span>Terms</span>
          </a>
          <a href="#">
            <span>Settings</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
