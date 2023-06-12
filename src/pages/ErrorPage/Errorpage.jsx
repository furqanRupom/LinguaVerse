import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="flex items-center  flex-col justify-center w-full h-full">
      <img
        className="my-auto mt-16"
        src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg"
        alt=""
      />
      <p className="text-3xl font-base text-center py-3">page is not found</p>
      <Link to="/">
        <div className="flex items-center justify-center">
          <button className="px-7  py-3 mt-12 font-bold bg-[#0eb582] text-white rounded-md ">
            Back to home
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Errorpage;
