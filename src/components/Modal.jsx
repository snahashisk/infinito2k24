import React, { useState } from "react";
import { FaTimes, FaWhatsapp } from "react-icons/fa";
import singerPhoto from "../images/singerPhoto.jpg";

function Modal() {
  const [isShown, setIsShown] = useState(true);

  const handleClose = () => {
    setIsShown(false);
  };

  const openWhatsapp = () => {
    const number = "+918905671436";
    const message = encodeURIComponent(
      "Hi, I'm interested in attending the Snigdhajit Bhowmik music concert at INFINITO 2k23. Can you please let me know if tickets are still available and how much they cost? Thank you."
    );
    const url = `https://wa.me/${number}?text=${message}`;
    window.open(url, "_blank");
    setIsShown(false);
  };

  return (
    isShown && (
      <>
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"></div>
        <div className="bg-white fixed lg:w-1/3 lg:top-32 top-1/4 lg:right-1/3 mx-4 rounded-md shadow-lg z-50 ">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={handleClose}
          >
            <FaTimes className="text-gray-200 text-xl bg-black" />
          </button>
          <div>
            <div className="w-full overflow-hidden p-0 m-0">
              <img
                src={singerPhoto}
                alt="Singdhajit Bhowmick"
                className="h-1/6 p-0 m-0"
              />
            </div>

            <div className="bg-black text-gray-200 p-0 text-center pt-4 flex flex-col gap-2">
              <h1 className="text-yellow-400">INFINITO MUSIC CONCERT</h1>
              <h2 className="text-4xl font-semibold">
                Hi I Am{" "}
                <span className="text-fuchsia-400">Snigdhajit Bhowmik. </span>
              </h2>
              <h2 className="text-2xl">I Am Coming to DIT</h2>
              <p className="text-gray-300 px-8 pb-4">
                INFINITO 2k23 presents Snigdhajit Bhowmik live in concert! Get
                ready to immerse yourself in the soulful music of one of the
                finest singers in the country. Join us for an unforgettable
                night filled with rhythm and melody.
              </p>
              <button
                className="bg-yellow-400 text-black py-3 text-xl font-semibold w-full flex justify-center items-center gap-2"
                onClick={openWhatsapp}
              >
                Enquiry For Ticket{" "}
                <FaWhatsapp className="text-green-800 text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Modal;
