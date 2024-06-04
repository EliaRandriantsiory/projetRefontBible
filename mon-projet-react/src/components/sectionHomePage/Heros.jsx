import React, { useState } from "react";
import "../../styles/_section.scss";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="section  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center">
        <div className="w-1/2 pr-8">
          <img
            src="https://via.placeholder.com/500x400"
            alt="Hero"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-1/2 text-right">
          <h2
            className={`text-3xl font-extrabold text-gray-900 mb-8 transition-transform duration-500 ${
              isHovered
                ? "transform translate-y-[-10px]"
                : "transform translate-y-0"
            }`}
          >
            Welcome to My App
          </h2>
          <p
            className={`text-lg text-gray-500 mb-8 transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-70"
            }`}
          >
            Discover the power of our amazing app.
          </p>
          <div className="flex justify-end space-x-4">
            <Link to="login">
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 ${
                  isHovered
                    ? "scale-110 shadow-lg hover:shadow-2xl"
                    : "scale-100 shadow-md hover:shadow-xl"
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Sign In
              </button>
            </Link>
            <Link to="register">
              <button
                className={`bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded border border-blue-500 transition-all duration-300 ${
                  isHovered
                    ? "scale-110 shadow-lg hover:shadow-2xl"
                    : "scale-100 shadow-md hover:shadow-xl"
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
