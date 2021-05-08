import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="navbar__log">
        <h2>
          ShopMobile<i class="fad fa-mobile"></i>
        </h2>
      </div>
      <div className="foot__icons">
        <p>contact</p>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-youtube"></i>
        <i class="fad fa-mobile"></i>
      </div>
      <div className="search">
        <input type="text" placeholder="search" />
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
}

export default Footer;
