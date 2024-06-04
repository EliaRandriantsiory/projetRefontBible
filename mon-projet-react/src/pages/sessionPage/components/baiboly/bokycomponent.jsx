import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { boky, isaToko } from '../../../../store/actions';

const BokyComponent = () => {
	// const items = ['Pomme', 'Banane', 'Orange', 'Kiwi', 'Fraise','Pomme', 'Banane', 'Orange', 'Kiwi', 'Fraise','Pomme', 'Banane', 'Orange', 'Kiwi', 'Fraise','Pomme', 'Banane', 'Orange', 'Kiwi', 'Fraise','Pomme', 'Banane', 'Orange', 'Kiwi', 'Fraise','Pomme', 'Banane', 'Orange', 'Kiwi', 'Fraise'];
	// const [items_anct , setItems_anct] = useState([])
	// const [items_nvt , setItems_nvt] = useState([])
	// const items_anct = [{id: 24, bible: 'Jeremia', type_bible: 'anc_t', nbr_chapitre: 52}]
	// const [items_anct, setItemsAnct] = useState([]);
	const items_anct = []
	const items_nvts = []
	const [items, setItems]= useState([]);

	// const mizahaboky = useSelector((state) => state.boky.mizahaBoky);
	const dispatch = useDispatch();
	const handleBoky = (value) => {
		// console.log(value)
		dispatch(boky(value.bible));
		dispatch(isaToko(value.nbr_chapitre));
		// console.log("bonjour toko"+value)
	}

	useEffect(() => {
		$.ajax({
			url: "http://127.0.0.1:8000/api/listBaibolyCat/",
			type: "GET",
			headers: {
				"X-CSRFToken": $.cookie("csrftoken"),
			},
			success: function (response) {
				// setItems(response)
				// console.log((response.length))
				// setItems(JSON.parse(response))
				// console.log(response[0])

				let responseArray = Array.from(response)
				setItems(responseArray)
				// responseArray.forEach(element => {
				// 	// console.log(element)
				// 	// setItems(...items,element)

				// 	// if(element.type_bible==="anc_t"){
				// 	// 	items_anct.push(element)
				// 	// }
					
				// });
				
				// setItems(responseArray)
				
				// setItems(...items,response[0])
				// console.log(response[0])
				// setItems(...items,response[1])
				// console.log(response[1])

				// response.forEach(element => {
				// 	if(element.type_bible==="anc_t"){
				// 		// setItems_anct(...items_anct,element)
				// 		items_anct.push({id: 24, bible: 'Jeremia', type_bible: 'anc_t', nbr_chapitre: 52})
				// 		// console.log(element)
				// 		// console.log(typeof(element))
				// 		// console.log(element.id)
				// 		// items_anct.push(element.id)
				// 	}
				// 	else{
				// 		// items_nvts.push(element)
				// 	}

				// });
			// console.log(typeof(Object.values(response)))

			// response.forEach(element => {
			// console.log(element)
			// });
			},
			error: function (error) {
				console.log(error)
			},
				});
	},[])

	useEffect(() => {
		// console.log(typeof(items))
		// console.log(items.length)
		items.forEach(element => {
            if(element.type_bible==="anc_t"){
                // console.log(element)    
				// setItemsAnct(...items_anct, element)
				items_anct.push(element)
            }
            // console.log(element.type_bible)
        });
	},[items])

	useEffect(() => {
		// console.log(typeof(items))
		// console.log(items_anct.length)
		console.log((items_anct.length))
	},[items_anct])

	return (
		<div className="bg-white ">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[75vh] overflow-y-scroll">

				{items.map((item, index) => {
					
					if (item.type_bible==="anc_t") {
						return (
							
							<button key={index} onClick={() => handleBoky(item)}>
							{/* {item.type_bible}: {item.nom} */}
						<Link to={`/session/baiboly/toko?boky=${item.bible}&chapitre=${item.nbr_chapitre}`} className="bg-blue-100 rounded-lg p-4 flex items-center justify-center">
							<div className="w-8 h-8 rounded-full bg-blue-500 mr-4 flex justify-center items-center text-white">
								{item.nbr_chapitre}
							</div>
							<span>{item.bible}</span>
							</Link>
							
							</button>
						);
					  } else {
						return null
					  }
				}
				)}
{/* <div>bonjour</div> */}

				{/* { items.forEach(element => {
					
				}) } */}
	</div>
	</div>
	);
};

export default BokyComponent;
