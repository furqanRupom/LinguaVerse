import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../Loader/Loader";
import { useAdmin } from "../hooks/useAdmin";

const  AdminPrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useAuth();
    const [isAdmin,isAdminLoading] = useAdmin()
    if(loading ||isAdminLoading){
        return <Loader />



    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to="/" state={{from:location}} replace={true}></Navigate>
};


export default AdminPrivateRoute;