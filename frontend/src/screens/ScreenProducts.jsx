import React from "react";
import "./ScreenProducts.css";
import Product from "../components/Product";
import Footer from "../components/Footer";

function ScreenProducts() {
  return (
    <div className="screenproducts">
      <div className="screen__wrap">
        <div className="head__search">
          <h2>ANDRIOD SMART PHONES</h2>
          <div className="search">
            <input type="text" placeholder="search product" />
            <i class="fas fa-search"></i>
          </div>
        </div>
        <div className="products">
          <Product className="product__item" />
          <Product className="product__item" />
          <Product className="product__item" />
          <Product className="product__item" />
          <Product className="product__item" />
          <Product className="product__item" />
          <Product className="product__item" />
          <Product className="product__item" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ScreenProducts;
