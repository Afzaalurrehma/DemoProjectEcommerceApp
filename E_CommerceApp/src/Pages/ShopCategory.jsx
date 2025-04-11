import React from "react";
import "./css/shop_category.css";
import all_product from "../assets/all_product";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
    </div>
  );
};

export default ShopCategory;
