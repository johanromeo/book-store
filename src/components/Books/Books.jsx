import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addBooks } from "../../reducers/booksReducer";

import BookCover from "../BookCover/BookCover";
import "./Books.css";

function Books() {
  const apiUrl = import.meta.env.VITE_BOOKS_API_URL;

  const books = useSelector((state) => state.books.books);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function navigateToBookInfo(bookId) {
    navigate(`/book/${bookId}`);
  }

  useEffect(() => {
    if (books.length > 0) {
      return;
    }
    async function getBooks() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      dispatch(addBooks(data));
      console.log(data);
    }
    getBooks();
  }, [books, dispatch]);

  const bookCoverComponents = books.map((book) => {
    return (
      <BookCover
        key={book.id}
        book={book}
        navigateToBookInfo={navigateToBookInfo}
      />
    );
  });
  return <div className="book-cover-components">{bookCoverComponents}</div>;
}

export default Books;
