import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5 transition-colors duration-300 transform  hover:bg-sky-300 hover:text-cyan-700 ${
          isActive
            ? "bg-sky-300 text-sky-700"
            : "text-sky-600 border border-sky-400"
        }`
      }
    >
      <Icon className="w-5 h-5 text-white" />

      <span className="mx-4 text-white font-medium">{label}</span>
    </NavLink>
  );
};

export default MenuItem;
