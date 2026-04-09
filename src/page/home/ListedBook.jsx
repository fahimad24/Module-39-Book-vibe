import { FaChevronDown } from "react-icons/fa6";
import { useState, useContext } from "react";
import ListedContainer from "../../components/bookListed/ListedContainer";
import { ContextApi } from "../../provider/contextApi";

const ListedBook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const { readBooks, wishlistBooks } = useContext(ContextApi);
  const [allBooks, setAllBooks] = useState(readBooks);

  const passdata = {
    readBooks,
    wishlistBooks,
    setAllBooks,
    allBooks,
    isActive,
    setIsActive,
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section>
      <h1 className="p-12 rounded-2xl text-center font-bold bg-gray-100 text-4xl playfair">
        Listed Books
      </h1>
      <div className="flex justify-center items-center flex-col py-10 relative z-10">
        <div className="relative z-10">
          <button
            className="btn text-white w-48 bg-green-400 flex items-center gap-4"
            onClick={toggleDropdown}
          >
            Sort By{" "}
            <FaChevronDown
              className={`transform transition duration-300 ${isOpen ? "-rotate-180" : ""}`}
            />
          </button>
        </div>
        <div
          className={`w-48 bg-gray-100 rounded-md absolute top-12 overflow-hidden origin-top transition-all duration-500 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <button className="block w-full mt-8 px-4 py-2 text-gray-800 hover:bg-white ">
            Rating
          </button>
          <button className="block w-full px-4 py-2 text-gray-800 hover:bg-white">
            Number of Pages
          </button>
          <button className="block w-full px-4 py-2 text-gray-800 hover:bg-white">
            Year of Publishing
          </button>
        </div>
      </div>
      <ListedContainer {...passdata} />
    </section>
  );
};

export default ListedBook;
