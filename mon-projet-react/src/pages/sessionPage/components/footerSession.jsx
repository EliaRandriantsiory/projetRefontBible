import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Footer_Session = () => {
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
export default Footer_Session;
