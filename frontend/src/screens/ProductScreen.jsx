import React from "react";
import "./ProductScreen.css";
import Footer from "../components/Footer";

function ProductScreen() {
  return (
    <div className="productscreen">
      <div className="product__wrap">
        <div className="left">
          <img
            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/108127/1.jpg?9872"
            alt="product"
          />
          <div className="left__info">
            <p className="left__name">Product 1</p>
            <p>Price: $200.00</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              quisquam sequi molestiae laudantium molestias architecto rem
              minima provident cumque eaque quod, enim atque fugiat quos? Beatae
              impedit labore sunt magni?
            </p>
          </div>
        </div>
        <div className="right">
          <div className="rigth__info">
            <p>
              Price: <span>$200.00</span>
            </p>
            <p>
              Status: <span>In stock</span>
            </p>
            <p>
              Qty
              <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </p>
            <p>
              <button type="button">Add To Cart</button>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductScreen;
