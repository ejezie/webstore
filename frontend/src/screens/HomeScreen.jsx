import React from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
import smp from "../images/smp.jpg";

function HomeScreen() {
  return (
    <div className="homescreen">
      <div className="home__text">
        <p>Modern, Stylish and Powerful</p>
        <h1>REDEFING YOUR STYLE WITH SMARTMOBILE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          voluptates dolores cumque impedit nam totam nobis laudantium.
          Doloremque ipsam vero asperiores, quae pariatur, itaque atque esse
          assumenda minus dolorem quia.
        </p>
        <Link to="/products">
          <button>View Products</button>
        </Link>
      </div>
      <div className="img__back"></div>
      <img src={smp} alt="picture" />
    </div>
  );
}

export default HomeScreen;
