import React, { useEffect, useState } from "react";

import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const ConfComponent = () => {
	const [currentResult, setCurrentResult] = useState([]);
	const [currentBoky, setCurrentBoky] = useState("");
	const [currentToko, setCurrentToko] = useState("");
	const [currentAndininy, setCurrentAndininy] = useState("");
	const boky = useSelector((state) => state.boky.mizahaBoky);
	const dispatch = useDispatch();
	useEffect(() => {
		setCurrentResult( boky.split(" "));
        // console.log(boky)
		// console.log(currentResult)

		// <h2 className="text-lg font-bold mb-4" >Ny boky : <Link to="/session/baiboly" className="text-black hover:text-gray-300">
		// {currentResult[0]}
		// </Link> 
		// <Link to="/session/baiboly/toko" className="text-black hover:text-gray-300">
		// {currentResult[1]}
		// </Link> : <Link to="/session/baiboly/andininy" className="text-black hover:text-gray-300">
		// {currentResult[3]}
		// </Link> 
		// <button className="ml-5">
		// <Link to="/session/baiboly/result" className="text-black hover:text-gray-300">
		// Regarder
		// </Link> 
		// </button>
		// </h2>

			},[boky])
				useEffect(() => {
					// console.log(currentResult.length)
                    // console.log(currentResult)
				},[currentResult])


			if (currentResult.length===1 & currentResult[0]!=="") {
				return (
					<>
					<h2 className="text-lg font-bold mb-4" >Ny boky : <Link to="/session/baiboly" className="text-black hover:text-gray-300">
			{currentResult[0]}
		</Link> 
		</h2>
			</>
			)

			} else if(currentResult.length===2) {
				return (

					<h2 className="text-lg font-bold mb-4" >Ny boky : <Link to="/session/baiboly" className="text-black hover:text-gray-300">
			{currentResult[0]}
		</Link> 
			<Link to="/session/baiboly/toko" className="text-black hover:text-gray-300">
		{currentResult[1]}
		</Link>
		</h2>

			);
			}
				else{
					return null;
				}
}
export default ConfComponent;
