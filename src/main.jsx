import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthContext from "./provider/AuthContext.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App.jsx";
import Home from "./page/home/Home.jsx";
import BookDetails from "./page/home/BookDetails.jsx";
import { ToastContainer, Bounce } from "react-toastify";
import ListedBook from "./page/home/ListedBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "listed-books",
        Component: ListedBook,
      },
      {
        path: "read-books",
        Component: () => <h1>Books to Read</h1>,
      },
      {
        path: "/book/:bookId",
        Component: BookDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </AuthContext>
  </StrictMode>,
);
