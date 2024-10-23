import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    payment: '',
  });
  const [orderComplete, setOrderComplete] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setOrderComplete(true);
  };

  if (orderComplete) {
    return (
      <div>
        <h1>Order Confirmation</h1>
        <p>Thank you, {formData.name}! Your order has been placed.</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Payment Details:</label>
          <input name="payment" value={formData.payment} onChange={handleChange} required />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
