import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { andininy, andininy2 } from '../../../../store/actions';
import { forEach } from 'lodash';

const Andininy2Component = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const mizahaboky = useSelector((state) => state.boky.mizahaBoky);
	const currentBokyContent = useSelector((state) => state.boky.bokyContent);
	const currentIsaAndininy = useSelector((state) => state.boky.isaAndininy);
	const dispatch = useDispatch();
	const [verset, setVerset] = useState()
	const [allBokyContent, setAllBokyContent] = useState([])
	const versets = Array.from({ length: currentIsaAndininy }, (_, index) => index + 1);
	const navigate = useNavigate();
	const toko = searchParams.get('toko');
	const items = ['1', '2']

		// console.log(toko)
	const handleAndininy = (value) => {
		console.log(value)
		
		dispatch(andininy2(value));

		navigate('/session/baiboly/andininy')
		// console.log("bonjour toko"+value)
	}

	useEffect(() => {
		// console.log(typeof(items))
		// console.log(items_anct.length)
		let tabBoky=mizahaboky.split(" ")
		// console.log(tabBoky)
		// let boky_ = `${tabBoky[0]} ${tabBoky[1]}`
		// console.log(mizahaboky)
		// console.log(tabBoky)
		// // console.log(Array.from(currentBokyContent).length)
		// console.log(versets)
		// console.log(currentIsaAndininy)
		// console.log(Array.from(currentBokyContent).length)

		// $.ajax({
		// 	url: "http://127.0.0.1:8000/api/viewAll/",
		// 	type: "POST",
		// 	headers: {
		// 	  "X-CSRFToken": $.cookie("csrftoken"),
		// 	},
		// 	data: {
		// 	  boky: boky_
		// 	},
		// 	success: function (response) {
		// 		setAllBokyContent(Array.from(response))
		// 		let verset =Array.from(response).length 
		// 		// console.log(Array.from(response).length)
		// 		setVerset( Array.from({ length: verset }, (_, index) => index + 1))
		// 		// setVerset( Array.from({ length: Array.from(response).length }, (_, index) => index + 1))
		// 		// setVerset(Array.from({ length: parseInt(response) }, (_, index) => index + 1))
		// 	},
		// 	error: function (error) {
		// 		console.log(error)
		// 	},
		//   });


		// {verset.map((item, index) => (
		// 	<button key={index} onClick={() => handleAndininy(item)}>
		// 		<Link  to={`/session/baiboly/andininy?andininy=${item}`} className="bg-blue-100 rounded-lg p-4 flex items-center justify-center">
		// 		<span>{item}</span>
		// 		</Link>
		// 	</button>
		// ))}



	},[])

	// useEffect(() => {
	// 	return (
	// 		<div className="bg-white ">
	
	// 			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[75vh] overflow-y-scroll">
	// 			bonjour
	// 			{/* {verset.map((item, index) => (
	// 			<button key={index} onClick={() => handleAndininy(item)}>
	// 				<Link  to={`/session/baiboly/andininy?andininy=${item}`} className="bg-blue-100 rounded-lg p-4 flex items-center justify-center">
	// 				<span>{item}</span>
	// 				</Link>
	// 			</button>
	// 		))} */}
	// 			</div>
	// 		</div>
	// 	);
	// },[verset])

	// useEffect(() => {
	// 	setVerset( Array.from({ length: allBokyContent.length }, (_, index) => index + 1))
	// 	console.log(Array.from({ length: allBokyContent.length }, (_, index) => index + 1))
	// 	// console.log(typeof(allBokyContent))
	// 	allBokyContent.forEach(element => {
	// 		// console.log(element)
	// 	});
	// 	// console.log((allBokyContent.length))
	// },[allBokyContent])

	return (
		<div className="bg-white ">

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[75vh] overflow-y-scroll">
			
			{versets.map((item, index) => (
			<button key={index} onClick={() => handleAndininy(item)} className="bg-blue-100 rounded-lg p-4 flex items-center justify-center">
				
				<span>{item}</span>
				
			</button>
		))}
			</div>
		</div>
	);
};

export default Andininy2Component;
