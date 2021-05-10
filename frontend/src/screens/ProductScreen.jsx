import React, { useState, useEffect } from "react";
import "./ProductScreen.css";
// import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import ClipLoader from "react-spinners/PuffLoader";

function ProductScreen({ match, history }) {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductsDetails);
  const { product, loading, error } = productDetails;
  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetail(match.params.id));
    }
  }, [product, match, dispatch]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty))
    history.push("/cart")
  }

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
  `;

  return (
    <div className="productscreen">
      {loading ? (
        <ClipLoader
          loading={loading}
          color={"#4A90E2"}
          css={override}
          size={150}
        />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="product__wrap">
            <div className="left">
              <img src={product.imageUrl} alt={product.name} />
              <div className="left__info">
                <p className="left__name">{product.name}</p>
                <p>${product.price}</p>
                <p>{product.description}</p>
              </div>
            </div>
            <div className="right">
              <div className="rigth__info">
                <p>
                  Price: <span>${product.price}</span>
                </p>
                <p>
                  Status:{" "}
                  <span>
                    {product.numInStock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
                <p>
                  Qty
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.numInStock).keys()].map((x) => {
                      return (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      );
                    })}
                  </select>
                </p>
                <p>
                  <button type="button" onClick={addToCartHandler}>Add To Cart</button>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductScreen;
