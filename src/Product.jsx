
import React from 'react';
import { useCart } from './CartContext';

const Product = ({ product }) => {
  const { cartDispatch } = useCart();

  const addToCart = () => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="product">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
