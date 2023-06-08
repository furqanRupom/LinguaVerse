import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./HeroCarousel.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const HeroCarousel = () => {
  const images = [
    "https://images.pexels.com/photos/6941091/pexels-photo-6941091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=700&dpr=1",
    "https://img.freepik.com/free-photo/geography-teacher-students-looking-globe_1098-1870.jpg?w=996&t=st=1686085903~exp=1686086503~hmac=b9070ec1699224669e3165f2a01514fc89806acca4597c0c02a67c259d259ff7",
    "https://images.pexels.com/photos/4260325/pexels-photo-4260325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=700&dpr=1",
  ];

  return (
    <div className=" h-[100vh] md:h-[140vh] ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <>
            <SwiperSlide>
              <div
                className="h-full bg-[100%] bg-cover flex items-center justify-start relative"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute  inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/75 "></div>
                <div className=" md:w-3/4 text-left pl-12 z-20">
                  <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl text-white font-bold">
                    Linguistic Superpowers Unleashed
                  </h1>
                  <h1 className="pt-3">
                    <span className="text-[#0eb582] text-lg sm:text-2xl  md:text-4xl lg:text-6xl">
                      {" "}
                      Linguaverse Camp!
                    </span>
                  </h1>

                  <p className="pt-5 text-gray-300 text-sm sm:text-md lg:text-lg">
                    Welcome to Linguaverse's Heroic Language Summer Camp, where
                    language learning becomes an epic adventure! Get ready to
                    embark on a thrilling journey as you explore the world of
                    foreign languages and unlock your linguistic superpowers
                  </p>

                  <div className="mt-7">
                    <button className="p-2 sm:px-5 sm:py-2 md:px-7  md:py-4 sm:text-xl font-semibold text-white bg-[#0eb582] duration-500 hover:text-[#0eb582] hover:bg-white">
                      Start Trial
                    </button>
                    <button className=" p-2 sm:px-5 sm:py-2 md:px-7 md:py-4  md:ml-5 sm:text-xl ml-3 font-semibold bg-white text-[#0eb582]  hover:text-white hover:bg-[#0eb582] duration-500">
                      View Classes
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
