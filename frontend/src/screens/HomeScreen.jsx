import React from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
// import smp from "../images/smp.jpg";
import phone from "../images/phone.jpg";
import samsung from "../images/samsung.png";
import nokia from "../images/nokia.png";
import mi from "../images/mi.png";
import huawei from "../images/huawei.png";
import tecno from "../images/tecno.png";
import qubo from "../images/qubo.png";

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
        <div className="logos">
          <img src={samsung} alt="samsung" />
          <img src={nokia} alt="nokia" />
          <img src={mi} alt="mi" />
          <img src={huawei} alt="huawei" />
          <img src={tecno} alt="tecno" />
          <img src={qubo} alt="qubo" />
        </div>
        <Link to="/products">
          <button>View Products</button>
        </Link>
      </div>
      <img src={phone} alt="phone" />
    </div>
  );
}

export default HomeScreen;
