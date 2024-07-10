/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Nav />
      <div className="flex flex-col items-center justify-center h-full overflow-hidden">
        <h2 className="text-4xl font-bold text-red-600 mb-4 mt-28">
          Having an Emergency?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Press the button below, help will arrive soon
        </p>
        <button className="pulse-button">
          <FontAwesomeIcon icon={faHandPointer} />
        </button>
        <button className="mt-16 bg-white text-red-600 border border-red-600 px-8 py-4 text-lg rounded-lg hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400">
          GO TO DASHBOARD
        </button>
      </div>
    </div>
  );
};

export default Home;
