import React from "react";
import "./CartScreen.css";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartScreen() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <div>
      <div className="cartscreen">
        <div className="cart__left">
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <div>
              {" "}
              You have nothing in your cart, select an item and return{" "}
              <Link to="/products">Go Back</Link>
            </div>
          ) : (
            cartItems.map((cart) => {
              return <CartItem item={cart} />;
            })
          )}
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
