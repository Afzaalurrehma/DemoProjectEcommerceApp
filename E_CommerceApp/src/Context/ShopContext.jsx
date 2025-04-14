import React, { createContext } from "react";
import All_Product from "../assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (prop) => {
  const contextValue = { All_Product };

  return (
    <ShopContext.Provider value={contextValue}>
      {prop.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
