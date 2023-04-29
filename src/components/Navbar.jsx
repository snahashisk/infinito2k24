import { useState, useEffect } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import festlogo from "../images/fest-logo-2.png";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToAbout = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollToSpeaker = () => {
    window.scrollTo({
      top: 2 * window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollToEvent = () => {
    window.scrollTo({
      top: 3 * window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollToSponsor = () => {
    window.scrollTo({
      top: 4.65 * window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: 6 * window.innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    console.log(window.innerWidth);
  }, []);

  const navbarClasses = `fixed font-sans z-10 w-full lg:flex justify-around items-center bg-black lg:py-4 py-0 duration-150  ${
    scrollY > 0 ? "bg-opacity-100" : "bg-opacity-50"
  }`;

  return (
    <nav className={navbarClasses}>
      <img
        src={festlogo}
        className="h-16 cursor-pointer my-4 lg:my-0 md:pl-8 pl-8"
        onClick={scrollToTop}
      />
      <div className="lg:visible collapse h-0 lg:h-min">
        <ul className="flex gap-8 text-gray-300 items-center">
          <li
            className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer"
            onClick={scrollToTop}
          >
            HOME
          </li>
          <li
            className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer"
            onClick={scrollToAbout}
          >
            ABOUT
          </li>
          <li
            className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer"
            onClick={scrollToSpeaker}
          >
            SPEAKER
          </li>
          <li
            className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer"
            onClick={scrollToEvent}
          >
            EVENT
          </li>
          <li
            className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer"
            onClick={scrollToSponsor}
          >
            SPONSOR
          </li>
          <li
            className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer"
            onClick={scrollToContact}
          >
            CONTACT
          </li>
          <li>
            <button
              className="bg-yellow-400 text-black py-2 px-6 rounded-full hover:scale-110 duration-150 flex items-center gap-1 hover:shadow-lg font-semibold"
              onClick={scrollToEvent}
            >
              REGISTER NOW
              <BiRightArrowAlt className="text-2xl" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
