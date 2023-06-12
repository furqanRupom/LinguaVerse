import { Link } from "react-router-dom";

const  Errorpage = () => {

    return (
        <div className="flex items-center  flex-col justify-center w-full h-full">
            <img className="my-auto mt-16" src="https://i.ibb.co/5KLj2yd/404-Error-bro.png" alt="" />
            <Link to="/">
            <button className="px-7 py-3 font-bold bg-[#0eb582] text-white rounded-md ">
                Back to home
            </button>
            </Link>

        </div>
    );
};


export default Errorpage;