import { useEffect, useState } from "react";
import Loader from "../../../../Loader/Loader";
import { useAuth } from "../../../../hooks/useAuth";
import { useClass } from "../../../../hooks/useClass";
import SectionTitle from "../../../../components/SectionTitle";
import { motion } from "framer-motion";
import Modal from "../../../../components/Modal";
import axios from "axios";
import Swal from "sweetalert2";
import './MyClasses.css'
const MyClasses = () => {
  const [classes, refetch] = useClass();
  const [classId,setClassId] = useState()
  const showModalWithItemId =(Id) => {
     window.my_modal_5.showModal()
      setClassId(Id)
  }

  const handleDeleteClass = (id)=>{
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

        axios.delete(`http://localhost:5000/classes/${id}`)
        .then(res=>{
          if(res.data.deletedCount > 0){
            refetch()
            Swal.fire(
              'Deleted!',
              'Your class has been deleted.',
              'success'
            )
          }
        })

      }
    })





  }
  return (
    <div>
        <SectionTitle title="My Classes" />
        <Modal  classId={classId}/>
      <div className="col-span-12 mt-5">
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
                                <span className="mr-2">CLASS NAME</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">Available Seats</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">STATUS</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">PRICE</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">Enrolled Students</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">Feedback</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">ACTION</span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {classes.map((everyClass, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <p>{everyClass.className}</p>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <p>{everyClass.seats}</p>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <div className="flex text-green-500">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  <p>{everyClass?.status}</p>
                                </div>
                              </td>

                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <p>{everyClass?.price}</p>

                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <p>{everyClass?.enrol}</p>

                              </td>
                             
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <p>{everyClass?.feedback}</p>
                              </td>

                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <div className="flex space-x-4">
                                  <motion.button  onClick={() => showModalWithItemId(everyClass._id)}
                                     whileHover={{ scale: 1.1 }}
                                     whileTap={{ scale: 0.9 }}

                                    className="text-blue-500 hover:text-blue-600"
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
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                      />
                                    </svg>
                                    <p className="text-center">update</p>
                                  </motion.button>
                                  <motion.button onClick={()=> handleDeleteClass(everyClass._id)}
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

export default MyClasses;
