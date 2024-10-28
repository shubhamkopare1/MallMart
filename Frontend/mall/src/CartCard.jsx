import React from 'react';
import './CartCard.css'; // Update the CSS import

const CartCard = ({ image, title, description, price }) => {
  return (
    <div className="cart-card">
      <img src={image} alt={title} className="cart-card-img" />
      <div className="cart-card-content">
        <h3 className="cart-card-title">{title}</h3>
        <p className="cart-card-description">{description}</p>
        <div className="cart-card-footer">
          <span className="cart-card-price">₹{price}</span>
          <button className="cart-card-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
