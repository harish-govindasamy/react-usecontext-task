// src/components/Cart.jsx
// import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import styled from "styled-components";

const CartWrapper = styled.div`
  padding: 2rem; /* Increased padding */
`;

const Cart = () => {
  const { state } = useCart();

  const totalQuantity = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalAmount = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartWrapper className="cart">
      <h2>Shopping Cart</h2>
      {state.items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="cart-summary">
        <h3>Total Quantity: {totalQuantity}</h3>
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
    </CartWrapper>
  );
};

export default Cart;
