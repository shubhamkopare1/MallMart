import React from 'react';
import CartCard from './CartCard'; // Import the CartCard component
import "./CartList.css"

const CartList = () => {
  
  const cartItems = [
    { image: 'https://via.placeholder.com/300', title: 'Pizza', description: 'Cheesy pizza with toppings', price: '299' },
    { image: 'https://via.placeholder.com/300', title: 'Burger', description: 'Crispy burger with fries', price: '199' },
    { image: 'https://via.placeholder.com/300', title: 'Pasta', description: 'Creamy Alfredo pasta', price: '250' },
    // Add more items as needed
  ];

  return (
    <div className="card-container">
      {cartItems.map((item, index) => (
        <CartCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};
export default CartList;
