import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/book">Book</Link>
        </li>
        <li>
          <Link to="/school">Internet School</Link>
        </li>
        <li>
          <Link to="/mandala">Individual Mandala Interpretation</Link>
        </li>
        <li>
          <Link to="/journey">Journey With Stones</Link>
        </li>
        <li>
          <Link to="/initiations">Initiation and Journey With Stones</Link>
        </li>
        <li>
        <Link to="/about">About me</Link>
      </li>
      </ul>
    </nav>
  );
};

export default Header;
