import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { FaArrowRight } from "react-icons/fa6";

const Timeline = () => {
  return (
    <div className="bg-slate-950 font-sans pt-4 flex-col flex items-center">
      <div className="text-center">
        <p className="text-xl py-4 text-fuchsia-400">KNOW OUR SCHEDULE</p>
        <p className="text-5xl font-bold tracking-wide pb-8 text-white">
          EVENT TIMELINE
        </p>
      </div>
      <ol class="relative border-s border-gray-200 dark:border-gray-700 w-3/5">
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 4th 2024 10:00am
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-yellow-400">
            Event Inauguration
          </h3>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
          <a
            href="/"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Learn more <FaArrowRight className="ml-2" />
          </a>
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 4th 2024 11:00am
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-yellow-400">
            Seminar on Matlab / Logo Making
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-300">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li class="ms-4 mb-10">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 4th 2024 12:30pm
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-yellow-400">
            Coding Contest
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-300 mb-4">
            Join us for our college's annual cultural fest featuring an exciting
            coding contest! Showcase your programming skills, compete with
            peers, and enjoy a fun-filled event. Everyone is welcome to
            participate. Don't miss out!
          </p>
          <a
            href="/"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Register Now
            <FaArrowRight className="ml-2" />
          </a>
        </li>
        <li class="ms-4 mb-10">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 4th 2024 2:40pm
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-yellow-400">
            Seminar on Open Source
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-300">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
        <li class="ms-4 mb-10">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 4th 2024 03:50pm
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-yellow-400">
            BGMI Tournaments
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-300 mb-4">
            Gear up for action-packed BGMI tournaments! Show your gaming skills,
            compete for glory, and enjoy a day of intense gameplay and
            camaraderie.
          </p>
          <a
            href="/"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Register Now
            <FaArrowRight className="ml-2" />
          </a>
        </li>

        <li class="ms-4 mb-10">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 4th 2024 05:20pm
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-yellow-400">
            DJ Show
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-300">
            Get ready to dance the night away at our electrifying DJ show!
            Experience an unforgettable evening of music, lights, and
            high-energy performances
          </p>
        </li>

        <li class="ms-4 mb-10">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 5th 2024 10:00am
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-yellow-400">
            Uncharted
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-300 mb-4">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
          <a
            href="/"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Register Now
            <FaArrowRight className="ml-2" />
          </a>
        </li>
        <li class="ms-4 mb-10">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 5th 2024 12:00pm
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-yellow-400">
            Dream It Live it
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-300 mb-4">
            Pitch your business ideas at 'Dream It Live It'! Compete with
            innovative minds, present your concepts, and stand a chance to turn
            your dreams into reality.
          </p>
          <a
            href="/"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Register Now
            <FaArrowRight className="ml-2" />
          </a>
        </li>
        <li class="ms-4 mb-10">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 5th 2024 02:30pm
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-yellow-400">
            Drama Performance
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-300">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
        <li class="ms-4 mb-10">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 5th 2024 05:00pm
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-yellow-400">
            Performance By TRAP
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-300 mb-4">
            End the fest on a high note with a live performance by TRAP! Enjoy a
            spectacular show filled with music, energy, and unforgettable
            moments. Grab your tickets now!
          </p>
          <a
            href="/"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Buy Tickets
            <FaArrowRight className="ml-2" />
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Timeline;
