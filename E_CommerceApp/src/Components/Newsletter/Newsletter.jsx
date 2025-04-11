import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newslatter">
      <h1>Get exclusive offers in your Email</h1>
      <p>Subscribe to our newslatter and stay updated</p>
      <div className="newslatter-child">
        <input
          className="newslatter-input"
          type="email"
          placeholder="Your Email Id"
        />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
