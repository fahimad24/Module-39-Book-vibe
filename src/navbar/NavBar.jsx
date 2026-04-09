import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="work-sans">
      <div className="container mx-auto flex justify-between items-center py-6">
        <div>
          <h1 className="text-3xl font-bold">Book Vibe</h1>
        </div>
        <div className="space-x-5">
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-outline btn-success" : "btn btn-ghost"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-outline btn-success" : "btn btn-ghost"
            }
            to="/listed-books"
          >
            Listed Books
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-outline btn-success" : "btn btn-ghost"
            }
            to="/read-books"
          >
            Page To Read
          </NavLink>
        </div>
        <div className="space-x-5">
          <button className="btn btn-success text-white">Sign in</button>
          <button className="btn btn-accent text-white">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
