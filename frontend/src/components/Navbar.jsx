import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h2>
          SmartMobile<i class="fad fa-mobile"></i>
        </h2>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/">
            <h3>Home</h3>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <div className="cart">
              <i class="fas fa-shopping-cart"></i>
              <span className="cartlogo__badge">0</span>
            </div>
          </Link>
        </li>
      </ul>
      <div className="hamburger">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
    </div>
  );
}

export default Navbar;
