import React from "react";
import "./CartScreen.css";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

function CartScreen() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  const removeHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  const getCartCount = () => (
    cartItems.reduce((qty, item)=> parseInt(item.qty) + qty, 0)
  )
  const getCartTotal = ()=>(
    cartItems.reduce((price, item)=> parseFloat(item.price * item.qty) + price, 0)
  )
  

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
              return (
                <CartItem item={cart} qtyChangeHandler={qtyChangeHandler} remove={removeHandler} />
              );
            })
          )}
        </div>
        <div className="cart__right">
          <div className="cart__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartTotal().toFixed(2)}</p>
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
