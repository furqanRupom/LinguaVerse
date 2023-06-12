import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaFacebook, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../../../components/SectionTitle";

const PopularInstructor = () => {
  const { data: PopularInstructors = [] } = useQuery(["popular"], async () => {
    const res = await axios.get("http://localhost:5000/popular/instructors");
    return res.data;
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of cards displayed here
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
  };

  return (
    <div className="max-w-7xl mx-auto pt-16 pb-16">
      <SectionTitle title="Explore our teachers" />
      <div className="w-full">
        <Slider {...settings}>
          {PopularInstructors.map((instructors) => (
            <div
              key={instructors?._id}
              className="bg-white dark:text-gray-400 dark:bg-slate-900 rounded-lg shadow-md p-4"
            >
              <figure className="relative">
                <img
                  src={instructors?.image}
                  alt="Movie"
                  className="object-cover w-full h-[500px] md:h-96 rounded-t-lg"
                />
                <div className="absolute top-2 right-2 text-[#c5f6e2] bg-[#0eb582] text-xs px-2 py-1 rounded dark:bg-slate-800 dark:text-[#0eb582]">
                  popular
                </div>
              </figure>
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2 text-center">
                  {instructors.name}
                </h2>
                <div className="divider"></div>
                <div className="flex justify-center items-center mt-4">
                  <FaFacebookF
                    size={34}
                    className="text-[#0eb582] cursor-pointer mx-1 bg-[#c5f6e2] hover:bg-[#0eb582] hover:text-white duration-500 p-1 rounded-md dark:bg-slate-800 dark:hover:hover:bg-[#0eb582] dark:hover:text-slate-800"
                  />
                  <FaTwitter
                    size={34}
                    className="text-[#0eb582] cursor-pointer bg-[#c5f6e2] hover:bg-[#0eb582] hover:text-white duration-500 mx-1 p-1 rounded-md dark:bg-slate-800 dark:hover:hover:bg-[#0eb582] dark:hover:text-slate-800"
                  />
                  <FaInstagram
                    size={34}
                    className="text-[#0eb582] cursor-pointer bg-[#c5f6e2] hover:bg-[#0eb582] hover:text-white duration-500 mx-1 p-1 rounded-md dark:bg-slate-800 dark:hover:hover:bg-[#0eb582] dark:hover:text-slate-800"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularInstructor;
