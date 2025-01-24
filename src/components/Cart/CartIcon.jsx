import "./CartIcon.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartIcon() {
  const cart = useSelector((state) => state.cart.itemsInCart);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/cart");
  }
  return (
    <div className="cart-container" onClick={handleClick}>
      <h2>🛒 {cart}</h2>
    </div>
  );
}

export default CartIcon;
