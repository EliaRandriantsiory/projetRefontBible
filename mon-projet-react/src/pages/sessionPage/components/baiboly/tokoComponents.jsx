import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { toko } from '../../../../store/actions';

const TokoComponent = () => {
	const items = ['1', '2']
	const mizahaboky = useSelector((state) => state.boky.mizahaBoky);
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const boky = searchParams.get('boky');
	const chapitre = searchParams.get('chapitre');
	const chapitres = Array.from({ length: parseInt(chapitre) }, (_, index) => index + 1);
		// console.log(boky)
	// console.log(mizahaboky)
	const handleToko = (value) => {
		console.log(value)
		dispatch(toko(value));
		// console.log("bonjour toko"+value)
	}


	return (
		<div className="bg-white ">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[75vh] overflow-y-scroll">
				{chapitres.map((item, index) => (
					<button key={index} onClick={() => handleToko(item)}>
					<Link to={`/session/baiboly/andininy?toko=${item}`} className="bg-blue-100 rounded-lg p-4 flex items-center justify-center">
					<span>{item}</span>
					</Link>
					</button>
				))}
			</div>
		</div>
	);
};

export default TokoComponent;
