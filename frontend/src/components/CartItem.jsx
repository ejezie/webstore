import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";

function CartItem({ item }) {
  return (
    <div className="cartitem">
      <div className="img">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartitem__name">
        <p>Product 1</p>
      </Link>
      <p className="price">${item.price}</p>
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
