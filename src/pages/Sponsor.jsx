import React from "react";
import company1 from "../images/company-1.png";
import company2 from "../images/company-2.png";
import company3 from "../images/company-3.png";
import company4 from "../images/company-4.png";
import company5 from "../images/company-5.png";
import company6 from "../images/company-6.png";
import company7 from "../images/company-7.png";
import company8 from "../images/company-8.png";
import company9 from "../images/company-9.png";
import company10 from "../images/company-10.png";
import cust1 from "../images/image-4.jpg";
import cust2 from "../images/image-3.jpg";
const Sponsor = () => {
  return (
    <div className="w-full bg-slate-950 text-white px-20 pt-24 font-sans pb-16">
      <div className="text-center">
        <p className="text-xl py-4 text-fuchsia-400">PARTNERS & SPONSORS</p>
        <p className="text-5xl font-bold tracking-wide pb-8 text-gray-300">
          OFFICIAL SPONSOR
        </p>
      </div>
      <div className="w-full h-3/4 grid grid-cols-5 grid-rows-2 items-center justify-center pb-12">
        <img src={company1} alt="Our Sponsors" className="w-3/4" />
        <img src={company2} alt="Our Sponsors" className="w-3/4" />
        <img src={company3} alt="Our Sponsors" className="w-3/4" />
        <img src={company4} alt="Our Sponsors" className="w-3/4" />
        <img src={company5} alt="Our Sponsors" className="w-3/4" />
        <img src={company6} alt="Our Sponsors" className="w-3/4" />
        <img src={company7} alt="Our Sponsors" className="w-3/4" />
        <img src={company8} alt="Our Sponsors" className="w-3/4" />
        <img src={company9} alt="Our Sponsors" className="w-3/4" />
        <img src={company10} alt="Our Sponsors" className="w-3/4" />
      </div>
      <div className="flex justify-around">
        <div className="w-2/5 bg-slate-900 rounded-lg p-8">
          <p className=" text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            quibusdam iste reprehenderit beatae fuga voluptatum, omnis eum. Nam
            dolores provident, officia tempore quas quod, porro laudantium
            molestiae, at explicabo quisquam!
          </p>
          <div className="pt-6 flex gap-4">
            <img src={cust1} alt="customer" className="w-16 rounded-full" />
            <div>
              <p className="text-2xl font-bold text-gray-300">
                Dipankar Sarkar
              </p>
              <p className="text-xl text-yellow-400">Principal</p>
            </div>
          </div>
        </div>
        <div className="w-2/5 bg-slate-900 rounded-lg p-8 ">
          <p className=" text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            quibusdam iste reprehenderit beatae fuga voluptatum, omnis eum. Nam
            dolores provident, officia tempore quas quod, porro laudantium
            molestiae, at explicabo quisquam!
          </p>
          <div className="pt-6 flex gap-4">
            <img src={cust2} alt="customer" className="w-16 rounded-full" />
            <div>
              <p className="text-2xl font-bold text-gray-300">Susmita Sarkar</p>
              <p className="text-xl text-yellow-400">Chairperson</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
