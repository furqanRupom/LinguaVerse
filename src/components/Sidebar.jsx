import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { FiActivity } from "react-icons/fi";
import "./Sidebar.css";
import {
  AiOutlineBars,
  AiOutlineClose,
  AiFillCheckCircle,
  AiFillFolderAdd,
} from "react-icons/ai";

import {
  MdPayment
}

from 'react-icons/md'
import { useAuth } from "../hooks/useAuth";
import {
  FaHome,
  FaRegBookmark,
  FaScroll,
  FaSignOutAlt,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { GrCheckboxSelected } from "react-icons/gr";
import { SiGoogleclassroom } from "react-icons/si";
import { useAdmin } from "../hooks/useAdmin";
import { useInstructor } from "../hooks/useInstructor";
const Sidebar = () => {
  const navigate = useNavigate();

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const { user,logOut } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleLogOut =()=>{
    logOut().then(result=>{
      console.log('object')
    }).catch(error=>{
      console.log(error.message)
    })
  }
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
            <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto text-lg font-bold text-white">
              <span className="text-[#0eb582] pr-2">
                {" "}
                {isAdmin
                  ? "admin"
                  : isInstructor
                  ? "instructor's"
                  : "Student's"}{" "}
              </span>{" "}
              Dashboard
            </div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <img
                className="object-cover w-24 h-24 mx-2 rounded-full ring-4 ring-[#0eb582]"
                src={user?.photoURL}
                alt="avatar"
                referrerPolicy="no-referrer"
              />

              <h4 className="mx-2 mt-2 font-medium text-white  hover:underline">
                {user?.displayName}
              </h4>

              <p className="mx-2 mt-1 text-sm font-medium text-white  hover:underline">
                {user?.email}
              </p>
            </div>
          </div>

          <div className="uppercase overflow-hidden">
            {isAdmin ? (
              <ul className="mt-12  text-white flex flex-col space-y-3">
                  <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex w-full items-center px-4 py-2 mt-5 text-white    hover:text-white cursor-pointer transition-colors text-sm duration-300 transform "
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white text-[#0eb582] py-3 font-semibold w-full border-0 rounded"
                        : " "
                    }
                    to="/dashboard/home"
                  >
                    <FiActivity className="text-lg mx-2" />
                    users Activity
                  </NavLink>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex w-full items-center px-4 py-2 mt-5 text-white    hover:text-white cursor-pointer transition-colors text-sm duration-300 transform "
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white text-[#0eb582] py-3 font-semibold w-full border-0 rounded"
                        : " "
                    }
                    to="/dashboard/adminHome"
                  >
                    <FaHome className="text-lg mx-2" />
                    Admin Home
                  </NavLink>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex w-full items-center px-4 py-2 mt-5 text-white    hover:text-white cursor-pointer transition-colors text-sm duration-300 transform "
                >
                  <NavLink
                    to="/dashboard/manageClasses"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white text-[#0eb582] py-3 font-semibold w-full border-0 rounded"
                        : " "
                    }
                  >
                    <FaRegBookmark className="text-lg mx-2" /> Manage Classes
                  </NavLink>
                </motion.li>

                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex w-full items-center px-4 py-2 mt-5 text-white   hover:text-white cursor-pointer transition-colors text-sm duration-300 transform "
                >
                  <NavLink
                    to="/dashboard/manageUsers"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white text-[#0eb582] py-3 font-semibold w-full border-0 rounded"
                        : " "
                    }
                  >
                    <FaUsers className="text-lg mx-2" /> Manage Users{" "}
                  </NavLink>
                </motion.li>
              </ul>
            ) : isInstructor ? (
              <ul className="mt-12  text-white flex flex-col space-y-3">
                   <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex w-full items-center px-4 py-2 mt-5 text-white    hover:text-white cursor-pointer transition-colors text-sm duration-300 transform "
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white text-[#0eb582] py-3 font-semibold w-full border-0 rounded"
                        : " "
                    }
                    to="/dashboard/home"
                  >
                    <FiActivity className="text-lg mx-2" />
                    users Activity
                  </NavLink>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex w-full items-center px-4 py-2 mt-5 text-white   hover:text-white cursor-pointer transition-colors text-sm duration-300 transform "
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white text-[#0eb582] py-3 font-semibold w-full border-0 rounded"
                        : " "
                    }
                    to="/dashboard/instructorHome"
                  >
                    <FaHome className="text-lg mx-2" />
                    Instructor Home
                  </NavLink>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex w-full items-center px-4 py-2 mt-5 text-white   hover:text-white cursor-pointer transition-colors text-sm duration-300 transform "
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white text-[#0eb582] py-3 font-semibold w-full border-0 rounded"
                        : " "
                    }
                    to="/dashboard/addClasses"
                  >
                    <AiFillFolderAdd className="text-lg mx-2" />
                    Add a class
                  </NavLink>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex w-full items-center px-4 py-1 mt-5 text-white   hover:text-white cursor-pointer transition-colors text-sm duration-300 transform "
                >
                  <NavLink
                    to="/dashboard/myClasses"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white text-[#0eb582] py-3 font-semibold w-full border-0 rounded"
                        : " "
                    }
                  >
                    <SiGoogleclassroom className="text-lg mx-2" /> My Classes
                  </NavLink>
                </motion.li>
              </ul>
            ) : (
              <ul className="mt-12  text-white flex flex-col space-y-3">
                   <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex w-full items-center px-4 py-2 mt-5 text-white    hover:text-white cursor-pointer transition-colors text-sm duration-300 transform "
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white text-[#0eb582] py-3 font-semibold w-full border-0 rounded"
                        : " "
                    }
                    to="/dashboard/home"
                  >
                    <FiActivity className="text-lg mx-2" />
                    users Activity
                  </NavLink>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex w-full items-center px-4 py-2 mt-5 text-white   hover:text-white cursor-pointer transition-colors text-sm duration-300 transform "
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white text-[#0eb582] py-2 font-semibold w-full border-0 rounded"
                        : " "
                    }
                    to="/dashboard/studentsHome"
                  >
                    <FaHome className="text-lg mx-2 mb-1" />
                    Student's Home
                  </NavLink>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex w-full items-center px-4 py-2 mt-5 text-white   hover:text-white cursor-pointer transition-colors text-sm duration-300 transform "
                >
                  <NavLink
                    to="/dashboard/selectedClasses"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white text-[#0eb582] py-3 font-semibold w-full border-0 rounded"
                        : " "
                    }
                  >
                    <AiFillCheckCircle className="text-lg mx-2" /> My Selected
                    Classes
                  </NavLink>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex w-full items-center px-3 py-1 mt-5 text-white   hover:text-white cursor-pointer transition-colors text-sm duration-300 transform "
                >
                  <NavLink
                    to="/dashboard/enrolledClasses"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white text-[#0eb582] py-3 font-semibold w-full border-0 rounded"
                        : " "
                    }
                  >
                    <FaScroll className="text-lg mx-2" /> My Enrolled Classes
                  </NavLink>
                </motion.li>

                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex w-full items-center px-3 py-1 mt-5 text-white   hover:text-white cursor-pointer transition-colors text-sm duration-300 transform "
                >
                  <NavLink
                    to="/dashboard/paymentsHistory"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-white text-[#0eb582] py-3 font-semibold w-full border-0 rounded"
                        : " "
                    }
                  >
                    <MdPayment className="text-lg mx-2" /> Payments History
                  </NavLink>
                </motion.li>
              </ul>
            )}
          </div>
        </div>

        <div>
          <hr />

          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="/"
              className="flex w-full items-center px-4 py-2 mt-5 text-white   hover:text-white transition-colors duration-300 transform"
            >
              <FaHome className="w-5 h-5" />

              <span className="mx-4 font-medium">Home</span>
            </Link>
          </motion.button>

          <button onClick={handleLogOut} className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-800   hover:text-white transition-colors duration-300 transform">
            <FaSignOutAlt className="w-5 h-5 text-white" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
