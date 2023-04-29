import { useState, useEffect } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import festlogo from "../images/fest-logo-2.png";
const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `fixed font-sans z-10 w-full flex justify-around items-center bg-black ${
    scrollY > 0 ? " bg-opacity-100" : " bg-opacity-50"
  } duration-150 hover:bg-opacity-100 ${scrollY > 0 ? "py-4" : "py-6"}`;
  return (
    <nav className={navbarClasses}>
      <img src={festlogo} className="h-16" />
      <div>
        <ul className="flex gap-8 text-gray-300 items-center">
          <li className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer">
            HOME
          </li>
          <li className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer">
            SPEAKER
          </li>
          <li className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer">
            EVENT
          </li>
          <li className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer">
            SCHEDULE
          </li>
          <li className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer">
            SPONSOR
          </li>
          <li className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer">
            CONTACT
          </li>
          <li>
            <button
              className="bg-yellow-400 text-black py-2 px-6 rounded-full hover:scale-110 duration-150 flex items-center gap-1 hover:shadow-lg font-semibold"
              onClick={() =>
                window.open("https://forms.gle/xDKUna9HhdM3qftb7", "_blank")
              }
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
