import { useAuth } from "../../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const AddClass = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    // Handle form submission
  };

  return (
    <div className="max-w-6xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="className">
              Class Name
            </label>
            <input
              className="h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
              id="className"
              type="text"
              placeholder="Enter class name"
              {...register("className", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="classImage">
              Class Image
            </label>
            <input   {...register("image",{ required: true})} type="file" className="file-input file-input-bordered file-input-accent w-full max-w-[15rem]" />

          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="instructorName">
              Instructor Name
            </label>
            <input
              className="h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
              id="instructorName"
              type="text"
              value={user?.displayName}
              readOnly
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="instructorEmail">
              Instructor Email
            </label>
            <input
              className="h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
              id="instructorEmail"
              type="email"
              value={user?.email}
              readOnly
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="availableSeats">
              Available Seats
            </label>
            <input
              className="h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
              id="availableSeats"
              type="number"
              placeholder="Enter available seats"
              {...register("availableSeats", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              step="0.01"
              placeholder="Enter price"
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <motion.button
            initial={{ backgroundColor: "#0eb582" }}
            whileHover={{ backgroundColor: "#0eb582", scale: 1.05 }}
            whileTap={{ backgroundColor: "#0eb582", scale: 0.95 }}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
