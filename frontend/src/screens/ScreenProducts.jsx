import React from "react";
import "./ScreenProducts.css";
import Product from "../components/Product";

function ScreenProducts() {
  return (
    <div className="screenproducts">
      <div className="head__search">
        <h2>ANDRIOD SMART PHONES</h2>
      </div>
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default ScreenProducts;
