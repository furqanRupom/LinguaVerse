import { useQuery } from "@tanstack/react-query";
import { useAllClasses } from "../../../../hooks/useAllClasses";
import axios from "axios";
import SectionTitle from "../../../../components/SectionTitle";
import Swal from "sweetalert2";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    console.log(res.data);
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    axios
      .patch(
        `https://lingua-verse-server-furqanrupom.vercel.app/users/admin/${user?._id}`
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: `${user?.name} is now admin`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    axios
      .patch(
        `https://lingua-verse-server-furqanrupom.vercel.app/users/instructor/${user?._id}`
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: `${user?.name} is now Instructor`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

  return (
    <div>
      <SectionTitle title="Manage Users" />
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
                                <span className="mr-2">User's Image</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">User's Name</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">User's Email</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2">Role</span>
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
                          {users.map((user, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <img
                                  className="w-20 rounded-full object-cover"
                                  src={user.image}
                                  alt=""
                                />
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <p>{user.name}</p>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <p>{user.email}</p>
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
                                  <p>{user?.role}</p>
                                </div>
                              </td>

                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <div className="flex space-x-4">
                                  <button
                                    onClick={() => handleMakeAdmin(user)}
                                    disabled={
                                      user?.role === "student" ||
                                      user?.role === "instructor"
                                        ? false
                                        : true
                                    }
                                    className={`${
                                      user?.role === "student" ||
                                      user?.role === "instructor"
                                        ? "bg-green-500 hover:bg-green-600"
                                        : "bg-gray-400 cursor-not-allowed"
                                    } text-white px-4 py-2 rounded mr-2`}
                                  >
                                    Make Admin
                                  </button>

                                  <button
                                    onClick={() => handleMakeInstructor(user)}
                                    disabled={
                                      user?.role === "student" ? false : true
                                    }
                                    className={`${
                                      user?.role === "student"
                                        ? "bg-red-500 hover:bg-red-600"
                                        : "bg-gray-400 cursor-not-allowed"
                                    } text-white px-4 py-2 rounded mr-2`}
                                  >
                                    Make Instructor
                                  </button>
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

export default ManageUsers;
