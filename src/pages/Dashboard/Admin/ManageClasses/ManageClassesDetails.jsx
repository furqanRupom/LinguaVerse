import axios from "axios";
import { useAllClasses } from "../../../../hooks/useAllClasses";
import { useState } from "react";
import FeedbackModal from "../../../../components/FeedbackModal";

const ManageClassesDetails = ({ classInfo }) => {
  const {
    _id,
    image,
    className,
    instructorName,
    instructorEmail,
    seats,
    price,
    status,
  } = classInfo;
  const [, refetch] = useAllClasses();
  const [classId, setClassId] = useState();



  const handleApprove = (id) => {
    // Handle approve button click
    axios.patch(`http://localhost:5000/AllClasses/${id}`).then((res) => {
      if (res.data.modifiedCount > 1) refetch();
    });
  };

  const handleDeny = (id) => {
    // Handle deny button click
    axios.patch(`http://localhost:5000/AllClasses/denied/${id}`).then((res) => {
      if (res.data.modifiedCount > 1) refetch();
    });
  };


  const handleFeedback = (id)=>{
    localStorage.setItem('classId',id)
    window.my_modal_2 = {
      showModal: function() {
        let modal = document.getElementById('my_modal_2');
        if (modal) {
          modal.showModal();
          setClassId(id)
        }
      }
    };
    window.my_modal_2.showModal()

  }

  return (
    <div className="bg-white shadow-lg rounded-md p-4 mb-4">


<FeedbackModal classId={classId} hello="hello" />
      <div className="flex items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img
            src={image}
            alt={className}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-2xl font-bold">{className}</h2>
          <p className="text-gray-600">{instructorName}</p>
          <p className="text-gray-600">{instructorEmail}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>Available Seats: {seats}</p>
        <p>Price: {price}</p>
        <p>Status: {status}</p>
      </div>
      <div className="mt-4">
        <button
          disabled={status === "pending" ? false : true}
          className={`${
            status === "pending"
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-400 cursor-not-allowed"
          } text-white px-4 py-2 rounded mr-2`}
          onClick={() => handleApprove(_id)}
        >
          Approve
        </button>
        <button
          disabled={status === "pending" ? false : true}
          className={`${
            status === "pending"
              ? "bg-red-500 hover:bg-red-600"
              : "bg-gray-400 cursor-not-allowed"
          } text-white px-4 py-2 rounded mr-2`}
          onClick={() => handleDeny(_id)}
        >
          Deny
        </button>
        <button
  disabled={status === "pending" || status === "approved"}
  className={`px-4 py-2 rounded ${
    status === "pending" || status === "approved" ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
  } text-white`}
  onClick={() => handleFeedback(_id)}
>
  Send Feedback
</button>




      </div>
    </div>
  );
};

export default ManageClassesDetails;
