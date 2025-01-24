import "./BookCover.css";

function BookCover({ book, navigateToBookInfo }) {
  return (
    <section
      className="book-cover"
      onClick={() => navigateToBookInfo(book.id)}
      style={{ backgroundColor: book.color }}
    >
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </section>
  );
}

export default BookCover;
