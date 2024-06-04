import React, { useEffect, useState } from "react";

import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ConfComponent from "../components/baiboly/confPrintComponent";

const Baiboly_session = () => {
	const [activeTab, setActiveTab] = useState(0);
  const [currentResult, setCurrentResult] = useState([]);
  const [currentBoky, setCurrentBoky] = useState("");
  const [currentToko, setCurrentToko] = useState("");
  const [currentAndininy, setCurrentAndininy] = useState("");
  const boky = useSelector((state) => state.boky.mizahaBoky);
	const dispatch = useDispatch();
	const handleTabClick = (index) => {

		setActiveTab(index);
	};
	
  useEffect(() => {
    setCurrentResult( boky.split(" "));
    // console.log(currentResult)
    
  },[boky])

	return (
		<div className="bg-white shadow-md max-h-[85vh] rounded-lg mx-15vw my-10px overflow-hidden flex">
		<div className="border-r border-gray-300 flex-col flex p-4">
			<button
				className={`px-4 py-2 text-gray-500 hover:text-gray-800 focus:outline-none flex items-center ${
					activeTab === 0
						? 'border-r-2 border-blue-500 text-blue-500 font-bold'
						: 'font-normal text-gray-400'
				}`}
				onClick={() => handleTabClick(0)}
			>
				<Link to="/session/baiboly" >
				Boky voalohany
			</Link> 
				
			</button>
			<button
				className={`px-4 py-2 text-gray-500 hover:text-gray-800 focus:outline-none flex items-center ${
					activeTab === 1
						? 'border-r-2 border-blue-500 text-blue-500 font-bold'
						: 'font-normal text-gray-400'
				}`}
				onClick={() => handleTabClick(1)}
			>
				<Link to="/session/baiboly/boky2" >
				Boky faharoa
					</Link>
			</button>
		</div>
		<div className="p-4 backdrop-blur-sm flex-1 flex flex-col">
		<ConfComponent />
      
		<Outlet />
		</div>
	</div>
	)
}
export default Baiboly_session;
