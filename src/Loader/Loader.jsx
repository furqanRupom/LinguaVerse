import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center absolute inset-0 w-full h-full bg-white">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
