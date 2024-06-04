import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar_Session from "./components/navbarSession";
import Footer_Session from "./components/footerSession";
import { useSelector } from "react-redux";

const HomepageSession = () => {
  const username = useSelector((state) => state.auth.username);

  return (
    <div className="bg-gray-100">
      {/* bonjour{username} */}
      <Navbar_Session username={username} />
      <div className="bg-white px-[2vw] py-[2vh] ">
        <Outlet />
        </div>

      {/* <HeroSection />
      <FeaturesSection /> */}
      {/* <Footer_Session /> */}
    </div>
  );
};
export default HomepageSession;
