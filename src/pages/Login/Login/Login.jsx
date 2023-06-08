import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
import SocialLogin from "../../../components/SocialLogin";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";
import Swal from 'sweetalert2'
import '../login.css'


const Login = () => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser } = useAuth();
  const onSubmit = (data) => {
    console.log(data.email)
    loginUser(data.email,data.password)
      .then((result) => {
        const loggedUser = result.user
      
        Swal.fire({
          title: 'User Login successfully',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })


      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="mt-32 mb-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 justify-items-center items-center">
        <div>
          <img
            src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg?w=740&t=st=1686146155~exp=1686146755~hmac=02a04f4a5d01885c909a8c7cc502853e2c649c276961182b26d0abad0a25bfec"
            alt=""
          />
        </div>

        <div className="w-3/4">
          <div className="text-center pb-5">
            <h3 className="text-2xl font-bold">Login</h3>
            <p className="py-3">Enter your information to Login</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="label-text">Your Email?</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
                className="input input-bordered w-full "
              />

              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>

            <div>
              <div className="form-control w-full pb-3 relative">
                <label className="label">
                  <span className="label-text">Your Password?</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder="password"
                  {...register("password", { required: true })}
                  className="input input-bordered w-full "
                />
                {errors.password && (
                  <span className="text-red-500">Password is required</span>
                )}
                 <div
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-12 text-xl text-[#0eb582] cursor-pointer"
                >
                  {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>

              <span className="py-5">
                New to LinguaVerse please{" "}
                <Link className="underline text-teal-500" to="/register">
                  Register
                </Link>
              </span>
            </div>
            <div className="flex items-center justify-center">
              <input
                className="px-12 py-3 text-lg font-semibold my-5 rounded-lg text-white bg-[#0eb582] cursor-pointer hover:bg-[#448c43]"
                type="submit"
                value="Login Now"
              />
            </div>

            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
