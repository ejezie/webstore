import React from "react";
import "./ScreenProducts.css";
import Product from "../components/Product";
// import Footer from "../components/Footer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../redux/actions/productActions";
import ClipLoader from "react-spinners/PuffLoader";

function ScreenProducts() {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const override = `
   margin: 10em 0 0 42em ;
   @media (max-width:1000px) {
    margin: 15em 0 0 24em ;
  };
   @media (max-width:800px) {
    margin: 12em 0 0 17em ;
  };
   @media (max-width:565px) {
    margin: 10em 0 0 10em ;
  };
   @media (max-width:395px) {
    margin: 5em 0 0 5em ;
  };
  `

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
             <ClipLoader loading={loading} color={"#4A90E2"} css={override} size={150} />
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((product) => (
              <Product
                key={product._id}
                productId={product._id}
                price={product.price}
                imageUrl={product.imageUrl}
                description={product.description}
                name={product.name}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ScreenProducts;
