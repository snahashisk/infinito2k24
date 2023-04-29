import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import teamImage from "../images/image-2.jpg";
import { BiRightArrowAlt } from "react-icons/bi";

const About = () => {
  AOS.init();
  const targetDate = "2023-05-20T12:00:00";
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="lg:h-screen w-full bg-black text-white lg:px-20 px-6 lg:pt-24 font-sans lg:pb-0 pb-6">
      <div className="lg:flex gap-4 pt-16 justify-between">
        <div className="flex flex-col gap-6 items-start" data-aos="fade-up">
          <p className="text-xl text-fuchsia-400 underline underline-offset-8 decoration-fuchsia-800">
            ABOT INFINITO 2K23
          </p>
          <h1 className="lg:text-5xl text-3xl font-bold tracking-wide">
            WELCOME TO THE LARGEST TECHFEST
          </h1>
          <p className="w-3/4 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
            nostrum laudantium ipsa excepturi repudiandae ea pariatur? Voluptas
            nesciunt doloremque, aliquam id incidunt nobis quidem fugiat totam
            maxime, distinctio, est qui.
          </p>
          <button className="px-4 py-2 bg-gradient-to-r from-indigo-700 to-fuchsia-700 rounded-full text-xl flex items-center justify-center">
            Interested
            <BiRightArrowAlt className="text-2xl" />
          </button>
        </div>
        <div
          className="flex items-center justify-center pt-4"
          data-aos="fade-up"
        >
          <img
            src={teamImage}
            alt="some memory"
            className="rounded-lg lg:w-4/5"
          />
        </div>
      </div>
      <div
        className="lg:flex justify-between pt-12 items-center"
        data-aos="fade-up"
      >
        <div className="lg:pb-0 pb-4">
          <h3 className="text-fuchsia-600 pb-2">TECHFEST DATE</h3>
          <p className="text-3xl font-semibold w-2/3">
            COUNT EVERY SECOND UNTIL THE EVENT
          </p>
        </div>
        <div className="flex lg:gap-4 gap-2 lg:w-2/4 justify-around">
          <div className="text-center border-2 lg:p-4 p-2 rounded-md border-gray-500">
            <p className="lg:text-6xl text-4xl font-bold tracking-wide text-gray-300">
              00
            </p>
            <p className="lg:text-xl text-gray-400">Months</p>
          </div>
          <div className="text-center border-2 lg:p-4 p-2 rounded-md border-gray-500">
            <p className="lg:text-6xl text-4xl font-bold tracking-wide text-gray-300">
              00
            </p>
            <p className="lg:text-xl text-gray-400">Days</p>
          </div>
          <div className="text-center border-2 lg:p-4 p-2 rounded-md border-gray-500">
            <p className="lg:text-6xl text-4xl font-bold tracking-wide text-gray-300">
              00
            </p>
            <p className="lg:text-xl text-gray-400">Hours</p>
          </div>
          <div className="text-center border-2 lg:p-4 p-2 rounded-md border-gray-500">
            <p className="lg:text-6xl text-4xl font-bold tracking-wide text-gray-300">
              00
            </p>
            <p className="lg:text-xl text-gray-400">Minutes</p>
          </div>
          <div className="text-center border-2 lg:p-4 p-2 rounded-md border-gray-500">
            <p className="lg:text-6xl text-4xl font-bold tracking-wide text-gray-300">
              00
            </p>
            <p className="lg:text-xl text-gray-400">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
