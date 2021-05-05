import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";

function CartItem() {
  return (
    <div className="cartitem">
      <div className="img">
        <img
          src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/108127/1.jpg?9872"
          alt="product"
        />
      </div>
      <Link to={`/product/${111}`} className="cartitem__name">
        <p>Product 1</p>
      </Link>
      <p className="price">$200.00</p>
      <select className="cart__select" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className="delete">
        <i class="fal fa-trash"></i>
      </button>
    </div>
  );
}

export default CartItem;
