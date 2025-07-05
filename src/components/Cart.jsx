import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cartSlice";
import "./Cart.css";

export default function Cart() {
  const [eta, setEta] = useState("");
  const [payOpen, setPayOpen] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart.items);

  if (!items.length && !eta)
    return <h2 style={{ textAlign: "center" }}>Your cart is empty.</h2>;

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handleProceed = () => setPayOpen(true);

  const handlePayment = () => {
    const d = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
    const date = d.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long"
    });
    const time = d.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit"
    });
    setEta(`${date} • ${time}`);
    dispatch(clearCart());
    setPayOpen(false);
    window.alert("Payment successful! Order confirmed.");
  };

  return (
    <div className="cart-page">
      {eta ? (
        <div className="delivery-msg">
          <h2>Order Confirmed!</h2>
          <p>Your items will arrive on <strong>{eta}</strong>.</p>
        </div>
      ) : (
        <>
          <h2>Your Cart</h2>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p>Qty: {item.qty}</p>
              <p>₹{item.price * item.qty}</p>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))}
          <hr />
          <h3>Total: ₹{total.toFixed(2)}</h3>
          <button onClick={handleProceed}>Proceed To Buy</button>
        </>
      )}

      {payOpen && (
        <div className="pay-backdrop">
          <div className="pay-modal">
            <h3>Demo Payment Gateway</h3>
            <p>Amount payable: ₹{total.toFixed(2)}</p>
            <button className="btn buy-btn" onClick={handlePayment}>
              Pay Now
            </button>
            <button className="btn details-btn" onClick={() => setPayOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
