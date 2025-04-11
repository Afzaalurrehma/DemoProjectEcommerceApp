import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import CartIcon from "../../assets/cart_icon.png";

const Navbar = () => {
  const [manu, activemanu] = useState("Shop");

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
          <p>Shopping</p>
        </div>
        <ul className="navbar-manu">
          <li onClick={() => activemanu("Shop")}>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Shop
            </Link>
            {manu === "Shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => activemanu("Man")}>
            <Link style={{ textDecoration: "none", color: "black" }} to="/Mens">
              Men
            </Link>
            {manu === "Man" ? <hr /> : <></>}
          </li>
          <li onClick={() => activemanu("Woman")}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/woman"
            >
              Woman
            </Link>
            {manu === "Woman" ? <hr /> : <></>}
          </li>
          <li onClick={() => activemanu("Kids")}>
            <Link style={{ textDecoration: "none", color: "black" }} to="/kids">
              Kids
            </Link>
            {manu === "Kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="navbar-cart">
          <Link to="/login">
            <button className="login-botton">Login</button>
          </Link>
          <Link to="/cart">
            <img src={CartIcon} alt="Cart" className="cart-icon" />
          </Link>
          <div className="cart-count">0</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
