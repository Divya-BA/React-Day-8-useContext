// CartItem.js
import React from 'react';
import { useCart } from './CartContext';

const CartItem = ({ item }) => {
  const { cartDispatch } = useCart();

  const removeFromCart = () => {
    cartDispatch({ type: 'REMOVE_FROM_CART', payload: item.id });
  };

  const increaseQuantity = () => {
    cartDispatch({ type: 'INCREASE_QUANTITY', payload: item.id });
  };

  const decreaseQuantity = () => {
    cartDispatch({ type: 'DECREASE_QUANTITY', payload: item.id });
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>Price: ${item.price}</p>
        <p>Quantity:<button onClick={decreaseQuantity}>-</button> {item.quantity}<button onClick={increaseQuantity}>+</button></p>
        
        
        <button onClick={removeFromCart}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
