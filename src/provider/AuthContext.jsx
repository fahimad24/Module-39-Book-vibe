import { useEffect, useState } from "react";
import { ContextApi } from "./contextApi";

const AuthContext = ({ children }) => {
  const [books, setBooks] = useState([]);
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
  };
  return <ContextApi.Provider value={value}>{children}</ContextApi.Provider>;
};

export default AuthContext;
