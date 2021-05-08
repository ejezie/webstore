import React from "react";
import "./CartScreen.css";
import CartItem from "../components/CartItem"
// import Footer from "../components/Footer"

function CartScreen() {
  return (
    <div>
      <div className="cartscreen">
        <div className="cart__left">
          <h2>Your Cart</h2>
          <CartItem/>
        </div>
        <div className="cart__right">
          <div className="cart__info">
            <p>Subtotal (0) items</p>
            <p>$200.00</p>
          </div>
          <div>
          <button>Proceed To Checkout</button>
        </div>
        </div> 
      </div>
    </div>
  );
}

export default CartScreen;
