import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthContext from "./provider/AuthContext.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App.jsx";
import Home from "./page/home/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "listed-books",
        Component: () => <h1>Listed Books</h1>,
      },
      {
        path: "read-books",
        Component: () => <h1>Books to Read</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </StrictMode>,
);
