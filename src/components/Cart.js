import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { totalItems, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-summary">
      <Link to="/cart">
        <p>Items in Cart: {totalItems}</p>
        <p>Total: ${totalPrice.toFixed(2)}</p>
      </Link>
    </div>
  );
};

export default Cart;
