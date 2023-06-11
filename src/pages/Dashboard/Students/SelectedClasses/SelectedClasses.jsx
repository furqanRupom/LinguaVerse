import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import { useAuth } from "../../../../hooks/useAuth";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import axios from "axios";
import SectionTitle from "../../../../components/SectionTitle";
import { Link } from "react-router-dom";

const  SelectedClasses = () => {
    const {user,loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const {data:selectedClasses=[],refetch} = useQuery({
        queryKey:['email',user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosSecure.get(`selectClasses/${user?.email}`)
            return res.data
        }
    })

    const handleDeleteClass = (id)=>{
        console.log(id)
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#0eb582',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {

            axiosSecure.delete(`/selectedClasses/${id}`)
            .then(res=>{
              if(res.data.deletedCount > 0){
                refetch()
                Swal.fire(
                  'Deleted!',
                  'this select class is successfully removed.',
                  'success'
                )
              }
            })

          }
        })
      }




    return (
        <div>

            <SectionTitle title="selected classes" />
            <div className="col-span-12 mt-5">
                <div className="flex items-center justify-center my-3">

                </div>
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <div className="mt-4">
              <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto">
                  <div className="py-2 align-middle inline-block min-w-full">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                          <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">CLASS IMAGE</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">

                                <span className="mr-2">CLASS NAME</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">INSTRUCTOR NAME</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">PRICE</span>
                              </div>
                            </th>


                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">ACTION</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">Pay</span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {selectedClasses.map((selectClass, index) => (
                            <tr key={index}>
                                 <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <img className="w-20 rounded-xl" src={selectClass?.image} alt="" />
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <p>{selectClass?.className}</p>
                              </td>



                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <p>{selectClass?.instructorName}</p>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <p>${selectClass?.price}</p>
                              </td>

                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <div className="flex space-x-4">

                                  <motion.button onClick={()=> handleDeleteClass(selectClass.selectClassId)}
                                     whileHover={{ scale: 1.1 }}
                                     whileTap={{ scale: 0.9 }}

                                    className="text-red-500 hover:text-red-600"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-5 h-5 mr-1 ml-2"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                      />
                                    </svg>
                                    <p>Delete</p>
                                  </motion.button>


                                </div>
                              </td>

                              <td>

                              <Link to={`/dashboard/payments/${selectClass?.selectClassId}`}>
                              <motion.button     whileHover={{ scale: 1.1 }}
                                     whileTap={{ scale: 0.9 }} className="px-5 py-2 rounded-lg bg-teal-500 font-bold text-white">Pay</motion.button>
                              </Link>

                              </td>

                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};


export default SelectedClasses;