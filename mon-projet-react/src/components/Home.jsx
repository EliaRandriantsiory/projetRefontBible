import React, { useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("username")) {
      navigate("/session");
    }
  }, []);

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="bg-red-100">
        <Outlet />
      </div>

      {/* <HeroSection />
      <FeaturesSection /> */}
      {/* <Footer /> */}
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Feature 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FeatureCard
            title="Feature 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FeatureCard
            title="Feature 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </section>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed  top-0 left-0 w-full bg-gray-800 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white hover:text-gray-400 font-bold text-xl"
            >
              My App
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="about"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                A propos
              </Link>
              <Link
                to="/features"
                className="text-white-500 hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="text-white-500 hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Pricing
              </Link>
              <Link
                to="contact"
                className="text-white-500 hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 My App. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li className="text-gray-400 hover:text-white">
              Privacy Policy
              {/* <Link to="/privacy" className="text-gray-400 hover:text-white">
                
              </Link> */}
            </li>
            <li className="text-gray-400 hover:text-white">
              {/* <Link to="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link> */}
              Terms of Service
            </li>
            <li>
              <NavLink to="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default HomePage;
