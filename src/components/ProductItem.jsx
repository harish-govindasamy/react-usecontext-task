// src/components/ProductItem.jsx
// import React from "react";
import { useCart } from "../context/CartContext";
import styled from "styled-components";
import PropTypes from "prop-types";
const ProductItemWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
`;

const ProductItem = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <ProductItemWrapper className="product-item">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price.toFixed(2)}</p>
      <button
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
      >
        Add to Cart
      </button>
    </ProductItemWrapper>
  );
};
ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
export default ProductItem;
