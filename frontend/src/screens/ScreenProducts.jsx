import React from "react";
import "./ScreenProducts.css";
import Product from "../components/Product";
// import Footer from "../components/Footer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../redux/actions/productActions";

function ScreenProducts() {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { loading, error, products } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

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
          {loading ? (
            <h2>
              <i class="fad fa-spinner"></i>
            </h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map(product => <Product />)
          )}
        </div>
      </div>
    </div>
  );
}

export default ScreenProducts;
