
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cartItems: [],
};



const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
    
        const existingItem = state.cartItems.find(item => item.id === action.payload.id);
  
        if (existingItem) {
          
          const updatedCartItems = state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
  
          return {
            ...state,
            cartItems: updatedCartItems,
          };
        } else {

          return {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          };
        }
  
      case 'INCREASE_QUANTITY':
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
  
      case 'DECREASE_QUANTITY':
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
          ),
        };
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
        };
  

  
      default:
        return state;
    }
  };

  

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
