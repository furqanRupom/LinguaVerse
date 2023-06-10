import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../Loader/Loader";
import { useAdmin } from "../hooks/useAdmin";

const InstructorPrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [isInstructor, sInstructorLoading] = useAdmin();
  if (loading || sInstructorLoading) {
    return <Loader />;
  }
  if (user && isInstructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace={true}></Navigate>;
};

export default InstructorPrivateRoute;
