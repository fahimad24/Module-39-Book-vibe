import { useEffect, useState } from "react";
import { ContextApi } from "./contextApi";

const AuthContext = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  // Fetch book data from the JSON file when the component mounts
  useEffect(() => {
    async function getBookList() {
      try {
        const res = await fetch("/data/booksData.json");
        if (!res.ok) {
          throw new Error(`Failed to load books: ${res.status}`);
        }
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    }
    getBookList();
  }, []);

  const value = {
    books,
    readBooks,
    wishlistBooks,
    setReadBooks,
    setWishlistBooks,
  };
  return <ContextApi.Provider value={value}>{children}</ContextApi.Provider>;
};

export default AuthContext;
