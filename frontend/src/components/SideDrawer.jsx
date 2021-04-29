import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";

function SideDrawer({ show }) {

    const sideClass = ["sidedrawer"]
    if(show){
        sideClass.push("showSideDrawer")
    }

  return (
    { show } && (
      <div className={sideClass.join(" ")}>
        <Link>
          <div className="sign-in">Sign In</div>
        </Link>
        <ul className="navbar__link">
          <li>
            <Link to="/">
              <h3>Go Home</h3>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="link__wrap">
              <div className="cart">
                <i class="fas fa-shopping-cart"></i>
                <span className="cartlogo__badge">0</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    )
  );
}

export default SideDrawer;
