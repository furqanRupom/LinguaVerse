import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000", // replace with your base url
});

export const useAxiosSecure = () => {
  const { logOut, loading } = useContext(AuthContext); // Assuming you have a log out method in your Auth context
  const navigate = useNavigate(); // Assuming you have react-router-dom installed
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          (error.response && error.response.status === 401) ||
          error.response.status === 403
        ) {
          await logOut();

          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate, axiosSecure]);
  return [axiosSecure];
};
