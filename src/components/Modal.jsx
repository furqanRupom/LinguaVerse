import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { parse } from "postcss";
import axios from "axios";
import Swal from "sweetalert2";
import { useClass } from "../hooks/useClass";

const Modal = ({ classId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [, refetch] = useClass();
  const modalRef = useRef(null);

  const onSubmit = (data) => {
    const { className, classImage, availableSeats, price } = data;
    const classInfo = {
      className,
      image: classImage,
      seats: parseFloat(availableSeats),
      price: parseFloat(price),
    };
    axios
      .put(
        `https://lingua-verse-server-furqanrupom.vercel.app/classes/${classId}`,
        classInfo
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Class updated successfully",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          modalRef.current.close();
        }
      });
  };

  const handleCloseModal = () => {
    modalRef.current.close();
  };

  return (
    <>
      {/* Open the modal using ID.showModal() method */}

      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
        ref={modalRef}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="dialog"
          className="modal-box w-[40%]"
        >
          <SectionTitle title="update class information" />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("className", { required: true })}
              className="input input-bordered w-full max-w-lg"
            />
            {errors.className && (
              <span className="error">Class Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="text"
              placeholder="Class Image"
              {...register("classImage", { required: true })}
              className="input input-bordered w-full max-w-lg"
            />
            {errors.className && (
              <span className="error">Class Image is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              type="text"
              placeholder="Available Seats"
              {...register("availableSeats", { required: true })}
              className="input input-bordered w-full max-w-lg"
            />
            {errors.availableSeats && (
              <span className="error">Available Seats is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full max-w-lg"
            />
            {errors.price && <span className="error">Price is required</span>}
          </div>

          <div className="flex items-center justify-center space-x-5">
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-10 py-3 bg-teal-500 text-white font-bold rounded-lg "
              >
                Update
              </motion.button>
            </div>

            <div className="modal-action mb-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className=" px-10 py-3 bg-red-500 text-white font-bold rounded-lg"
                onClick={handleCloseModal}
              >
                Close
              </motion.button>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
