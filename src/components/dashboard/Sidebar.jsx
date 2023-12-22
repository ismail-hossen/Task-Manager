import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { RiTaskLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-sky-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <Link to="/" className="block cursor-pointer p-4 font-bold">
            <span>Task Manager</span>
          </Link>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-base-200 w-52 sm:w-64 md:w-72 lg:w-80 space-y-6 px-3 lg:px-10 py-5 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div className="bg-sky-500 px-2 lg:px-5 py-5 lg:py-10 rounded-lg">
          <div>
            <Link to="/">
              <div className="w-full hidden md:flex px-4 py-2 shadow-sm rounded-lg justify-center items-center bg-sky-400 text-xl mx-auto text-white">
                <span>Task Manager</span>
              </div>
            </Link>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <MenuItem icon={RiTaskLine} label="Tasks" address="/dashboard" />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
