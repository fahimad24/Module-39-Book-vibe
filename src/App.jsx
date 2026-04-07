import "./App.css";
import NavBar from "./navbar/NavBar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <section>
        <div className="container mx-auto py-6">
          <Outlet></Outlet>
        </div>
      </section>
    </>
  );
}

export default App;
