import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000", // replace with your base URL
});

export const useAxiosSecure = () => {
  const { logOut, user } = useContext(AuthContext); // Assuming you have a log out method in your Auth context

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          if (user?.email) {
            logOut();
          }
          // Optionally, you can handle the error here instead of rejecting the promise
          // For example, you can show a notification to the user
          // handleUnauthorizedError();
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, user]);

  return [axiosSecure];
};
