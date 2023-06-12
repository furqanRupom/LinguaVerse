import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        const savedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          image: loggedUser.photoURL,
          role: "student",
        };
        axios
          .post(
            "https://lingua-verse-server-furqanrupom.vercel.app/users",
            savedUser
          )
          .then((res) => {
            console.log(res.data);
          });
      })
      .then((data) => {
        console.log(data);
        navigate(from, { replace: true });
      });
  };
  return (
    <div
      onClick={handleGoogleSignIn}
      className="flex items-center  justify-center"
    >
      <h3 className="text-[#0eb582] text-xl text-center btn btn-circle">
        <FaGoogle />
      </h3>
    </div>
  );
};

export default SocialLogin;
