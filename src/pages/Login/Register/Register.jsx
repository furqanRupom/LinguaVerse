import { useState } from "react";
import { Link } from "react-router-dom";
import {} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'
import { useForm } from 'react-hook-form';
const Register = () => {
    const [show,setShow] = useState(false);
    const [showPass,setShowPass] = useState(false);
    const [disabled, setDisabled] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
    }

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
                {...register('name', { required: true })}
                className="input input-bordered w-full max-w-xs"
              />
                {errors.name && <span className="text-red-500">Name is required</span>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Email?</span>

              </label>
              <input
                type="email"
                placeholder="Your Email"
                {...register('email', { required: true })}
                className="input input-bordered w-full max-w-xs"
              />
                {errors.email && <span className="text-red-500">Email is required</span>}
            </div>

            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">your img url?</span>

              </label>
              <input
                type="text"
                placeholder="Img url"
                {...register('image', { required: true })}
                className="input input-bordered w-full "
              />
              {errors.image && <span className="text-red-500">Image is required</span>}

            </div>


            <div>
            <div className="form-control w-full relative">
              <label className="label">
                <span className="label-text">Your Password?</span>

              </label>
              <input
                type={show ? "text" : "password"}
                placeholder="password"
                {...register('password', { required: true, minLength: 6 })}
                className="input input-bordered w-full "
              />
               {errors.password && <span className="text-red-500">Password must be at least 6 characters</span>}
              <div
                onClick={() => setShow(!show)}
                className="absolute right-3 top-12 text-xl text-[#448c43] cursor-pointer"
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
                {...register('confirm', { required: true })}
                className="input input-bordered w-full "
              />
                            {errors.confirm && <span className="text-red-500">confirm password is required</span>}

                <div
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-12 text-xl text-[#448c43] cursor-pointer"
              >
                {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            <span className="py-5">Already have an account please <Link className="underline text-teal-500" to="/login">Login</Link></span>
            </div>
                <div className="flex items-center justify-center">
            <input  className="px-12 py-3 text-lg font-semibold my-5 rounded-lg text-white bg-[#4fa94d] cursor-pointer hover:bg-[#448c43]" type="submit" value="Register Now" />
                </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;