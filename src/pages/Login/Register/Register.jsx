import { useState } from "react";
import { Link } from "react-router-dom";
import {} from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
import SocialLogin from "../../../components/SocialLogin";
import axios from "axios";
import Swal from "sweetalert2";
const Register = () => {
  const [show, setShow] = useState(false);
  const [showPass, setShowPass] = useState(false);
  // const [disabled, setDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data?.email, data?.password)
      .then((result) => {
        const loggedUser = result.user
        updateUserProfile(data?.name, data?.image)
          .then((result) => {
            const usersData = {
              name:loggedUser.displayName,
              email:loggedUser.email,
              image:loggedUser.photoURL,
              role:'student'
            }
            console.log('updated',usersData);

            Swal.fire({
              title: 'User Created successfully',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })

            // TODO : for now we just save the role of the database is intructor after we do our major part than we will reset
            // TODO : we will add sweet alert as well as navigate to home page
            axios.post('http://localhost:5000/users',usersData)
            .then(res=>{
              console.log(res.data)
            })
          })
          .catch((error) => console.log(error.message));
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
            src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4320.jpg?size=626&ext=jpg&ga=GA1.1.1081246971.1673798672&semt=ais"
            alt=""
          />
        </div>

        <div>
          <div className="text-center pb-5">
            <h3 className="text-2xl font-bold">Register</h3>
            <p className="py-3">Enter your information to register</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex space-x-4">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full max-w-xs"
                  autoComplete="name"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Email?</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", { required: true })}
                  className="input input-bordered w-full max-w-xs"
                  autoComplete="email"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">your img url?</span>
              </label>
              <input
                type="text"
                placeholder="Img url"
                {...register("image", { required: true })}
                className="input input-bordered w-full "
                autoComplete="image"
              />
              {errors.image && (
                <span className="text-red-500">Image is required</span>
              )}
            </div>

            <div>
              <div className="form-control w-full relative">
                <label className="label">
                  <span className="label-text">Your Password?</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder="password"
                  {...register("password", { required: true, minLength: 6 })}
                  className="input input-bordered w-full "
                  autoComplete="current-password"
                />
                {errors.password && (
                  <span className="text-red-500">
                    Password must be at least 6 characters
                  </span>
                )}
                <div
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-12 text-xl text-[#0eb582] cursor-pointer"
                >
                  {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
              <div className="form-control w-full pb-3 relative">
                <label className="label">
                  <span className="label-text">Confirm your password?</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Confirm password"
                  {...register("confirm", { required: true })}
                  className="input input-bordered w-full "
                  autoComplete="new-password"
                />
                {errors.confirm && (
                  <span className="text-red-500">
                    confirm password is required
                  </span>
                )}

                <div
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-12 text-xl text-[#0eb582] cursor-pointer"
                >
                  {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
              <span className="py-5">
                Already have an account please{" "}
                <Link className="underline text-teal-500" to="/login">
                  Login
                </Link>
              </span>
            </div>
            <div className="flex items-center justify-center">
              <input
                className="px-12 py-3 text-lg font-semibold my-5 rounded-lg text-white bg-[#0eb582] cursor-pointer hover:bg-teal-500"
                type="submit"
                value="Register Now"
              />
            </div>
          </form>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
