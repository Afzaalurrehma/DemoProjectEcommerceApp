import React from "react";
import "./css/shop_category.css";
import all_product from "../assets/all_product";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  // const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcatgory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="Shopcategory-sort">
          Sort by <img src={Dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-product">
        {all_product.map((item, i) => {
          if (item.category === props.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="load-more">Explore more</div>
    </div>
  );
};

export default ShopCategory;
