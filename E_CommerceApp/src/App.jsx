import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/cart";
import LoginSignup from "./Pages/loginSignup";
import Shop from "./Pages/shop";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/mens"
            element={<ShopCategory category="mens" />}
          ></Route>
          <Route
            path="/woman"
            element={<ShopCategory category="woman" />}
          ></Route>
          <Route
            path="/kids"
            element={<ShopCategory category="kids" />}
          ></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/productID" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
