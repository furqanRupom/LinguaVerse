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
import PrivateRoute from "../Private/PrivateRoute";
import InstructorPrivateRoute from "../Private/InstructorPrivateRoute";
import AdminPrivateRoute from "../Private/AdminPrivateRoute";
import StudentPrivateRoute from "../Private/StudentPrivateRoute";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import Payments from "../pages/Dashboard/Students/Payments/Payments";
import PaymentsHistory from "../pages/Dashboard/Students/PaymentsHistory/PaymentsHistory";
import Errorpage from "../pages/ErrorPage/Errorpage";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "instructors",
        element: <Instructor />,
      },
      {
        path: "approvedClasses",
        element: <Classes />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayouts />
      </PrivateRoute>
    ),
    children: [
      {
        path:"/dashboard/home",
        element:<DashboardHome />
      },
      {
        path: "/dashboard/studentsHome",
        element: <StudentsHome />,
      },
      {
        path: "/dashboard/instructorHome",
        element: <InstructorHome />,
      },
      {
        path: "/dashboard/adminHome",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/manageClasses",
        element: (
          <AdminPrivateRoute>
            <ManageClasses />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/manageUsers",
        element: (
          <AdminPrivateRoute>
            <ManageUsers />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/addClasses",
        element: (
          <InstructorPrivateRoute>
            {" "}
            <AddClass />
          </InstructorPrivateRoute>
        ),
      },
      {
        path: "/dashboard/myClasses",
        element: (
          <InstructorPrivateRoute>
            <MyClasses />
          </InstructorPrivateRoute>
        ),
      },
      {
        path: "/dashboard/selectedClasses",
        element: (
          <StudentPrivateRoute>
            <SelectedClasses />
          </StudentPrivateRoute>
        ),
      },
      {
        path: "/dashboard/enrolledClasses",
        element: (
          <StudentPrivateRoute>
            <EnrolledClasses />
          </StudentPrivateRoute>
        ),
      },
      {
        path: "/dashboard/payments/:id",
        element: (
          <StudentPrivateRoute>
            <Payments />
          </StudentPrivateRoute>
        ),
      },
      {
        path: "/dashboard/paymentsHistory",
        element: (
          <StudentPrivateRoute>
            <PaymentsHistory />
          </StudentPrivateRoute>
        ),
      },
    ],
  },
]);
