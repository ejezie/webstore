import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SideDrawer({ show }) {
  const sideClass = ["sidedrawer"];
  if (show) {
    sideClass.push("showSideDrawer");
  }
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () =>
    cartItems.reduce((qty, item) => parseInt(item.qty) + qty, 0);

  return (
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
              <span className="cartlogo__badge">{getCartCount()}</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;
