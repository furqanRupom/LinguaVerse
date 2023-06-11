import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import { useAuth } from "../../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useSelectedClasses } from "../../../../hooks/useSelectedClasses";
import Swal from "sweetalert2";
'./Common.css'

const CheckoutsForm = () => {

  const {id} = useParams()

    const [selectedClasses] = useSelectedClasses()
    const  enrolledClasses = selectedClasses.find(classes => classes?.selectClassId === id)

    const price = enrolledClasses?.price
    console.log(price)


  const {user} = useAuth()
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");


console.log(enrolledClasses)
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intend", {price}).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    console.log(card)
    if (card == null) {
      return;
    }



    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(["error"], error);
      setCardError(error.message);
    } else {
      console.log(["paymentMethod"], paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
    }


    setProcessing(false);
    if (paymentIntent?.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const transactionId = paymentIntent.id;
      const paymentsInfo = {
        email: user?.email,
        price,
        date: new Date(),
        status: "service pending",
        enrolledClassId: enrolledClasses?._id,
        selectedClassId: enrolledClasses.selectClassId,
        transactionId: paymentIntent.id,
        enrolledClassName: enrolledClasses.name,

      };
      console.log(paymentsInfo)

      await axiosSecure.post("/payments", paymentsInfo).then((res) => {
        if (res.data.insertedId) {
          console.log(res.data)
          Swal.fire("payment successfully added");
        }
      });

      if(transactionId){
        Swal.fire({
          title: 'Congratulations! Your payment has been successfully processed.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }

    }

    // Proceed with payment logic using the stripe and card elements
  };

  return (
    <div className="my-8 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className=" rounded p-4 mb-4">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#424770",

                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center mt-16">
        <motion.button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="bg-teal-500 text-white px-6 py-3 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Pay
        </motion.button>
      </div>
      </form>

      {cardError && <h3 className="text-red-500 py-3">{cardError}</h3>}
      {transactionId && (
        <h3 className="text-green-500 py-3">
          Transaction is completed with Transaction id: {transactionId}
        </h3>)}
    </div>
  );
};

export default CheckoutsForm;
