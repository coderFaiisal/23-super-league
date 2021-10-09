import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <h1> Super League</h1>
      </div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
