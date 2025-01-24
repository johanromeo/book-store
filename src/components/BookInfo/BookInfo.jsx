import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addBookToCart } from "../../reducers/cartReducer";
import "./BookInfo.css";

function BookInfo() {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const book = useSelector((state) =>
    state.books.books.find((book) => book.id === parseInt(bookId))
  );

  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addBookToCart(book));
  }

  function navigateBackToBooks() {
    navigate("/");
  }

  return (
    <div className="book-info-container">
      <div className="navigate-back-arrow" onClick={navigateBackToBooks}>
        <p>&larr; Books</p>
      </div>
      <div className="book-info-cover" style={{ backgroundColor: book.color }}>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
      <div className="book-info-details">
        <h3>{book.title}</h3>
        <h4>By {book.author}</h4>
        <p>{book.plot}</p>
        <div className="book-info-rubbish">
          <p>
            <strong>Audience: </strong>
            {book.audience}
          </p>
          <p>
            <strong>First Published: </strong>
            {book.year}
          </p>
          <p>
            <strong>Pages: </strong>
            {book.pages}
          </p>
          <p>
            <strong>Publisher: </strong>
            {book.publisher}
          </p>
        </div>
        <button className="book-button" onClick={handleAddToCart}>
          Oh, I want to read it!
        </button>
      </div>
    </div>
  );
}

export default BookInfo;
