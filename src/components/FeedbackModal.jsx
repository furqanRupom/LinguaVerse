import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { parse } from "postcss";
import axios from "axios";
import Swal from "sweetalert2";
import { useClass } from "../hooks/useClass";
import { useAllClasses } from "../hooks/useAllClasses";

const FeedbackModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [, refetch] = useAllClasses();
  const modalRef = useRef(null);

  const onSubmit = async (data) => {
    const { feedback } = data;
    const feedbackInfo = { feedback };
    axios
      .put(
        `https://lingua-verse-server-furqanrupom.vercel.app/AllClasses/feedback/${localStorage.getItem(
          "classId"
        )}`,
        feedbackInfo
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Feedback sent successfully",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          localStorage.removeItem("classId");
          modalRef.current.close();
          refetch();
        }
      });
  };

  const handleCloseModal = () => {
    modalRef.current.close();
    localStorage.removeItem("classId");
  };

  return (
    <>
      {/* Open the modal using ID.showModal() method */}

      <dialog
        id="my_modal_2"
        className="modal modal-bottom sm:modal-middle"
        ref={modalRef}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="dialog"
          className="modal-box w-[40%]"
        >
          <SectionTitle title="write feedback" />
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text">Feedback</span>
            </label>
            <textarea
              className="textarea textarea-lg textarea-bordered"
              placeholder="Enter your Feedback"
              {...register("feedback", { required: true })}
            ></textarea>
            {errors?.recipe && (
              <span className="text-red-600">Fill this form</span>
            )}
          </div>

          <div className="flex items-center justify-center space-x-5">
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-10 py-3 bg-teal-500 text-white font-bold rounded-lg "
              >
                Sent Feedback
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

export default FeedbackModal;
