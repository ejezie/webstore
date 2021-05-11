import React,{useState} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar({ toggle }) {
  const [clicked, setClicked] = useState(false)
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () =>
    cartItems.reduce((qty, item) => parseInt(item.qty) + qty, 0);
  const onem = [""];
  const twom = [""];
  const threem = [""];
  const cancelSymbol = () => {
    if(clicked){
      setClicked(true)
      onem.push("one");
      twom.push("two");
      threem.push("three");
    }
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h2>
          ShopMobile<i class="fad fa-mobile"></i>
        </h2>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/">
            <h3>Home</h3>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="link__wrap">
            <Link to="/sign">
              <div className="sign__in">Sign In</div>
            </Link>
            <div className="cart">
              <i class="fas fa-shopping-cart"></i>
              <span className="cartlogo__badge">{getCartCount()}</span>
            </div>
          </Link>
        </li>
      </ul>
      <div
        className="hamburger"
        onClick={cancelSymbol()}
        onClick={toggle} >
        <div className={onem.join(" ")}></div>
        <div className={twom.join(" ")}></div>
        <div className={threem.join(" ")}></div>
      </div>
    </div>
  );
}

export default Navbar;
