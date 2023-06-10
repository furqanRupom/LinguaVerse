import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import { AuthContext } from "../Providers/AuthProviders";

const  PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <Loader />
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace={true}></Navigate>
};


export default PrivateRoute;