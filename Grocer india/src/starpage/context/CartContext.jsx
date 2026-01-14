import { createContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: id });

  const clearCart = () =>
    dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
