import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import company1 from "../images/company-1.png";
import ditLogo from "../images/dit-logo.png";
// import company3 from "../images/company-3.png";
// import company4 from "../images/company-4.png";
// import company5 from "../images/company-5.png";
// import company6 from "../images/company-6.png";
// import company7 from "../images/company-7.png";
// import company8 from "../images/company-8.png";
// import company9 from "../images/company-9.png";
// import company10 from "../images/company-10.png";
import cust1 from "../images/image-4.jpg";
import cust2 from "../images/image-3.jpg";
import redbullLogo from "../images/redbull-logo.png";

const Sponsor = () => {
  AOS.init();
  return (
    <div className="w-full bg-slate-950 text-white lg:px-20 px-8 lg:pt-24 pt-8 font-sans pb-16">
      <div className="text-center">
        <p className="text-xl py-4 text-fuchsia-400">PARTNERS & SPONSORS</p>
        <p className="text-5xl font-bold tracking-wide pb-8 text-gray-300">
          OFFICIAL SPONSOR
        </p>
      </div>
      <div className="w-full h-3/4 grid lg:grid-cols-5 lg:grid-rows-2 grid-cols-3 grid-rows-3 items-center justify-center md:pl-12 pb-12">
        <img
          src={company1}
          alt="Our Sponsors"
          className="w-3/4"
          data-aos="fade-up"
        />
        <img
          src={ditLogo}
          alt="Our Sponsors"
          className="w-3/4"
          data-aos="fade-up"
        />
        <img
          src={redbullLogo}
          alt="Our Sponsors"
          className="w-3/4"
          data-aos="fade-up"
        />
        {/* <img
          src={company4}
          alt="Our Sponsors"
          className="w-3/4"
          data-aos="fade-up"
        />
        <img
          src={company5}
          alt="Our Sponsors"
          className="w-3/4"
          data-aos="fade-up"
        />
        <img
          src={company6}
          alt="Our Sponsors"
          className="w-3/4"
          data-aos="fade-up"
        />
        <img
          src={company7}
          alt="Our Sponsors"
          className="w-3/4"
          data-aos="fade-up"
        />
        <img
          src={company8}
          alt="Our Sponsors"
          className="w-3/4"
          data-aos="fade-up"
        />
        <img
          src={company9}
          alt="Our Sponsors"
          className="w-3/4"
          data-aos="fade-up"
        />
        <img
          src={company10}
          alt="Our Sponsors"
          className="w-3/4"
          data-aos="fade-up"
        /> */}
      </div>
      <div className="lg:flex justify-around">
        <div
          className="lg:w-2/5 bg-slate-900 rounded-lg p-8 lg:mb-0 mb-4"
          data-aos="fade-up"
        >
          <p className=" text-gray-200 md:text-xl">
            Dream Institute of Technology is a leading engineering institute in
            India, providing well-equipped labs and advanced learning resources
            to equip students for future challenges in various fields. They aim
            to create an ideal environment for students to optimize their
            potentials and develop a symbiotic relationship between the
            community, society, and the institution.
          </p>
          <div className="pt-6 flex gap-4 items-center">
            <img
              src={cust1}
              alt="customer"
              className="w-16 rounded-full md:w-20"
            />
            <div>
              <p className="text-2xl font-bold text-gray-300 md:text-3xl">
                Dipankar Sarkar
              </p>
              <p className="text-xl text-yellow-400 md:text-2xl">Principal</p>
            </div>
          </div>
        </div>
        <div
          className="lg:w-2/5 bg-slate-900 rounded-lg p-8"
          data-aos="fade-up"
        >
          <p className=" text-gray-200 md:text-xl">
            Dream Institute of Technology provides skill-based industry-driven
            knowledge, encouraging collaboration, active learning, and effective
            learning skills. Discipline is maintained on a priority basis within
            the college campus, while students are encouraged to attend
            regularly and build the habit of attending workplaces punctually.
            The institution aims to fuel the intellectual energies of all its
            students with the support of dedicated faculty members.
          </p>
          <div className="pt-6 flex gap-4 items-center">
            <img
              src={cust2}
              alt="customer"
              className="w-16 md:w-20 rounded-full"
            />
            <div>
              <p className="text-2xl md:text-3xl font-bold text-gray-300">
                Susmita Sarkar
              </p>
              <p className="text-xl md:text-2xl text-yellow-400">Chairperson</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
