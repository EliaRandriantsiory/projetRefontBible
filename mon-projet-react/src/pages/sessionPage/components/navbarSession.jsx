import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UserDropdown from "./dropdown";

const Navbar_Session = () => {
  const [username, setUsername]  =  useState('') //useSelector((state) => state.auth.username);
  const navigate = useNavigate();
 
  useEffect(() => {
    if(Cookies.get('username')){
      setUsername(Cookies.get('username'));
    
    }
    else{
      navigate("/",{ replace: true });
      Cookies.remove('username');
    }
    

    // Définir un cookie
    // Cookies.set('theme', 'dark', { expires: 7 }); // Expire dans 7 jours

    // Supprimer un cookie
    // Cookies.remove('user_token');
  }, []);
  return (
    <nav className="bg-gray-800 py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/session" className="text-white font-bold text-lg">
            Mon Application
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <Link to="/session" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="fampianarana" className="text-white hover:text-gray-300">
            Fampianarana
          </Link>
          <Link to="baiboly" className="text-white hover:text-gray-300">
            Baiboly
          </Link>
          <Link to="fihirana" className="text-white hover:text-gray-300">
            Fihirana
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {/* <Link to="profile" className="text-white hover:text-gray-300">
            <div className="text-white">Bienvenue, {username}!</div>
          </Link> */}
          <div className="flex justify-end">
      <UserDropdown username={username} />
    </div>
          {/* <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleOnClickDeconnexion}
          >
            Déconnexion
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar_Session;
