import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AiOutlineClockCircle } from "react-icons/ai";
import SectionTitle from "../../../components/SectionTitle";

const PopularClasses = () => {
  const { data: popularClasses = [] } = useQuery(["classes"], async () => {
    const res = await axios.get(
      "https://lingua-verse-server-furqanrupom.vercel.app/classes/popular"
    );
    return res.data;
  });

  return (
    <div className="mt-12 mb-16">
      <SectionTitle title="Explore Our Popular Courses" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {popularClasses.map((popularClass) => (
          <div
            key={popularClass?.id}
            className="card card-compact bg-base-100 dark:bg-slate-900  dark:shadow-slate-950 shadow-md rounded-md overflow-hidden"
          >
            <figure>
              <img src={popularClass?.image} alt="Class" className="w-full" />
            </figure>
            <div className="card-body p-4 flex flex-col justify-between">
              <div>
                <p className="text-lg font-semibold mb-2 dark:text-gray-400">
                  {popularClass?.className}
                </p>
                <div className="flex items-center mb-2">
                  <AiOutlineClockCircle className="mr-2" />
                  <p className="text-gray-600">3 hours 20 minutes</p>
                </div>
                <p className="text-sm text-gray-500">
                  Instructor: {popularClass?.instructorName}
                </p>
                <p className="text-sm text-gray-500">Difficulty: Easy</p>
              </div>
              <button className="btn btn-outline btn-accent mt-4">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
