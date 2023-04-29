import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import princi from "../images/image-4.jpg";
import chairperson from "../images/image-3.jpg";
import studnetCo from "../images/image-5.jpeg";
import annie from "../images/image-6.jpg";
import Card from "../components/Card";
import { BiRightArrowAlt } from "react-icons/bi";

const Speaker = () => {
  AOS.init();
  return (
    <div className="lg:h-screen w-full bg-slate-950 text-white px-20 pt-24 font-sans flex flex-col item-center">
      <div className="text-center">
        <p className="text-xl py-4 text-fuchsia-400">OUR SPEAKINGS</p>
        <p className="text-5xl font-bold tracking-wide pb-8">WHO’S SPEAKING</p>
      </div>
      <div className="lg:flex lg:justify-around pb-16" data-aos="fade-up">
        <Card
          name="Dipankar Sarkar"
          designation="PRINCIPAL"
          place="@dit"
          image={princi}
        />
        <Card
          name="Susmita Sarkar"
          designation="CHAIRPERSON"
          place="@dit"
          image={chairperson}
        />
        <Card
          name="Anindita Mukherjee"
          designation="CSE HOD"
          place="@dit"
          image={annie}
        />
        <Card
          name="Dipankar Sarkar"
          designation="PRINCIPAL"
          place="@dit"
          image={princi}
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="text-center py-2 px-6 border-2 rounded-full text-yellow-400 border-yellow-400 flex items-center gap-2 hover:text-gray-300 hover:border-gray-400 duration-100 ">
          VIEW ALL SPEAKERS
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
};

export default Speaker;
