import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import Newsletter from "../Components/Newsletter/Newsletter";
import NewCollection from "../Components/New Collections/NewCollection";

const shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <Newsletter />
      <NewCollection />
    </>
  );
};

export default shop;
