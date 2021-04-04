import "./checkout-item.styles.scss";
import React from "react";

const CheckoutItem = ({ cartItem : { name, quantity, price , imageUrl }}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <span className="quantity">{quantity}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;