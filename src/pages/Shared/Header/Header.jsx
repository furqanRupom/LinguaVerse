import { Link } from "react-router-dom";
import { useNavbar } from "../../../hooks/useNavbar";
import logo from "../../../assets/lv.png";
import { useAuth } from "../../../hooks/useAuth";
import { useAdmin } from "../../../hooks/useAdmin";
import { useInstructor } from "../../../hooks/useInstructor";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const Header = () => {
  const [navbar] = useNavbar();
  const [isAdmin] = useAdmin();

  const [isInstructor] = useInstructor();
  const { logOut, user, handleModeToggle, darkMode } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log("logout successfully");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <header
      className={
        !navbar
          ? "navbar justify-between bg-white fixed top-0   mx-auto w-full z-50 dark:bg-slate-800 dark:text-gray-400"
          : "navbar justify-around bg-white  fixed top-0   mx-auto w-full z-50 dark:bg-slate-800 dark:text-gray-400"
      }
    >
      <div className="navbar-start">
        <div className="dropdown d">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white    text-xl rounded-box w-52 dark:bg-slate-800"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            {user ? (
              <li tabIndex={0}>
                <Link to="/dashboard/home"
                  // to={
                  //   isAdmin
                  //     ? "/dashboard/adminHome"
                  //     : isInstructor
                  //     ? "/dashboard/InstructorHome"
                  //     : "/dashboard/studentsHome"
                  // }
                >
                  Dashboard
                </Link>
              </li>
            ) : (
              ""
            )}

            <li>
              <Link to="/instructors">Instructors</Link>
            </li>

            <li>
              <Link to="/approvedClasses">Classes</Link>
            </li>

            {!user ? (
              <li>
                <Link to="/login">Login</Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="flex items-center px-4">
          <img className="object-cover w-16 md:w-20" src={logo} alt="" />
          <h4 className="btn btn-ghost normal-case text-lg  md:text-4xl ">
            LinguaVerse
          </h4>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl ">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            {user ? (
              <Link to="/dashboard/home"
                // to={
                //   isAdmin
                //     ? "/dashboard/adminHome"
                //     : isInstructor
                //     ? "/dashboard/InstructorHome"
                //     : "/dashboard/studentsHome"
                // }
              >
                Dashboard
              </Link>
            ) : (
              ""
            )}
          </li>

          <li className="">
            <Link to="/instructors">Instructors</Link>
          </li>

          <li className="">
            <Link to="/approvedClasses">Classes</Link>
          </li>

          {!user ? (
            <li className="">
              <Link to="/login">Login</Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>

      {user ? (
        <>
          <div className="navbar-end">
            <button
              className="btn btn-ghost ml-2 text-2xl"
              onClick={handleModeToggle}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaMoon /> : <FiSun />}
            </button>
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow text-xl bg-white  rounded-box w-52 dark:bg-slate-800"
              >
                <li className="">
                  <h3 className="justify-between">Profile</h3>
                </li>
                <li>
                  <h3>Settings</h3>
                </li>
                <li onClick={handleLogOut}>
                  <h3>Logout</h3>
                </li>
              </ul>
            </div>
          </div>
          <button className="btn btn-ghost btn-circle ">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#0eb582"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-success indicator-item text-white">
                5
              </span>
            </div>
          </button>
        </>
      ) : (
        <div className="navbar-end">
          <button
            className="btn btn-ghost ml-2 text-2xl"
            onClick={handleModeToggle}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaMoon /> : <FiSun />}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
