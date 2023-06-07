import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useAuth } from "../../../hooks/useAuth";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {loginUser} = useAuth()
    const onSubmit = data =>{
        loginUser(data.name,data.email)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
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
                {...register('email', { required: true })}
                className="input input-bordered w-full "
              />

{errors.email && <span className="text-red-500">Email is required</span>}
            </div>




            <div>
            <div className="form-control w-full pb-3">
              <label className="label">
                <span className="label-text">Your Password?</span>

              </label>
              <input
                type="password"
                placeholder="password"
                {...register('password', { required: true })}
                className="input input-bordered w-full "
              />
                {errors.password && <span className="text-red-500">Password is required</span>}
            </div>

            <span className="py-5">New to LinguaVerse  please <Link className="underline text-teal-500" to="/register">Register</Link></span>
            </div>
                <div className="flex items-center justify-center">
            <input className="px-12 py-3 text-lg font-semibold my-5 rounded-lg text-white bg-[#4fa94d] cursor-pointer hover:bg-[#448c43]" type="submit" value="Login Now" />
                </div>

                <div className="flex items-center  justify-center">
                    <h3 className="text-[#4fa94d] text-xl text-center btn btn-circle"><FaGoogle /></h3>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;