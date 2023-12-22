import { useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const DashboardNavbar = () => {
  const { logout, user } = useAuthContext();
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout().then(() => {
      navigate("/");
    });
  };

  return (
    <div className="navbar">
      <div className="w-full flex justify-between">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end flex items-center">
          <div>
            <span className="text-xl font-semibold capitalize text-sky-500 mr-2">
              {user?.displayName}
            </span>
          </div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt={user?.displayName}
                src={
                  user?.photoURL ||
                  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <span onClick={logoutHandler}>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
