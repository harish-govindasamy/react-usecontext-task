// src/components/CartItem.jsx
// import React from "react";
// import React from "react";
import { useCart } from "../context/CartContext";
import styled from "styled-components";
import PropTypes from "prop-types";

const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 1.5rem 0; /* Increased padding */
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.3s, box-shadow 0.3s;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <CartItemWrapper className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p className="price">${item.price.toFixed(2)}</p>
      </div>
      <div className="quantity-controls">
        <button
          onClick={() =>
            dispatch({ type: "DECREASE_QUANTITY", payload: item.id })
          }
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() =>
            dispatch({ type: "INCREASE_QUANTITY", payload: item.id })
          }
        >
          +
        </button>
      </div>
      <button
        onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
      >
        Remove
      </button>
    </CartItemWrapper>
  );
};
CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
export default CartItem;
