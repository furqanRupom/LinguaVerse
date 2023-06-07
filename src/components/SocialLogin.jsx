import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const location = useLocation();
//   const from = location?.state?.from?.pathname || "/";
//   const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        const savedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div onClick={handleGoogleSignIn} className="flex items-center  justify-center">
    <h3 className="text-[#4fa94d] text-xl text-center btn btn-circle"><FaGoogle /></h3>
</div>
  );
};

export default SocialLogin;
