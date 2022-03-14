import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [order, setOrder] = useState("Place Order");
  const { cartItems, setCartItems } = useContext(Context);
  const cartItemElements = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  const totalCost = cartItems.length * 5.99;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  function handleOrder() {
    setOrder("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      setOrder("Place Order");
      setCartItems([]);
    }, 3000);
  }

  // Only render the "Place Order" button if there are items in the cart

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay} </p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={handleOrder}>{order}</button>
        </div>
      ) : (
        <p>You have no items in your cart</p>
      )}
    </main>
  );
}

export default Cart;
