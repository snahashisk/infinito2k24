import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-2/3 bg-slate-950 px-20 py-8  font-sans text-white grid grid-cols-4 grid-rows-1">
      <div className="col-span-1 row-span-1 flex flex-col gap-4 px-4">
        <h1 className="text-3xl font-bold">INFINITO</h1>
        <p className="text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          voluptatem incidunt iste veniam inventore mollitia maxime laudantium
          obcaecati fuga sit?
        </p>
        <div>Logos</div>
      </div>
      <div className="col-span-1 row-span-1 px-4 flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-slate-100">Workshops</h1>
        <p className="text-slate-400">Machine Learning</p>
        <p className="text-slate-400">3D Printing</p>
        <p className="text-slate-400">Competitive Coding</p>
        <p className="text-slate-400">Matlab Hands On</p>
      </div>
      <div className="col-span-1 row-span-1 px-4 flex flex-col gap-2">
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
      <div className="col-span-1 row-span-1 px-4 flex flex-col gap-4 items-start">
        <p className="text-2xl font-bold text-slate-100">
          Subscribe Newsletter
        </p>
        <p className="text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, est!
        </p>
        <input
          type="email"
          className="bg-slate-800 outline-none rounded-md w-3/4 px-2 py-1"
        />
        <button className="px-4 py-2 bg-yellow-400 rounded-md text-gray-800 font-medium">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default Footer;
