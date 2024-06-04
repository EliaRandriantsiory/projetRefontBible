import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { bokyContent, toko } from '../../../../store/actions';

const TokoComponent = () => {
	const items = ['1', '2']
	const mizahaboky = useSelector((state) => state.boky.mizahaBoky);
	const isaToko = useSelector((state) => state.boky.isaToko);
	const currentToko = useSelector((state) => state.boky.currentToko);
	const dispatch = useDispatch();
	const [currentChapter, setCurrentChapter] = useState("")
	const chapitres = Array.from({ length: parseInt(isaToko) }, (_, index) => index + 1);
		// console.log(boky)
	// console.log(mizahaboky)
	useEffect(() => {
		// console.log(mizahaboky)
		// console.log(typeof(isaToko))
	},[])
	const handleToko = (value) => {
		// console.log("bonjour")
		console.log(parseInt(value))
		setCurrentChapter(value)

		let boky_ = `${mizahaboky} ${value}`
		console.log(currentToko)

		$.ajax({
			url: "http://127.0.0.1:8000/api/viewAll/",
			type: "POST",
			headers: {
			  "X-CSRFToken": $.cookie("csrftoken"),
			},
			data: {
			  boky: boky_
			},
			success: function (response) {
				// console.log(typeof(response))
				// console.log("Bonjour")
				dispatch(bokyContent(Array.from(response)));
				dispatch(toko(value));
				
				// setAllBokyContent(Array.from(response))
				// let verset =Array.from(response).length 
				// console.log(Array.from(response).length)
				// setVerset( Array.from({ length: verset }, (_, index) => index + 1))
				// setVerset( Array.from({ length: Array.from(response).length }, (_, index) => index + 1))
				// setVerset(Array.from({ length: parseInt(response) }, (_, index) => index + 1))
			},
			error: function (error) {
				console.log(error)
			},
		  });

		  
		
		// console.log("bonjour toko"+value)
	}

	// useEffect(() => {
	// 	let boky_ = `${mizahaboky} 10`
	// 	console.log(currentToko)

	// 	$.ajax({
	// 		url: "http://127.0.0.1:8000/api/viewAll/",
	// 		type: "POST",
	// 		headers: {
	// 		  "X-CSRFToken": $.cookie("csrftoken"),
	// 		},
	// 		data: {
	// 		  boky: boky_
	// 		},
	// 		success: function (response) {
	// 			// console.log(response)
	// 			console.log("Bonjour")
	// 			// setAllBokyContent(Array.from(response))
	// 			// let verset =Array.from(response).length 
	// 			// console.log(Array.from(response).length)
	// 			// setVerset( Array.from({ length: verset }, (_, index) => index + 1))
	// 			// setVerset( Array.from({ length: Array.from(response).length }, (_, index) => index + 1))
	// 			// setVerset(Array.from({ length: parseInt(response) }, (_, index) => index + 1))
	// 		},
	// 		error: function (error) {
	// 			console.log(error)
	// 		},
	// 	  });

	// },[currentToko])


	return (
		<div className="bg-white ">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[75vh] overflow-y-scroll">
				{chapitres.map((item, index) => (
					<button key={index} onClick={() => handleToko(item)}>
					<Link to={`/session/baiboly/andininy`} className="bg-blue-100 rounded-lg p-4 flex items-center justify-center">
					<span>{item}</span>
					</Link>
					</button>
				))}
			</div>
		</div>
	);
};

export default TokoComponent;
