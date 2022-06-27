import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">    
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/halls">Halls</Link>
            </li>
            <li>
              <Link to="/bookingForm">Book Now</Link>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
