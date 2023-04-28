import React from "react";

const Card = ({ name, designation, image, place }) => {
  return (
    <div className="w-1/5 h-full flex flex-col gap-2">
      <img
        src={image}
        alt="Principal"
        className="rounded-lg w-full pb-5 rounded-b-lg"
      />
      <p className="text-3xl text-yellow-500 font-bold">{name}</p>
      <p className="text-xl text-white">
        {designation} <span className="text-gray-400">{place}</span>
      </p>
    </div>
  );
};

export default Card;
