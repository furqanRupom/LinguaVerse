import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAdmin } from "../../hooks/useAdmin";
import { useInstructor } from "../../hooks/useInstructor";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useAuth } from "../../hooks/useAuth";
import SectionTitle from "../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
const Classes = () => {
  const [isAdmin] = useAdmin();
  const {user} = useAuth()
  const [isInstructor] = useInstructor();
  const { data: approvedClasses = [] } = useQuery(["approved"], async () => {
    const res = await axios.get("http://localhost:5000/classes/approved");
    return res.data;
  });


  const handleSelectButton = approved =>{
    const {className,_id,instructorName,price,image}= approved;
    const selectClass = {
        selectClassId:_id,
        studentEmail:user?.email,
        className,
        instructorName,
        price,
        image
    }
    axios.post('http://localhost:5000/selectedClasses',selectClass)
    .then(res=>{
        if(res.data.insertedId){
            Swal.fire({
                title: 'New Classes selected successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }
    })
  }
  return (
    <div className="my-32 max-w-7xl mx-auto">
      <Helmet>
        <title>LinguaVerse | Classes</title>
      </Helmet>
        <SectionTitle title="Explore our classes and courses " className="py-5" />
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
        {approvedClasses.map((approved) => (
          <div
            key={approved?._id}
            className={approved.seats === 0 ? "bg-red-400 rounded-lg shadow-md " :"bg-white rounded-lg shadow-md "}
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
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleSelectButton(approved)}
                  className={`${
                    approved.seats === 0 || isAdmin || isInstructor ? "bg-gray-400 cursor-not-allowed" : "bg-teal-500"
                  } text-white py-2 px-4 rounded-full`}
                  disabled={approved.seats === 0 ? true : isAdmin || isInstructor}
                >
                  select
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
