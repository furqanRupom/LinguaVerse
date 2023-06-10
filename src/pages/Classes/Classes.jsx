import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAdmin } from "../../hooks/useAdmin";
import { useInstructor } from "../../hooks/useInstructor";

const Classes = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { data: approvedClasses = [] } = useQuery(["approved"], async () => {
    const res = await axios.get("http://localhost:5000/classes/approved");
    return res.data;
  });

  return (
    <div className="my-32 max-w-7xl mx-auto">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {approvedClasses.map((approved) => (
          <div
            key={approved?._id}
            className={`bg-white rounded-lg shadow-md ${
              approved.seats === 0 ? "bg-red-400" : ""
            }`}
          >
            <figure className="relative">
              <img
                src={approved?.image}
                alt="Movie"
                className="object-cover w-full h-56 rounded-t-lg"
              />
              <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                New
              </div>
            </figure>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{approved.className} Language</h2>
              <p className="text-gray-600 mb-2">Instructor: {approved.instructorName}</p>
              <p className="text-gray-600 mb-2">Available seats: {approved.seats}</p>
              <p className="text-gray-600 mb-4">Price: ${approved.price}</p>
              <div className="flex justify-end">
                <button
                  className={`${
                    approved.seats === 0 || isAdmin || isInstructor ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
                  } text-white py-2 px-4 rounded-full`}
                  disabled={approved.seats === 0 ? true : isAdmin || isInstructor}
                >
                  select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
