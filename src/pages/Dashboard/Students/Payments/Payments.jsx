import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../components/SectionTitle";
import CheckoutsForm from "./CheckoutsForm";
import { Elements } from "@stripe/react-stripe-js";
import { useSelectedClasses } from "../../../../hooks/useSelectedClasses";
import { useParams } from "react-router-dom";
import { useState } from "react";

const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GATEWAY_PK}`)
const  Payments = () => {
    const {id} = useParams()

    const [selectedClasses] = useSelectedClasses()
    const  enrolledClasses = selectedClasses.find(classes => classes?.selectClassId === id)

    const price = enrolledClasses?.price
    console.log(price)
    return (
        <div>
            <SectionTitle title="Payments" />

            <Elements stripe={stripePromise}>
            <CheckoutsForm enrolledClass={enrolledClasses} price={price} />
            </Elements>

        </div>
    );
};


export default Payments;