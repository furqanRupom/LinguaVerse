import { Link } from "react-router-dom";
import { useNavbar } from "../../../hooks/useNavbar";
import logo from '../../../assets/lv.png'
import { useAuth } from "../../../hooks/useAuth";

const  Header = () => {
    const [navbar] = useNavbar()

    // TODO : We will next to add is user is admin or instructor or not
    const isAdmin = true;
    const isInstructor = false;
    const {logOut,user}= useAuth()

    const handleLogOut = ()=>{
      logOut().then(result=>{console.log('logout successfully')}).catch(error=>console.log(error.message))
    }



    return (
        <header className={!navbar ? "navbar justify-around bg-white fixed top-0   mx-auto w-full z-50": "navbar justify-around bg-white  fixed top-0   mx-auto w-full z-50" }>
      <div className="navbar-start">
        <div className="dropdown">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white  text-xl rounded-box w-52 "
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            {
              user ?  <li tabIndex={0}>
              <Link>Dashboard</Link>
            </li>: ""
            }

            <li>
              <Link to="/myRooms">Instructors</Link>
            </li>

            <li>
              <Link to="/allRooms">Classes</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center px-4">
          <img className="w-7 md:w-10 object-cover" src={logo} alt="" />
        <h4 className="btn btn-ghost normal-case text-lg  md:text-4xl ">
          LinguaVerse</h4>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>

            {/*
            TODO: Conditionally rendering with if user admin or not user admin than it will goes for admin dashboard if it's not thant it will go user dashboard
            */}

            {
              user ? <Link to={isAdmin ? "/dashboard/adminHome" : isInstructor ? "/dashboard/InstructorHome":'/dashboard/userHome'}>Dashboard</Link> :""
            }

          </li>


            <li>
              <Link to="/myRooms">Instructors</Link>
            </li>



          <li >
            <Link to="/allRooms">Classes</Link>
          </li>


              {
                !user ?  <li>
                <Link to="/login">Login</Link>
              </li>: ""
              }



        </ul>
      </div>



{
  user ?  <>
  <div className="navbar-end">
    <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://img.freepik.com/free-photo/photo-as-passport-young-man-with-stylish-haircut_295783-869.jpg?w=360"/>
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow text-xl bg-white  rounded-box w-52 "
      >
        <li>
          <h3 className="justify-between">
            Profile

          </h3>
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
        stroke="#4fa94d"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
      <span className="badge badge-xs badge-success indicator-item text-white">5</span>
    </div>
  </button>
</> : ""
}


    </header>
    );
};


export default Header;