import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import event1 from "../images/image-7.jpg";
import event3 from "../images/image-9.jpg";
import event4 from "../images/image-10.jpg";
import codingBanner from "../images/coding-banner.png";
import quizBanner from "../images/quiz-banner.png";
import bgmiBanner from "../images/bgmi-banner.png";
import photoBanner from "../images/photo-banner.png";

const Event = () => {
  AOS.init();
  return (
    <div className="lg:min-h-screen w-full bg-black text-white lg:px-20 px-8 pb-8 lg:pt-24 pt-8 font-sans ">
      <div className="text-center">
        <p className="text-xl py-4 text-fuchsia-400">OUR EVENTS</p>
        <h2 className="text-5xl font-bold tracking-wide pb-8">
          OFFLINE EVENTS
        </h2>
      </div>
      <div className="lg:flex md:flex justify-around flex-wrap lg:gap-4 gap-2">
        <div
          className="lg:w-2/6 md:w-2/5 bg-slate-900 overflow-hidden lg:mb-0 mb-4 rounded-lg"
          data-aos="fade-up"
        >
          <img src={photoBanner} alt="event" />
          <div className="py-6 px-6 flex flex-col gap-2">
            <div className="flex h-6 gap-4 items-center">
              <p className="bg-red-600 w-min px-4 rounded-full">PAID</p>
              <p className="bg-blue-600 px-4 rounded-full">Open For All</p>
            </div>
            <p className="text-2xl font-bold">Photography Contest</p>
            <p className="text-gray-300">
              Hey there! Are you passionate about mobile photography? If yes,
              then we've got the perfect opportunity for you! Join the
              FlashFiesta Mobile Photography Contest and showcase your talent to
              the world. Simply capture stunning shots using your smartphone's
              flash and stand a chance to win big.
            </p>
            <button
              className="bg-yellow-400 text-black mt-4 py-2 rounded-md"
              onClick={() =>
                window.open("https://forms.gle/xDKUna9HhdM3qftb7", "_blank")
              }
            >
              Register here
            </button>
          </div>
        </div>

        <div
          className="lg:w-2/6 md:w-2/5 bg-slate-900 overflow-hidden lg:mb-0 mb-4 rounded-lg"
          data-aos="fade-up"
        >
          <img src={bgmiBanner} alt="event" />
          <div className="py-6 px-6 flex flex-col gap-2">
            <div className="flex h-6 gap-4 items-center">
              <p className="bg-green-600 w-min px-4 rounded-full">FREE</p>
              <p className="bg-purple-600 px-4 rounded-full">
                DIT Students Only
              </p>
            </div>
            <p className="text-2xl font-bold">BGMI Tournament</p>
            <p className="text-gray-300">
              Join the BGMI Mobile Gaming Contest and face off against players
              worldwide in the ultimate gaming battle. Showcase your virtual
              battleground skills and stand a chance to win huge prizes, fame,
              and glory. Register now to prove yourself and seize the
              opportunity to make a mark in the gaming world.
            </p>
            <button
              className="bg-yellow-400 text-black mt-4 py-2 rounded-md"
              onClick={() =>
                window.open("https://forms.gle/LeNZmkRkyWEcYrfh9", "_blank")
              }
            >
              Register here
            </button>
          </div>
        </div>

        <div
          className="lg:w-1/4 md:w-2/5 bg-slate-900 overflow-hidden lg:mb-0 mb-4 rounded-lg"
          data-aos="fade-up"
        >
          <img src={event3} alt="event" />
          <div className="py-6 px-6 flex flex-col gap-2">
            <div className="flex h-6 gap-4 items-center">
              <p className="bg-green-600 w-min px-4 rounded-full">FREE</p>
              <p className="bg-purple-600 px-4 rounded-full">
                DIT Students Only
              </p>
            </div>
            <p className="text-2xl font-bold">Machine Learning Seminar</p>
            <p className="text-gray-300">
              Discover the latest trends, tools, and techniques in Machine
              Learning (ML) and how it's transforming industries. Learn from the
              experts and unlock the power of ML for your business by joining
              our seminar. Take the first step towards mastering ML and register
              now to gain valuable insights.
            </p>
            <button
              className="bg-yellow-400 text-black mt-4 py-2 rounded-md"
              onClick={() =>
                window.open("https://forms.gle/KGnTyY4th43HooeUA", "_blank")
              }
            >
              Register here
            </button>
          </div>
        </div>

        <div
          className="lg:w-1/4 md:w-2/5 bg-slate-900 overflow-hidden lg:mb-0 mb-4 rounded-lg"
          data-aos="fade-up"
        >
          <img src={event4} alt="event" />
          <div className="py-6 px-6 flex flex-col gap-2">
            <div className="flex h-6 gap-4 items-center">
              <p className="bg-green-600 w-min px-4 rounded-full">FREE</p>
              <p className="bg-purple-600 px-4 rounded-full">
                DIT Students Only
              </p>
            </div>
            <p className="text-2xl font-bold">3D Printing Seminar</p>
            <p className="text-gray-300">
              Join our seminar to discover 3D Printing's revolutionary
              technology and explore its limitless possibilities. Learn from
              industry experts about the latest trends, tools, and techniques.
              Register now to unlock your creativity.
            </p>
            <button
              className="bg-yellow-400 text-black mt-4 py-2 rounded-md"
              onClick={() =>
                window.open("https://forms.gle/KFRxZPsaVzfCMZ538", "_blank")
              }
            >
              Register here
            </button>
          </div>
        </div>

        <div
          className="lg:w-2/6 md:w-2/5 bg-slate-900 overflow-hidden lg:mb-0 mb-4 rounded-lg"
          data-aos="fade-up"
        >
          <img src={codingBanner} alt="event" />
          <div className="py-6 px-6 flex flex-col gap-2">
            <div className="flex h-6 gap-4 items-center">
              <p className="bg-green-600 w-min px-4 rounded-full">FREE</p>
              <p className="bg-purple-600 px-4 rounded-full">
                DIT Students Only
              </p>
            </div>
            <p className="text-2xl font-bold">HackHive Coding Contest</p>
            <p className="text-gray-300">
              Calling all coders! Join the ultimate coding challenge with
              HackHive! Compete with the best and showcase your coding skills to
              the world. Solve real-world problems, win big prizes, and gain
              recognition. Don't wait, register now and show us what you're made
              of.
            </p>
            <button
              className="bg-yellow-400 text-black mt-4 py-2 rounded-md"
              onClick={() =>
                window.open("https://forms.gle/xphLpCXn4NbosuNC8", "_blank")
              }
            >
              Register here
            </button>
          </div>
        </div>

        <div
          className="lg:w-2/6 md:w-2/5 bg-slate-900 overflow-hidden lg:mb-0 mb-4 rounded-lg"
          data-aos="fade-up"
        >
          <img src={quizBanner} alt="event" />
          <div className="py-6 px-6 flex flex-col gap-2">
            <div className="flex h-6 gap-4 items-center">
              <p className="bg-green-600 w-min px-4 rounded-full">FREE</p>
              <p className="bg-purple-600 px-4 rounded-full">
                DIT Students Only
              </p>
            </div>
            <p className="text-2xl font-bold">Technical Quiz</p>
            <p className="text-gray-300">
              Attention all students! We invite you to join our technical quiz
              event and put your knowledge to the test for a chance to win
              exciting prizes. Don't miss this opportunity to challenge yourself
              and showcase your skills in the dynamic world of technology.
              Register now!
            </p>
            <button
              className="bg-yellow-400 text-black mt-4 py-2 rounded-md"
              onClick={() =>
                window.open("https://forms.gle/hxXCowGS7nPQxbit5", "_blank")
              }
            >
              Register here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
