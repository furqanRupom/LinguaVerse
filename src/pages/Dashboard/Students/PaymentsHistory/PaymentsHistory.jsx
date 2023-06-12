import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import { useAuth } from "../../../../hooks/useAuth";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import axios from "axios";
import SectionTitle from "../../../../components/SectionTitle";
import { Link } from "react-router-dom";
import moment from "moment/moment";

const PaymentsHistory = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: payments = [], refetch } = useQuery({
    queryKey: ["email", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/history/${user?.email}`);
      return res.data;
    },
  });



  return (
    <div>
      <SectionTitle title="Payments history" />
      <div className="col-span-12 mt-5">
        <div className="flex items-center justify-center my-3"></div>
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
                                <span className="mr-2 uppercase">transactionId</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2 uppercase">price</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2 uppercase">status</span>
                              </div>
                            </th>
                            <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <div className="flex cursor-pointer">
                                <span className="mr-2 uppercase">date</span>
                              </div>
                            </th>


                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {payments.map((payment, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <p>{payment?.transactionId}</p>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <p>{payment?.price}</p>
                              </td>

                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <p>{payment?.status}</p>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                <p>{moment(payment?.date).format('YYYY-MM-DD HH:mm:ss')}</p>
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

export default PaymentsHistory;
