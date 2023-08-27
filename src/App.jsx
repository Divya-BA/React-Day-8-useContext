
import React from 'react';
import { CartProvider } from './CartContext';
import Product from './Product';
import Cart from './Cart';
import productData from './product.json'; // Your JSON data

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <div className="product-list">
          {productData.products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
