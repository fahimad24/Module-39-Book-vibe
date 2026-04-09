import { useContext } from "react";
import { ContextApi } from "../../provider/contextApi";
import Booklist from "./Booklist";

const Booklists = () => {
  const { books } = useContext(ContextApi);

  return (
    <section id="books" className="py-16">
      <div className="text-center pb-10">
        <h1 className="text-5xl font-bold mb-6 playfair">Book Lists</h1>
        <p className="text-lg text-gray-600 playfair">
          Explore your book lists here.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Book list items will go here */}
        {books.map((book) => (
          <Booklist key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Booklists;
