import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const NavItems = () => (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-sky-600">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavItems />
          </ul>
        </div>
        <Link to="/" className="lg:btn lg:btn-ghost lg:text-2xl">
          <span className="text-[#A9D2FE]">Task Manager</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white text-xl">
          <NavItems />
        </ul>
      </div>
      <div className="navbar-end gap-1">
        {user ? (
          <Link to="/dashboard" className="btn btn-sm lg:btn-md">
            Dashboard
          </Link>
        ) : (
          <>
            <Link to="/signup" className="btn btn-sm lg:btn-md">
              SignUp
            </Link>
            <Link to="/login" className="btn btn-sm lg:btn-md">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
