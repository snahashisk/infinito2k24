import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import event1 from "../images/image-7.jpg";
import event2 from "../images/image-8.jpg";
import event3 from "../images/image-9.jpg";
import event4 from "../images/image-10.jpg";
import event5 from "../images/image-11.jpg";

const Event = () => {
  AOS.init();
  return (
    <div className="lg:min-h-screen w-full bg-black text-white lg:px-20 px-8 lg:pb-0 pb-8 lg:pt-24 pt-16 font-sans">
      <div className="text-center">
        <p className="text-xl py-4 text-fuchsia-400">OUR EVENTS</p>
        <h2 className="text-5xl font-bold tracking-wide pb-8">
          OFFLINE EVENTS
        </h2>
      </div>
      <div className="lg:flex md:flex justify-around flex-wrap lg:gap-4 gap-2">
        <div
          className="lg:w-2/6 md:w-2/5 bg-slate-950 overflow-hidden"
          data-aos="fade-up"
        >
          <img src={event1} alt="event" />
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
          className="lg:w-2/6 md:w-2/5 bg-slate-950 overflow-hidden"
          data-aos="fade-up"
        >
          <img src={event2} alt="event" />
          <div className="py-6 px-6 flex flex-col gap-2">
            <div className="flex h-6 gap-4 items-center">
              <p className="bg-green-600 w-min px-4 rounded-full">FREE</p>
              <p className="bg-purple-600 px-4 rounded-full">
                Only For DIT Students
              </p>
            </div>
            <p className="text-2xl font-bold">BGMI Contest</p>
            <p className="text-gray-300">
              Join the ultimate gaming battle with BGMI Mobile Gaming Contest!
              Compete with players from all over and prove your skills in the
              virtual battlegrounds. Win big prizes, fame, and glory! Don't
              wait, register now and show the world what you're made of.
            </p>
            <button className="bg-yellow-400 text-black mt-4 py-2 rounded-md">
              Register here
            </button>
          </div>
        </div>

        <div
          className="lg:w-1/4 md:w-2/5 bg-slate-950 overflow-hidden"
          data-aos="fade-up"
        >
          <img src={event3} alt="event" />
          <div className="py-6 px-6 flex flex-col gap-2">
            <div className="flex h-6 gap-4 items-center">
              <p className="bg-green-600 w-min px-4 rounded-full">FREE</p>
              <p className="bg-purple-600 px-4 rounded-full">
                Only For DIT Students
              </p>
            </div>
            <p className="text-2xl font-bold">Machine Learning Seminar</p>
            <p className="text-gray-300">
              Unlock the power of Machine Learning with our seminar! Join us and
              learn from the experts as we explore the latest trends, tools, and
              techniques in ML. Discover how ML is transforming industries and
              how you can leverage it for your business. Register now and take
              the first step towards mastering ML.
            </p>
            <button className="bg-yellow-400 text-black mt-4 py-2 rounded-md">
              Register here
            </button>
          </div>
        </div>

        <div
          className="lg:w-1/4 md:w-2/5 bg-slate-950 overflow-hidden"
          data-aos="fade-up"
        >
          <img src={event4} alt="event" />
          <div className="py-6 px-6 flex flex-col gap-2">
            <div className="flex h-6 gap-4 items-center">
              <p className="bg-green-600 w-min px-4 rounded-full">FREE</p>
              <p className="bg-purple-600 px-4 rounded-full">
                Only For DIT Students
              </p>
            </div>
            <p className="text-2xl font-bold">3D Printing Seminar</p>
            <p className="text-gray-300">
              Step into the world of 3D Printing with our Seminar! Join us and
              discover the endless possibilities of this revolutionary
              technology. Learn from the experts and explore the latest trends,
              tools, and techniques in 3D Printing. Whether you're a beginner or
              an expert, this seminar is for you! Register now and take the
              first step towards unleashing your creativity with 3D Printing.
            </p>
            <button className="bg-yellow-400 text-black mt-4 py-2 rounded-md">
              Register here
            </button>
          </div>
        </div>

        <div
          className="lg:w-2/6 md:w-2/5 bg-slate-950 overflow-hidden"
          data-aos="fade-up"
        >
          <img src={event5} alt="event" />
          <div className="py-6 px-6 flex flex-col gap-2">
            <div className="flex h-6 gap-4 items-center">
              <p className="bg-green-600 w-min px-4 rounded-full">FREE</p>
              <p className="bg-purple-600 px-4 rounded-full">
                Only For DIT Students
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
            <button className="bg-yellow-400 text-black mt-4 py-2 rounded-md">
              Register here
            </button>
          </div>
        </div>

        <div
          className="lg:w-2/6 md:w-2/5 bg-slate-950 overflow-hidden"
          data-aos="fade-up"
        >
          <img src={event3} alt="event" />
          <div className="py-6 px-6 flex flex-col gap-2">
            <div className="flex h-6 gap-4 items-center">
              <p className="bg-green-600 w-min px-4 rounded-full">FREE</p>
              <p className="bg-purple-600 px-4 rounded-full">
                Only For DIT Students
              </p>
            </div>
            <p className="text-2xl font-bold">Photography Contest</p>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos illum iste veniam mollitia vero obcaecati officiis
              eligendi fugiat est, iure reiciendis temporibus rerum tenetur
              laudantium debitis voluptate id suscipit hic!
            </p>
            <button className="bg-yellow-400 text-black mt-4 py-2 rounded-md">
              Register here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
