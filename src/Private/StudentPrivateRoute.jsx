import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../Loader/Loader";
import { useStudent } from "../hooks/useStudent";

const  StudentPrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useAuth();
    const [isStudent,isStudentLoading] = useStudent()
    if(loading ||isStudentLoading){
        return <Loader />
    }
    if(user && isStudent){
        return children
    }
    return <Navigate to="/" state={{from:location}} replace={true}></Navigate>
};


export default StudentPrivateRoute;