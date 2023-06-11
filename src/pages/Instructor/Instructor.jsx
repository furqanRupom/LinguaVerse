import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "../../components/SectionTitle";
import ScrollToTop from "../../components/ScroollToTop";
import { Helmet } from "react-helmet";

const Instructor = () => {
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const res = await axios.get("http://localhost:5000/users/instructors");
    return res.data;
  });
  return (
    <div className="my-32">
         <Helmet>
        <title>LinguaVerse | Instructors</title>
      </Helmet>
        <SectionTitle title="Discover Our Teaching Team" className="py-6" />
      <div className="min-h-screen text-black z-20  grid grid-cols-1  md:grid-cols-2 gap-10">
        {instructors.map((instructor) => (
          <div key={instructor?._id}>
            <div className="card card-side bg-base-100 shadow-md p-6">
              <figure>
                <img
                  src={instructor?.image}
                  alt={instructor?.name}
                  className="w-48 h-48 rounded-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{instructor?.name}</h2>
                <p>{instructor?.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
