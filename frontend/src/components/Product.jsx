import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <img
        src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/108127/1.jpg?9872"
        alt="phone"
      />
      <div className="product__info">
        <p className="info__name">Phone</p>
        <p className="info__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          nobis impedit officiis eaque voluptatem nihil eveniet.
        </p>
        <p className="info__price">$200.00</p>
        <Link to={`product/${1111}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
}

export default Product;
