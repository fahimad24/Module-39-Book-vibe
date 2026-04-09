import { useContext } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { ContextApi } from "../../provider/contextApi";

const BookDetails = () => {
  const bookId = useParams().bookId;
  const { books, readBooks, wishlistBooks, setReadBooks, setWishlistBooks } =
    useContext(ContextApi);
  const book = books.find((b) => b.bookId === parseInt(bookId));

  // Handlers for "Read" and "Wishlist" buttons
  const handleRead = () => {
    if (readBooks.some((b) => b.bookId === book.bookId)) {
      toast.error("You have already read this book.");
      return;
    }

    if (wishlistBooks.some((b) => b.bookId === book.bookId)) {
      const wishlistUpdated = wishlistBooks.filter(
        (b) => b.bookId !== book.bookId,
      );
      setWishlistBooks(wishlistUpdated);
    }
    setReadBooks((prev) => [...prev, book]);
    toast.success("Book added to your read list!", {});
    console.log("Read Books:", readBooks);
  };

  // Handler for "Wishlist" button
  const handleWishlist = () => {
    if (readBooks.some((b) => b.bookId === book.bookId)) {
      toast.error("You have already read this book. Cannot add to wishlist.");
      return;
    }
    if (wishlistBooks.some((b) => b.bookId === book.bookId)) {
      toast.error("This book is already in your wishlist.");
      return;
    }

    setWishlistBooks((prev) => [...prev, book]);
    toast.success("Book added to your wishlist!");
    console.log("Wishlist Books:", wishlistBooks);
  };

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <section className="flex gap-15">
      <div className="bg-gray-100 p-25 rounded-2xl">
        <img className="h-150" src={book.image} alt={book.bookName} />
      </div>
      <div className="work-sans flex flex-col justify-between flex-1 space-y-4">
        <div className="">
          <h1 className="text-5xl font-bold playfair mb-4">{book.bookName}</h1>
          <p className="text-gray-600 text-xl mb-2">By: {book.author}</p>
        </div>
        <p className="text-gray-600 text-xl py-3 border-t-2 border-b-2 border-gray-300">
          {book.category}
        </p>
        <div className="text-gray-600 space-y-8 border-b-2 border-gray-300 pb-8">
          <p>
            <span className="font-bold">Review: </span> {book.review}
          </p>
          <p className="space-x-4">
            <span className="font-bold">Tags: </span>
            {book.tags.map((tag, index) => (
              <span
                key={index}
                className="py-1 px-4 bg-green-50 text-green-500 rounded-md mr-2"
              >
                #{tag}
              </span>
            ))}
          </p>
        </div>
        <div className="flex text-gray-600 gap-20">
          <p className="flex flex-col gap-4">
            <span className="text-gray-600/80">Number Of Pages:</span>
            <span className="text-gray-600/80">Publisher:</span>
            <span className="text-gray-600/80">Year of Publishing:</span>
            <span className="text-gray-600/80">Rating:</span>
          </p>
          <p className="flex flex-col gap-4">
            <span className="font-bold">{book.totalPages}</span>
            <span className="font-bold">{book.publisher}</span>
            <span className="font-bold">{book.yearOfPublishing}</span>
            <span className="font-bold">{book.rating}</span>
          </p>
        </div>
        <div className=" space-x-5">
          <button className="btn btn-outline" onClick={handleRead}>
            Read
          </button>
          <button
            className="btn btn-accent text-white"
            onClick={handleWishlist}
          >
            Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
