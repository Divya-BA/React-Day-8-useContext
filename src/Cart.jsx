// Cart.js
import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartState } = useCart();
  const { cartItems } = cartState;

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="cart-summary">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
