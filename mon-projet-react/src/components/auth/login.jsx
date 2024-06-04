import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/_section.scss";
import { useDispatch } from "react-redux";
import { login } from '../../store/authSlice'; // Importez l'action login
import Cookies from 'js-cookie';
const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour authentifier l'utilisateur
    console.log("Email:", username);
    console.log("Password:", password);
    dispatch(login({ username: username }));
    $.ajax({
      url: "http://127.0.0.1:8000/api/Login/",
      type: "POST",
      headers: {
        "X-CSRFToken": $.cookie("csrftoken"),
      },
      data: {
        username: username,
        password: password,
      },
      success: function (response) {
        if (response.message == "Authentification réussie") {
          Cookies.set('username', username, { expires: 7 }); 
          navigate("/session",{ replace: true });
        } else {
        }
      },
      error: function (error) {
        console.log("Erreur:", error);
        console.log("Statut:", error.status);
        console.log("Message d'état:", error.statusText);
        if (error.responseJSON) {
          console.log("Détails de l'erreur:", error.responseJSON);
        } else {
          console.log("Réponse:", error.responseText);
        }
      },
    });
  };

  return (
    <div className="section_Auth">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
