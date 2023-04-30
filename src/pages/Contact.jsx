import React from "react";

const Contact = () => {
  return (
    <div className="pb-20 w-full bg-black text-white lg:px-20 px-8 lg:pt-16 pt-8 font-sans">
      <div className="text-center">
        <p className="text-xl py-4 text-fuchsia-400">HAVE QUESTION?</p>
        <p className="text-5xl font-bold tracking-wide pb-8 text-gray-300">
          CONTACT US
        </p>
      </div>
      <div className="lg:flex justify-around">
        <div className="flex lg:gap-2 flex-col lg:w-1/3">
          <div className="lg:py-2 py-1">
            <h2 className="text-gray-400">Address:</h2>
            <p className="text-xl text-gray-300">
              Thakurpukur, Samali, B.H Road Kolkata : 700104 West Bengal, India
            </p>
          </div>
          <div className="lg:py-2 py-1">
            <h2 className="text-gray-400">Phone:</h2>
            <p className="text-xl text-gray-300">
              (+91) 8637365730, (+91) 8017812721
            </p>
          </div>
          <div className="lg:py-2 py-1">
            <h2 className="text-gray-400">Email:</h2>
            <p className="text-xl text-gray-300">
              dit.infinitoofficial@gmail.com
            </p>
          </div>
          <div className="lg:py-2 py-1">
            <h2 className="text-gray-400">Website:</h2>
            <p className="text-xl text-gray-300">
              www.dreaminstituteonline.com
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-8 bg-slate-900 lg:w-3/5 lg:p-12 p-8 rounded-lg">
          <div className="w-full flex gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="py-2 w-1/2 bg-slate-900 border-b-2 border-slate-400 outline-none focus:border-slate-300 duration-150"
            />
            <input
              type="text"
              placeholder="Your Last Name"
              className="py-2 w-1/2 bg-slate-900 border-b-2 border-slate-400 outline-none focus:border-slate-300 duration-150"
            />
          </div>
          <div className="w-full flex gap-4">
            <input
              type="text"
              placeholder="Your E-main"
              className="py-2 w-1/2 bg-slate-900 border-b-2 border-slate-400 outline-none focus:border-slate-300 duration-150"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="py-2 w-1/2 bg-slate-900 border-b-2 border-slate-400 outline-none focus:border-slate-300 duration-150"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="py-4 w-full bg-slate-900 border-b-2 border-slate-400 outline-none focus:border-slate-300 duration-150"
          />
          <button className="px-4 py-2 bg-gradient-to-r from-indigo-700 to-fuchsia-700 rounded-full flex items-center justify-center">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
