import React from "react";

const Footer = () => {
  return (
    <div className="w-full lg:h-2/3 bg-slate-950 lg:px-20 px-8 py-8  font-sans text-white lg:grid lg:grid-cols-4 lg:grid-rows-1 flex flex-col gap-4">
      <div className="col-span-1 row-span-1 flex flex-col gap-4 px-4">
        <h1 className="text-3xl font-bold">
          INFINITO <span className="text-yellow-400">2K23</span>
        </h1>
        <p className="text-slate-400">
          Our fest offers a platform for young talents to showcase their skills
          and compete in diverse events.
        </p>
        <div>Logos</div>
      </div>
      <div className="lg:col-span-1 lg:row-span-1 col-span-1 row-span-1 px-4 flex flex-col lg:gap-2">
        <h1 className="text-2xl font-bold text-slate-100">Workshops</h1>
        <p className="text-slate-400">Machine Learning</p>
        <p className="text-slate-400">3D Printing</p>
        <p className="text-slate-400">Competitive Coding</p>
        <p className="text-slate-400">Matlab Hands On</p>
      </div>
      <div className="lg:col-span-1 col-span-2 row-span-1 px-4 flex flex-col lg:gap-2 gap-1">
        <h1 className="text-2xl font-bold text-slate-100">Contact</h1>
        <p className="text-slate-400">
          Thakurpukur, Samali, B.H Road Kolkata : 700104
        </p>
        <p className="text-slate-400">033 24980376</p>
        <p className="text-slate-400">
          dream_institute_of_technology@hotmail.com
        </p>
        <p className="text-slate-400">www.dreaminstituteonline.com</p>
      </div>
      <div className="lg:col-span-1 col-span-2 row-span-1 px-4 flex flex-col lg:gap-4 gap-2 items-start">
        <p className="text-2xl font-bold text-slate-100">
          Subscribe Newsletter
        </p>
        <p className="text-slate-400">
          Subscribe to our newsletter to get notified first about important
          events.
        </p>
        <input
          type="email"
          className="bg-slate-800 outline-none rounded-md lg:w-3/4 w-full px-2 py-1"
        />
        <button className="lg:px-4 lg:py-2 px-2 py-1  bg-yellow-400 rounded-md text-gray-800 font-medium">
          SUBSCRIBE
        </button>
      </div>
      <p className="pt-2 px-4 col-span-4 border-t-2 border-gray-500 text-sm text-gray-400">
        Copyright ©2023 All rights reserved | This website is designed and
        developed by{" "}
        <span
          className="text-fuchsia-400 cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/snahashis-kanrar-023804212/",
              "_blank"
            )
          }
        >
          Snahashis Kanrar
        </span>
      </p>
    </div>
  );
};

export default Footer;
