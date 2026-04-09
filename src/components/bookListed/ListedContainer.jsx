import ListedCard from "./ListedCard";

const ListedContainer = ({
  isActive,
  setIsActive,
  readBooks,
  wishlistBooks,
  setAllBooks,
  allBooks,
}) => {
  const handleReadBooks = () => {
    setIsActive(true);
    setAllBooks(readBooks);
  };

  const handleWishlistBooks = () => {
    setIsActive(false);
    setAllBooks(wishlistBooks);
  };

  return (
    <div>
      <div className="relative border-b-2 border-gray-300">
        <div
          className={`pointer-events-none absolute -bottom-0.5 h-11.5 w-36 rounded-t-xl border-2 border-b-white border-gray-300 bg-white transition-transform duration-300 ${isActive ? "translate-x-0" : "translate-x-36"}`}
        />
        <button
          onClick={handleReadBooks}
          className={`relative z-10 w-36 px-4 py-2 rounded-t-xl transition-colors ${isActive ? "text-gray-900 font-semibold" : "text-gray-600"}`}
        >
          Read Books
        </button>
        <button
          onClick={handleWishlistBooks}
          className={`relative z-10 w-36 px-4 py-2 rounded-t-xl transition-colors ${!isActive ? "text-gray-900 font-semibold" : "text-gray-600"}`}
        >
          Wishlist Books
        </button>
      </div>
      <div className="py-10">
        {allBooks.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No books to display.
          </p>
        ) : (
          allBooks.map((book) => <ListedCard key={book.bookId} book={book} />)
        )}
      </div>
    </div>
  );
};

export default ListedContainer;
