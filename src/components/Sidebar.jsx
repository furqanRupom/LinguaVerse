import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { useAuth } from "../hooks/useAuth";
import { FaHome, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const isAdmin = false;
  const isInstructor = false;
  const { user } = useAuth();
  const role = "host";
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-slate-900 text-white flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold"></div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-900 text-white"
        >
          {isMobileMenuOpen ? (
            <AiOutlineBars className="h-5 w-5" />
          ) : (
            <AiOutlineClose className="h-5 w-5" />
          )}
        </button>
      </div>
      {/* Sidebar */}
      <div
         className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden  bg-slate-900 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
            isMobileMenuOpen ? "-translate-x-full" : "translate-x-0"
          } md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto text-xl font-bold text-white">
                <span className="text-[#2ba43f] pr-2"> {isAdmin ? 'admin' : isInstructor? "instructor's" :"Student's"} </span> Dashboard
            </div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full ring-4 ring-[#2ba43f]"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <Link to="/dashboard">
                <h4 className="mx-2 mt-2 font-medium text-white  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
              <Link to="/dashboard">
                <p className="mx-2 mt-1 text-sm font-medium text-white  hover:underline">
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>


        <div className="mt-12 ml-4 text-white flex flex-col space-y-3">

            <Link>
                My Selected Classes
            </Link>
            <Link >
                My Enrolled Classes
            </Link>
        </div>
        </div>


        <div>
          <hr />

          <Link to="/" className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-800   hover:text-white transition-colors duration-300 transform">
            <FaHome className="w-5 h-5" />

            <span className="mx-4 font-medium">Home</span>
          </Link>

          <button className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-800   hover:text-white transition-colors duration-300 transform">
            <FaSignOutAlt  className="w-5 h-5 text-white" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
