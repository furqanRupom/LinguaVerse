import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./Routes/Router";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <div className="font-poppins max-w-screen-7xl mx-auto">
        <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
