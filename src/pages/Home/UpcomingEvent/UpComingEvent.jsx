import React from "react";
import { useTrail, animated } from "@react-spring/web";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../../../components/SectionTitle";

// Mock data for the upcoming events
const upcomingEvents = [
    {
      image: 'https://demo.themexbd.com/wpv/talim/wp-content/uploads/2021/04/n2-420x350.jpg',
      title: 'Summer Language Camp',
      description:
        'Join our summer language camp and immerse yourself in a fun and interactive language learning experience. Explore different cultures, improve your language skills, and make lifelong friendships. Experience exciting outdoor activities, engage in language workshops, and create memories that will last a lifetime.',
      time: 'June 20, 2023',
    },
    {
      image: 'https://demo.themexbd.com/wpv/talim/wp-content/uploads/2021/04/n1-420x350.jpg',
      title: 'Cultural Exchange Program',
      description:
        'Experience the rich cultural heritage of various countries in our cultural exchange program this summer. Engage in traditional activities, taste authentic cuisine, and broaden your horizons. Immerse yourself in vibrant festivals, interact with locals, and learn about different customs and traditions.',
      time: 'July 5, 2023',
    },
    {
      image: 'https://demo.themexbd.com/wpv/talim/wp-content/uploads/2021/04/n3-420x350.jpg',
      title: 'International Language Olympiad',
      description:
        'Compete with language enthusiasts from around the world and showcase your linguistic skills in our language Olympiad. Test your knowledge, win exciting prizes, and gain recognition globally. Participate in challenging competitions, engage in interactive language sessions, and connect with like-minded individuals.',
      time: 'August 15, 2023',
    },
  ];

const UpcomingEvent = () => {
  const trail = useTrail(upcomingEvents.length, {
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: { mass: 1, tension: 400, friction: 40 },
  });

  const sliderSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <section className="m dark:bg-slate-900 max-w-5xl mx-auto ">
         <h2 className="text-xl md:text-4xl font-semibold text-center  mb-8 dark:text-gray-400">
          Upcoming Events
        </h2>
      <SectionTitle title="We are optimists who love to work together" />
      <div className="container mx-auto pb-20">

        <Slider {...sliderSettings}>
          {trail.map((style, index) => (
            <animated.div key={index} style={style}>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-4 bg-white dark:bg-gray-900 rounded shadow-lg p-6 relative overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={upcomingEvents[index].image}
                    alt="Event"
                    className="object-cover rounded h-full w-full"
                  />

                </div>
                <div className="ml-0 md:ml-6 my-auto">
                  <h3
                    className="text-2xl font-semibold mb-2 text-gray

-800 dark:text-gray-400"
                  >
                    {upcomingEvents[index].title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {upcomingEvents[index].description}
                  </p>
                  <button className="text-teal-500 dark:text-teal-500 font-semibold hover:underline">
                    Read More
                  </button>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    {upcomingEvents[index].time}
                  </p>
                </div>
              </div>
            </animated.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default UpcomingEvent;
