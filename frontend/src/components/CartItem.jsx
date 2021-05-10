import React, { useState } from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";

function CartItem({ item, qtyChangeHandler }) {
  const [qty, setQty] = useState(1);
  console.log(item.numInStock);
  return (
    <div className="cartitem">
      <div className="img">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartitem__name">
        <p>Product 1</p>
      </Link>
      <p className="price">${item.price}</p>
      <select
        className="cart__select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
        {[...Array(item.numInStock).keys()].map((k) => (
          <option key={k + 1} value={k + 1}>
            {k + 1}
          </option>
        ))}
      </select>

      <button className="delete">
        <i class="fal fa-trash"></i>
      </button>
    </div>
  );
}

export default CartItem;
