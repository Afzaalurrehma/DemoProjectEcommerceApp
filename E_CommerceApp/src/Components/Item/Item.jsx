import React from "react";
import "./Item.css";

const Item = (prop) => {
  return (
    <div className="item">
      <img src={prop.image} alt="" />
      <p>{prop.name}</p>
      <div className="item-price">
        <div className="item-price-new">RS.{prop.new_price}</div>
        <div className="item-price-old">RS.{prop.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
