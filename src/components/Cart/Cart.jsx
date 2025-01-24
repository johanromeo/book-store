import { useSelector, useDispatch } from "react-redux";
import BookCover from "../BookCover/BookCover";
import "./Cart.css";
import { checkout } from "../../reducers/cartReducer";

function Cart() {
  const cartBookItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const itemsInCart = cartBookItems.map((book) => {
    return <BookCover key={book.id} book={book} />;
  });
  return (
    <div className="cart-items-container">
      <h2>Books in Cart</h2>
      <div className="cart-grid">{itemsInCart}</div>
      <button className="book-button" onClick={() => dispatch(checkout())}>
        Checkout!
      </button>
    </div>
  );
}

export default Cart;
