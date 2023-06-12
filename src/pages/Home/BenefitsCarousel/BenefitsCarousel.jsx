import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLanguage } from "react-icons/gr";
import { SiConvertio } from "react-icons/si";
import { MdLanguage, MdOutlineCameraOutdoor } from "react-icons/md";
import { TbAlignBoxBottomCenterFilled } from "react-icons/tb";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import "./BenefitsCarousel.css";
import SectionTitle from "../../../components/SectionTitle";
const BenefitsCarousel = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next slide every 3 seconds
      slider.slickNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
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
  };

  let slider;

  return (
    <div className=" left-0 right-0 -mt-48    w-full max-w-[90rem] mx-auto flex items-center justify-center overflow-hidden">
      <div className="bg-white dark:bg-slate-900 dark:text-gray-400 z-20 shadow-lg rounded-lg px-5 py-12">
        <div className="text-center p-12">
        <SectionTitle title="Our School facilities" />
          <p className="  md:text-xl">
            Revel in the Bountiful Benefits of Our Education Program
          </p>
        </div>
        <div className="max-w-7xl mx-auto text-2xl text-center py-12">
          <Slider {...settings} ref={(c) => (slider = c)}>
            <div className="px-4">
              <div className="shadow-lg bg-white rounded-lg dark:bg-slate-900 h-48 p-4 dark:shadow-xl">
                <h3 className="text-[#0eb582] text-6xl  mb-4 font-bold ">
                  <MdLanguage />
                </h3>
                <h2 className="font-bold">Language Labs</h2>
                <h3 className="text-[#0eb582] font-bold">15 classes</h3>
              </div>
            </div>
            <div className="px-4">
              <div className="shadow-lg bg-white rounded-lg dark:bg-slate-900 h-48 p-4 dark:shadow-xl">
                <h3 className="text-[#0eb582] text-6xl  mb-4 font-bold">
                  <SiConvertio />
                </h3>
                <h2 className="font-bold">Conversation Corners</h2>
                <h3 className="text-[#0eb582] font-bold">5 classes</h3>
              </div>
            </div>
            <div className="px-4">
              <div className="shadow-lg bg-white rounded-lg dark:bg-slate-900 h-48 p-4 dark:shadow-xl">
                <h3 className="text-[#0eb582] text-6xl  mb-4 font-bold">
                  <MdOutlineCameraOutdoor />
                </h3>
                <h2 className="font-bold">Outdoor Conversation Areas</h2>
                <h3 className="text-[#0eb582] font-bold">12 classes</h3>
              </div>
            </div>
            <div className="px-4">
              <div className="shadow-lg bg-white rounded-lg dark:bg-slate-900 h-48 p-4 dark:shadow-xl">
                <h3 className="text-[#0eb582] text-6xl  mb-4 font-bold">
                  <TbAlignBoxBottomCenterFilled />
                </h3>
                <h2 className="font-bold">Cultural Center</h2>
                <h3 className="text-[#0eb582] font-bold">27 classes</h3>
              </div>
            </div>
            <div className="px-4">
              <div className="shadow-lg bg-white rounded-lg dark:bg-slate-900 h-48 p-4 dark:shadow-xl">
                <h3 className="text-[#0eb582] text-6xl  mb-4 font-bold">
                  <FaAmericanSignLanguageInterpreting />
                </h3>
                <h2 className="font-bold">Global Language Swap</h2>
                <h3 className="text-[#0eb582] font-bold">29 classes</h3>
              </div>
            </div>
            <div className="px-4">
              <div className="shadow-lg bg-white rounded-lg dark:bg-slate-900 h-48 p-4 dark:shadow-xl">
                <h3 className="text-[#0eb582] text-6xl  mb-4 font-bold">
                  <SiGoogleclassroom />
                </h3>
                <h2 className="font-bold">Multimedia Classrooms</h2>
                <h3 className="text-[#0eb582] font-bold">31 classes</h3>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCarousel;
