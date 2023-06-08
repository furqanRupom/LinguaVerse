import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Login/Register/Register";
import Login from "../pages/Login/Login/Login";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import StudentsHome from "../pages/Dashboard/Students/StudentsHome/StudentsHome";
import InstructorHome from "../pages/Dashboard/Instructor/InstructorHome/InstructorHome";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import SelectedClasses from "../pages/Dashboard/Students/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../pages/Dashboard/Students/Enrolledclasses/EnrolledClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"register",
        element:<Register />
      },
      {
        path:"login",
        element:<Login />
      }
    ],
  },
  {
    path:"dashboard",
    element:<DashboardLayouts />,
    children:[
      {
        path:"/dashboard/studentsHome",
        element:<StudentsHome />
      },
      {
        path:"/dashboard/instructorHome",
        element:<InstructorHome />
      },
      {
        path:"/dashboard/adminHome",
        element:<AdminHome />
      },
      {
        path:"/dashboard/manageClasses",
        element:<ManageClasses />
      },
      {
        path:"/dashboard/manageUsers",
        element:<ManageUsers />,
      },
      {
        path:"/dashboard/addClasses",
        element:<AddClass />
      },
      {
        path:"/dashboard/myClasses",
        element:<MyClasses />
      },
      {
        path:"/dashboard/selectedClasses",
        element:<SelectedClasses />
      },
      {
        path:"/dashboard/enrolledClasses",
        element:<EnrolledClasses />
      }
    ]
  }
]);
