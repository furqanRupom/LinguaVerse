import { Link } from "react-router-dom";

const Register = () => {
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
          <form>
            <div className="flex space-x-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your name?</span>

              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
              />

            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Email?</span>

              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />

            </div>

            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">your img url?</span>

              </label>
              <input
                type="text"
                placeholder="Img url"
                className="input input-bordered w-full "
              />

            </div>


            <div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Your Password?</span>

              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered w-full "
              />

            </div>
            <div className="form-control w-full pb-3">
              <label className="label">
                <span className="label-text">Confirm your password?</span>

              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered w-full "
              />

            </div>
            <span className="py-5">Already have an account please <Link className="underline text-teal-500" to="/login">Login</Link></span>
            </div>
                <div className="flex items-center justify-center">
            <input className="px-12 py-3 text-lg font-semibold my-5 rounded-lg text-white bg-[#4fa94d] cursor-pointer hover:bg-[#448c43]" type="submit" value="Register Now" />
                </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
