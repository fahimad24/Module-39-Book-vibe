import { TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router";

const Booklist = ({ book }) => {
  return (
    <div className="p-6 bg-white rounded-3xl border border-gray-200 space-y-4 work-sans flex flex-col">
      <div className="flex justify-center py-10 bg-gray-100 rounded-2xl">
        <img className="h-50" src={book.image} alt={book.bookName} />
      </div>
      <div className="flex justify-start py-2">
        {book.tags.map((tag, index) => (
          <span
            key={index}
            className="py-1 px-4 bg-green-50 text-green-500 rounded-md mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="">
        <Link to={`/book/${book.bookId}`}>
          <h2 className="text-2xl playfair mb-3 font-blod">{book.bookName}</h2>
        </Link>
        <p className="text-gray-600/80">By : {book.author}</p>
      </div>
      <hr className="border-dashed border-gray-300 mt-auto" />
      <div className="flex justify-between py-2 text-gray-600/80 ">
        <p>{book.category}</p>
        <p className="flex items-center gap-3">
          {book.rating} <TiStarFullOutline className="text-yellow-400" />
        </p>
      </div>
    </div>
  );
};

export default Booklist;
